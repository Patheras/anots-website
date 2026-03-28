'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getOrCreateSessionId } from '@/lib/founderResponder';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

type EyeState = 'normal' | 'blink' | 'surprised';

function BotAvatar({ className = '' }: { className?: string }) {
  const [eyeState, setEyeState] = useState<EyeState>('normal');

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      // Random blink every 3-5 seconds
      const randomDelay = Math.random() * 2000 + 3000;
      setTimeout(() => {
        setEyeState('blink');
        setTimeout(() => setEyeState('normal'), 150);
      }, randomDelay);
    }, 5000);

    // Random surprise every 8-12 seconds
    const surpriseInterval = setInterval(() => {
      const randomDelay = Math.random() * 4000 + 8000;
      setTimeout(() => {
        setEyeState('surprised');
        setTimeout(() => setEyeState('normal'), 800);
      }, randomDelay);
    }, 12000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(surpriseInterval);
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={{ willChange: 'transform' }}>
      {/* Gray round head - almost black outside to gray center */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0A0A0B] to-[#52525B] shadow-lg">
        {/* Eyes container */}
        <div className="absolute inset-0 flex items-center justify-center gap-2.5">
          {/* Left eye */}
          <div className="relative" style={{ willChange: 'transform' }}>
            {eyeState === 'blink' ? (
              <div className="w-3 h-0.5 bg-white rounded-full" />
            ) : eyeState === 'surprised' ? (
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            ) : (
              <div className="w-3 h-3 bg-white rounded-full" />
            )}
          </div>
          {/* Right eye */}
          <div className="relative" style={{ willChange: 'transform' }}>
            {eyeState === 'blink' ? (
              <div className="w-3 h-0.5 bg-white rounded-full" />
            ) : eyeState === 'surprised' ? (
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            ) : (
              <div className="w-3 h-3 bg-white rounded-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Axiom, the ΛNOTS navigator. Ask me anything about the network, tools, or the manifesto. 🚩"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize session ID
  useEffect(() => {
    setSessionId(getOrCreateSessionId());
  }, []);

  // Show greeting after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowGreeting(true);
        // Hide greeting after 5 seconds
        setTimeout(() => setShowGreeting(false), 5000);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat-bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: messages, sessionId }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble right now. Please try again or contact us at hello@anots.com" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Greeting Bubble */}
      {!isOpen && showGreeting && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 animate-fade-in">
          <div className="relative">
            <div className="bg-[#111113] border border-[#1A1A1B] rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-sm text-[#FAFAFA] font-medium">Hello! 👋</p>
            </div>
            {/* Speech bubble arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#111113] border-r border-b border-[#1A1A1B] transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-4 sm:right-6 z-40 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center transition-all hover:scale-105 animate-float"
          aria-label="Open chat"
          style={{ isolation: 'isolate' }}
        >
          {/* White glow behind - soft blur */}
          <div className="absolute inset-0 rounded-full bg-white blur-md -z-10 animate-glow-pulse"></div>
          <div className="relative z-10">
            <BotAvatar className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-40 flex h-[500px] sm:h-[500px] w-auto sm:w-[380px] max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-[#1A1A1B] bg-[#0A0A0B] shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1A1A1B] p-4">
            <div className="flex items-center gap-3">
              <div className="animate-float">
                <BotAvatar className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#FAFAFA]">Axiom</h3>
                <p className="text-xs text-[#71717A]">ΛNOTS Navigator</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#71717A] hover:text-[#FAFAFA] transition-colors"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3] text-white'
                      : 'bg-[#1A1A1B] text-[#D4D4D8]'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <div 
                      className="prose prose-invert prose-sm max-w-none prose-a:text-[#7C85E3] prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ 
                        __html: message.content
                          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                          .replace(/\n/g, '<br />')
                      }}
                    />
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1B] rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-[#71717A] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-[#71717A] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-[#71717A] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-[#1A1A1B] p-4">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ANOTS..."
                disabled={isLoading}
                className="w-full rounded-lg border border-[#1A1A1B] bg-[#0F0F10] pl-4 pr-12 py-2.5 text-base text-[#FAFAFA] placeholder-[#71717A] focus:border-[#5E6AD2] focus:outline-none focus:ring-1 focus:ring-[#5E6AD2] disabled:opacity-50 transition-all"
              />
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                size="sm"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3] hover:opacity-90 disabled:opacity-30"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
