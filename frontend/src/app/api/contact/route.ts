import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiting store (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 inquiries per 10 mins

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Clean expired timestamps
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// HTML sanitizer function to prevent XSS / HTML injection in emails
function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // 1. IP extraction for Rate Limiting & Anti-Spam
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few minutes before submitting another inquiry.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, industry, message, honeypot } = body;

    // 2. Honeypot check (Bots fill hidden fields automatically)
    if (honeypot && String(honeypot).trim() !== '') {
      // Fake success for bots to prevent them from retrying
      return NextResponse.json({ success: true, message: 'Inquiry received' });
    }

    // 3. Validation & Length Constraints
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Message is required.' }, { status: 400 });
    }

    if (name.length > 100 || (phone && phone.length > 30) || (email && email.length > 100) || message.length > 3000) {
      return NextResponse.json({ success: false, error: 'Input exceeded allowable length.' }, { status: 400 });
    }

    // 4. Sanitize all inputs before using in email template
    const cleanName = escapeHtml(name.trim());
    const cleanPhone = phone ? escapeHtml(phone.trim()) : '';
    const cleanEmail = email ? escapeHtml(email.trim()) : '';
    const cleanIndustry = industry ? escapeHtml(industry.trim()) : 'General Inquiry';
    const cleanMessage = escapeHtml(message.trim());

    const gmailUser = process.env.GMAIL_USER || 'siyaramprofile82@gmail.com';
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
    const recipient = process.env.RECIPIENT_EMAIL || 'siyaramprofile82@gmail.com';

    if (!gmailPass) {
      console.error('GMAIL_APP_PASSWORD is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured. Please contact us via phone or direct email.' },
        { status: 500 }
      );
    }

    // 5. Configure Nodemailer Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Siyaram Profile Website" <${gmailUser}>`,
      to: recipient,
      replyTo: cleanEmail && cleanEmail !== '' ? cleanEmail : gmailUser,
      subject: `🔔 New Inquiry: ${cleanName} (${cleanIndustry})`,
      text: `New Website Inquiry - Siyaram Profile\n\nName: ${cleanName}\nPhone: ${cleanPhone || 'Not provided'}\nEmail: ${cleanEmail || 'Not provided'}\nIndustry: ${cleanIndustry}\n\nMessage:\n${cleanMessage}\n\nReceived: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #1D3557; padding: 20px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px;">SIYARAM PROFILE</h2>
            <p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.8;">New Customer Inquiry from Website</p>
          </div>
          
          <div style="padding: 24px; color: #333333; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #555555;">Full Name:</td>
                <td style="padding: 10px 0; color: #1D3557; font-weight: 600;">${cleanName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #555555;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0;">
                  <a href="tel:${cleanPhone}" style="color: #0077B6; text-decoration: none; font-weight: 600;">${cleanPhone || 'Not provided'}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #555555;">Email Address:</td>
                <td style="padding: 10px 0;">
                  ${cleanEmail ? `<a href="mailto:${cleanEmail}" style="color: #0077B6; text-decoration: none;">${cleanEmail}</a>` : '<span style="color: #888888;">Not provided</span>'}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #555555;">Industry:</td>
                <td style="padding: 10px 0; color: #333333;">${cleanIndustry}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555555;">Time:</td>
                <td style="padding: 10px 0; color: #777777; font-size: 13px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
              </tr>
            </table>

            <div style="background-color: #f8f9fa; padding: 16px; border-left: 4px solid #1D3557; border-radius: 4px; margin-top: 15px;">
              <h4 style="margin: 0 0 8px 0; color: #1D3557; font-size: 14px; text-transform: uppercase;">Message / Project Specifications:</h4>
              <p style="margin: 0; white-space: pre-line; color: #222222; font-size: 14px;">${cleanMessage}</p>
            </div>
          </div>

          <div style="background-color: #f1f5f9; padding: 12px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This email was sent securely from the inquiry system at <a href="https://siyaramprofile.com" style="color: #1D3557; text-decoration: none;">Siyaram Profile</a>.
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent directly to siyaramprofile82@gmail.com',
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error('Secure email dispatch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to dispatch email securely. Please try again.' },
      { status: 500 }
    );
  }
}
