// Reference: javascript_sendgrid integration
import { MailService } from '@sendgrid/mail';

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

// Simple HTML escaping function
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Check if API key is available
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY environment variable not set');
      return false;
    }

    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);

    const emailData = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '', // Always include text version
      html: params.html || params.text || '', // Fall back to text if no HTML
    };
    
    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}