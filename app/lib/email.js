// lib/email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDeliveryEmail({ 
  to, 
  customer_name, 
  order_number, 
  product_name, 
  resource_link,
  email_body 
}) {
  // In production: ONLY send to the customer
  const recipients = [to].filter(Boolean);

  if (recipients.length === 0) {
    console.error('No recipient email provided');
    return { error: 'No recipient' };
  }

  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM, // e.g., noreply@fizzern.com (after domain verification)
    to: recipients,
    subject: `Your ${product_name} is Ready! 🎮`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #000; color: #fff;">
        <h1 style="color: #dc2626;">Hey ${customer_name}!</h1>
        <p>Thank you for your purchase!</p>
        <p>Your order <strong>${order_number}</strong> has been confirmed and your product is ready.</p>
        
        ${email_body}
        
        <p style="margin-top: 30px;">
          Enjoy the game!<br/>
          <strong>FizzerN Gaming</strong>
        </p>
        
        <hr style="border: 1px solid #333; margin: 30px 0;" />
        <p style="font-size: 12px; color: #888;">
          Questions? Reply to this email or contact us on WhatsApp.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('Email send failed:', error);
  } else {
    console.log('Delivery email sent to:', recipients.join(', '));
  }

  return { data, error };
}