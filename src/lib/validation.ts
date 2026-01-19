import { z } from 'zod';

/**
 * Contact Form Validation Schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),

  company: z
    .string()
    .trim()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Demo Request Form Validation Schema
 */
export const demoFormSchema = contactFormSchema.extend({
  preferredDate: z
    .string()
    .optional()
    .refine(
      (date) => {
        if (!date) return true;
        return new Date(date) > new Date();
      },
      'Preferred date must be in the future'
    ),

  preferredTime: z
    .string()
    .optional()
    .refine(
      (time) => {
        if (!time) return true;
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
      },
      'Invalid time format (use HH:MM)'
    ),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;

/**
 * Validate email format
 */
export function validateEmail(email: string): { success: boolean; error?: string } {
  try {
    z.string().email().parse(email);
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Invalid email format' };
  }
}
