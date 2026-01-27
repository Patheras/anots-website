'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'sonner';

export default function ClosedBetaPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-04-06T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navigation />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#0F0F10',
            border: '1px solid #5E6AD2',
            color: '#FAFAFA',
          },
        }}
      />
      
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FAFAFA] mb-6">
                Closed Beta
              </h1>
              <p className="text-xl sm:text-2xl text-[#D4D4D8] max-w-3xl mx-auto">
                We're launching on a special day
              </p>
            </div>

            {/* Countdown */}
            <div className="mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
                {/* Days */}
                <div className="bg-[#0F0F10] border border-[#1A1A1B] rounded-2xl p-8 lg:p-12">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-[#5E6AD2] to-[#7C85E3] bg-clip-text text-transparent mb-4">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-lg sm:text-xl text-[#A1A1AA] uppercase tracking-wider">
                    Days
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#0F0F10] border border-[#1A1A1B] rounded-2xl p-8 lg:p-12">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-[#5E6AD2] to-[#7C85E3] bg-clip-text text-transparent mb-4">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-lg sm:text-xl text-[#A1A1AA] uppercase tracking-wider">
                    Hours
                  </div>
                </div>

                {/* Minutes */}
                <div className="bg-[#0F0F10] border border-[#1A1A1B] rounded-2xl p-8 lg:p-12">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-[#5E6AD2] to-[#7C85E3] bg-clip-text text-transparent mb-4">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-lg sm:text-xl text-[#A1A1AA] uppercase tracking-wider">
                    Minutes
                  </div>
                </div>

                {/* Seconds */}
                <div className="bg-[#0F0F10] border border-[#1A1A1B] rounded-2xl p-8 lg:p-12">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-[#5E6AD2] to-[#7C85E3] bg-clip-text text-transparent mb-4">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-lg sm:text-xl text-[#A1A1AA] uppercase tracking-wider">
                    Seconds
                  </div>
                </div>
              </div>

              {/* Launch Date */}
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAFAFA] mb-4">
                April 6, 2025
              </div>
              <div className="text-lg sm:text-xl text-[#D4D4D8]">
                Launching on Isaac Asimov's Memorial Day
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-[#0F0F10] border border-[#5E6AD2]/20 rounded-2xl p-8 lg:p-12">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-[#D4D4D8] italic mb-6">
                  "I do not fear computers. I fear lack of them."
                </blockquote>
                <div className="text-lg sm:text-xl text-[#A1A1AA]">
                  — Isaac Asimov
                </div>
                <div className="text-sm text-[#71717A] mt-2">
                  January 2, 1920 – April 6, 1992
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-[#A1A1AA] mb-6">
                Be among the first to experience ANOTS
              </p>
              
              {/* Beta Application Form */}
              <div className="max-w-md mx-auto">
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const email = formData.get('email') as string;
                  const name = formData.get('name') as string;
                  const company = formData.get('company') as string;
                  
                  // Show loading toast
                  const loadingToast = toast.loading('Submitting your application...');
                  
                  try {
                    const response = await fetch('/api/beta-signup', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email, name, company }),
                    });

                    const data = await response.json();

                    // Dismiss loading toast
                    toast.dismiss(loadingToast);

                    if (response.ok) {
                      toast.success('🎉 Welcome to the waitlist!', {
                        description: "We'll notify you on April 6, 2025 when we launch!",
                        duration: 5000,
                      });
                      form.reset();
                    } else {
                      toast.error('Submission failed', {
                        description: data.error || 'Something went wrong. Please try again.',
                        duration: 4000,
                      });
                    }
                  } catch (error) {
                    toast.dismiss(loadingToast);
                    console.error('Submission error:', error);
                    toast.error('Connection error', {
                      description: 'Please check your connection and try again.',
                      duration: 4000,
                    });
                  }
                }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-[#0F0F10] border border-[#1A1A1B] rounded-lg text-[#FAFAFA] placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2] focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-[#0F0F10] border border-[#1A1A1B] rounded-lg text-[#FAFAFA] placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2] focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    className="w-full px-4 py-3 bg-[#0F0F10] border border-[#1A1A1B] rounded-lg text-[#FAFAFA] placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2] focus:border-transparent"
                  />
                  <Button
                    type="submit"
                    variant="magic"
                    size="lg"
                    className="w-full"
                  >
                    Apply for Beta Access
                  </Button>
                </form>
                <p className="text-sm text-[#71717A] mt-4">
                  We'll notify you when we launch on April 6, 2025
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
