'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ContactFormProps {
  type?: 'contact' | 'demo';
}

export function ContactForm({ type = 'contact' }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    const currentForm = formRef.current;
    
    toast.loading('Sending message...', { id: 'contact' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      toast.success('Message sent successfully! We\'ll get back to you soon.', { id: 'contact' });
      if (currentForm) {
        currentForm.reset();
      }
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.', { id: 'contact' });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
    </form>
  );
}
