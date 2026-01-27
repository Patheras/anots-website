import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendNewsletterWelcome } from '@/lib/email';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email: email.toLowerCase().trim(),
          status: 'active',
        },
      ])
      .select()
      .single();

    if (error) {
      // Check for duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { success: false, message: 'This email is already subscribed' },
          { status: 409 }
        );
      }

      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    // Send welcome email (don't block on email failure)
    sendNewsletterWelcome(email).catch((err) => {
      console.error('Failed to send newsletter welcome email:', err);
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully subscribed to newsletter'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
