import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { createClient } from '@supabase/supabase-js';
import { sendContactConfirmation, sendContactNotification } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, message } = validationResult.data;

    // Store submission in Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          company: company || null,
          message,
          status: 'new',
        },
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save contact message');
    }

    // Send confirmation email to user (don't block on email failure)
    sendContactConfirmation(name, email, message).catch((err) => {
      console.error('Failed to send contact confirmation email:', err);
    });

    // Send notification email to you (don't block on email failure)
    sendContactNotification(name, email, company, message).catch((err) => {
      console.error('Failed to send contact notification email:', err);
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us. We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
