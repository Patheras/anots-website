import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email template'lerini oku
function getEmailTemplate(templateName: string): string {
  const templatePath = path.join(process.cwd(), 'email-templates', `${templateName}.html`);
  return fs.readFileSync(templatePath, 'utf-8');
}

// Waitlist confirmation email
export async function sendWaitlistConfirmation(name: string, email: string) {
  const template = getEmailTemplate('waitlist-confirmation');
  const html = template.replace(/\{\{NAME\}\}/g, name);

  try {
    await resend.emails.send({
      from: 'ANOTS <onboarding@resend.dev>', // Test domain - change to noreply@anots.com after domain verification
      to: email,
      subject: "You're on the ANOTS Waitlist 🚀",
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send waitlist email:', error);
    return { success: false, error };
  }
}

// Newsletter welcome email
export async function sendNewsletterWelcome(email: string) {
  const template = getEmailTemplate('newsletter-welcome');
  // Unsubscribe URL'i ekle (şimdilik placeholder)
  const html = template.replace(/\{\{UNSUBSCRIBE_URL\}\}/g, `https://anots.com/unsubscribe?email=${encodeURIComponent(email)}`);

  try {
    await resend.emails.send({
      from: 'ANOTS <onboarding@resend.dev>', // Test domain - change to noreply@anots.com after domain verification
      to: email,
      subject: 'Welcome to ANOTS Updates 📬',
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send newsletter email:', error);
    return { success: false, error };
  }
}

// Contact form confirmation email
export async function sendContactConfirmation(name: string, email: string, message: string) {
  const template = getEmailTemplate('contact-confirmation');
  const html = template
    .replace(/\{\{NAME\}\}/g, name)
    .replace(/\{\{MESSAGE\}\}/g, message);

  try {
    await resend.emails.send({
      from: 'ANOTS <onboarding@resend.dev>', // Test domain - change to info@anots.com after domain verification
      to: email,
      subject: "We've received your message ✓",
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send contact confirmation email:', error);
    return { success: false, error };
  }
}

// Internal notification email (contact form'dan sana bildirim)
export async function sendContactNotification(name: string, email: string, company: string | undefined, message: string) {
  const html = `
    <div style="font-family: monospace; background: #0a0a0a; color: #ededed; padding: 20px; border-radius: 8px;">
      <h2 style="color: #5e6ad2;">🔔 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <div style="background: #161616; padding: 16px; border-radius: 6px; border-left: 3px solid #5e6ad2;">
        ${message}
      </div>
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        Reply to: <a href="mailto:${email}" style="color: #5e6ad2;">${email}</a>
      </p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'ANOTS Website <onboarding@resend.dev>', // Test domain - change to info@anots.com after domain verification
      to: 'info@anots.com', // Change this to your actual email
      subject: `New Contact: ${name} from ${company || 'N/A'}`,
      html,
      replyTo: email,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send contact notification:', error);
    return { success: false, error };
  }
}
