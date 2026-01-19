import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

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

    // TODO: Send email notification (integrate with email service)
    // For now, just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Store submission in database (optional)

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
