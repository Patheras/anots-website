'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactFormProps {
  type?: 'contact' | 'demo';
}

export function ContactForm({ type = 'contact' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-[#FAFAFA]">
          Name *
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-[#EF4444]">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-[#FAFAFA]">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-[#EF4444]">{errors.email.message}</p>
        )}
      </div>

      {/* Company Field */}
      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm font-medium text-[#FAFAFA]">
          Company
        </Label>
        <Input
          id="company"
          type="text"
          placeholder="Acme Inc."
          {...register('company')}
          aria-invalid={!!errors.company}
        />
        {errors.company && (
          <p className="text-sm text-[#EF4444]">{errors.company.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-[#FAFAFA]">
          Message *
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your needs..."
          {...register('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-[#EF4444]">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="rounded-md bg-[#10B981]/10 border border-[#10B981]/20 p-4">
          <p className="text-sm text-[#10B981]">
            Thank you for contacting us! We'll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="rounded-md bg-[#EF4444]/10 border border-[#EF4444]/20 p-4">
          <p className="text-sm text-[#EF4444]">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}
    </form>
  );
}
