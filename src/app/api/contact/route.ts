import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, subject, message } = body;

        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address must match authenticated user
            replyTo: email, // Set reply-to as the person submitting the form
            to: process.env.SMTP_USER, // Send to the configured admin email
            subject: `New Contact Form Submission: ${subject}`,
            text: `
You have received a new contact form submission from the Utatu International website.

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <p>You have received a new message from the website contact form.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 120px;">Name</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">
                        <a href="mailto:${email}">${email}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
                </tr>
            </table>
            <h3 style="margin-top: 30px; color: #333;">Message:</h3>
            <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0056b3; white-space: pre-wrap;">${message}</div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}
