import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email template function
function generateEmailTemplate({ name, email, phone, message }: { name: string; email: string; phone: string; message: string }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #4a4a4a;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 0 0 5px 5px;
          border: 1px solid #ddd;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #666;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .message-box {
          background-color: white;
          padding: 15px;
          border-radius: 5px;
          border: 1px solid #eee;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Contact Form Submission</h1>
      </div>
      <div class="content">
        <p>You have received a new message from your portfolio website's contact form:</p>
        
        <div class="field">
          <div class="field-label">Name:</div>
          <div>${name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email:</div>
          <div>${email}</div>
        </div>

        <div class="field">
          <div class="field-label">Phone:</div>
          <div>${phone}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message:</div>
          <div class="message-box">${message}</div>
        </div>
      </div>
      <div class="footer">
        <p>This email was sent from Bilkes Perveen's portfolio website.</p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    // Extract data from request
    const { name, email, phone, message, subject = "New Contact Form Submission" } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields. Please provide name, email, phone, and message." }, 
        { status: 400 }
      );
    }

    // Generate HTML content using our template
    const htmlContent = generateEmailTemplate({ name, email, phone, message });

    // Configure email recipients
    const toEmail = process.env.CONTACT_EMAIL || "vedantkhanna40@gmail.com"; // Replace with your email or use env var

    // Send email using Resend
    const data = await resend.emails.send({
      from: "portfolio@bilkesperveen.in",
      to: [toEmail],
      replyTo: email,
      subject: `${subject} from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully", 
      data
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." }, 
      { status: 500 }
    );
  }
}
