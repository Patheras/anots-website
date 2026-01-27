import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendWaitlistConfirmation } from '@/lib/email';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase not configured:', { supabaseUrl, supabaseAnonKey });
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email, name, company } = body;

    console.log('Received submission:', { email, name, company });

    // Validation
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist_applications')
      .insert([
        {
          email: email.toLowerCase().trim(),
          name: name.trim(),
          company: company?.trim() || null,
          source: 'closed-beta-page',
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      // Check for duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already registered for beta access' },
          { status: 409 }
        );
      }

      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    // Send confirmation email (don't block on email failure)
    sendWaitlistConfirmation(name, email).catch((err) => {
      console.error('Failed to send confirmation email:', err);
    });

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully registered for beta access!',
        data: {
          id: data.id,
          email: data.email,
          name: data.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
