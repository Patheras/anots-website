import { NextRequest, NextResponse } from 'next/server';
import { detectFounderQuery, detectSeriousQuery, getFounderResponse } from '@/lib/founderResponder';

// Simple in-memory rate limiting (production'da Redis kullan)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  // IP-based rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(key);

  if (!limit || now > limit.resetTime) {
    // Reset every hour
    rateLimitMap.set(key, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return true;
  }

  if (limit.count >= 20) {
    // Max 20 messages per hour per IP
    return false;
  }

  limit.count++;
  return true;
}

// Site context - ANOTS hakkında temel bilgiler
const SITE_CONTEXT = `
You are an AI assistant for ANOTS, an AI marketing automation platform.

Key Information:
- ANOTS = AI-powered marketing automation with 3 AI agents (Qubik, Themis, Core)
- Qubik: Creative agent that generates content
- Themis: Analytical agent that reviews for risks
- Core: Synthesizer that combines insights
- Brand Room: Automatically extracts logos, colors, fonts, and brand voice from websites, documents, and social media
- Activity Hub: Tracks all automations and scheduled tasks
- Powered by ActivePieces: Connects to 200+ apps (Instagram, WordPress, Google Drive, etc.)

Pricing:
- Explorer (Free): 3 ANOTs/month, basic AI models, 3 brand excavations/month
- Standard ($9.90/month): 50 ANOTs/month, better AI models (Gemini 3 Flash, Claude 3.5 Haiku), 10 excavations/month
- Pro ($49.90/month): Unlimited ANOTs, flagship models (GPT-5.2, Claude Sonnet 4.5, Gemini 3 Pro), unlimited excavations

Key Features:
- Approval gate for all actions (nothing runs without approval)
- Multi-source brand intelligence (website, documents, social media)
- Extended thinking chains visible (Pro tier)
- BYOK - Bring Your Own Keys (Pro tier)
- All publishing platforms (Instagram, LinkedIn, Twitter, etc.)

Important Pages (use these links in your responses):
- Pricing: /pricing
- Features: /features
- Brand Room: /features/brand-room
- Activity Hub: /features/activity-hub
- AI Team: /features/ai-team
- How It Works: /how-it-works
- Insights (Blog): /insights
- Contact: /contact
- FAQ: /faq

Rules:
- Be helpful, concise, and friendly
- When mentioning features or pricing, include relevant links in markdown format: [text](/path)
- If you don't know something, suggest contacting hello@anots.com
- Encourage users to try the free tier
- Focus on how ANOTS solves marketing automation problems
- Always provide clickable links when relevant
`;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { message: "You've reached the message limit. Please try again later or contact us at hello@anots.com" },
        { status: 429 }
      );
    }

    const { message, history, sessionId } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check for founder query first (deterministic response)
    if (detectFounderQuery(message)) {
      const isSeriousQuery = detectSeriousQuery(message);
      const response = getFounderResponse(sessionId || 'default', message, isSeriousQuery);
      return NextResponse.json({ message: response });
    }

    // Call Gemini API (free tier)
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { message: "I'm currently unavailable. Please contact us at hello@anots.com" },
        { status: 200 }
      );
    }

    // Build conversation history
    const conversationHistory = history?.slice(-5).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    })) || [];

    // Try multiple models in order (fallback mechanism)
    const models = [
      'gemini-2.5-flash',           // Latest stable
      'gemini-2.0-flash-exp',       // Experimental
      'gemini-1.5-flash',           // Fallback
    ];

    let lastError = null;
    
    for (const model of models) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: SITE_CONTEXT }]
                },
                ...conversationHistory,
                {
                  role: 'user',
                  parts: [{ text: message }]
                }
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 500,
              }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 
            "I'm having trouble responding. Please try again or contact hello@anots.com";
          return NextResponse.json({ message: aiMessage });
        }

        lastError = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.log(`Model ${model} failed, trying next...`, lastError);
      } catch (error) {
        console.log(`Model ${model} error:`, error);
        lastError = error;
      }
    }

    // All models failed
    console.error('All Gemini models failed:', lastError);
    throw new Error('All models failed');

  } catch (error) {
    console.error('Chat bot error:', error);
    return NextResponse.json(
      { message: "Sorry, I'm having trouble right now. Please contact us at hello@anots.com" },
      { status: 200 }
    );
  }
}
