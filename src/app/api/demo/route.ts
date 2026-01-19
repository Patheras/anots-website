import { NextResponse } from 'next/server';
import { demoFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = demoFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, message, preferredDate, preferredTime } =
      validationResult.data;

    // TODO: Send email notification with demo request details
    // For now, just log the submission
    console.log('Demo request submission:', {
      name,
      email,
      company,
      message,
      preferredDate,
      preferredTime,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with calendar scheduling (Calendly, Cal.com, etc.)
    // TODO: Store submission in database (optional)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for requesting a demo. We'll contact you soon to schedule it.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
