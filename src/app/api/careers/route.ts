import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
    'linetkilonzi@gmail.com',
    'joshuaisaiahn20@gmail.com',
    'utatuinternational@gmail.com',
    'admin@utatuinternational.com',
    'ndemoraphael4@gmail.com'
];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            fullName,
            email,
            phone,
            roleInterest,
            experienceYears,
            curriculumExperience,
            portfolioOrResumeUrl,
            message,
        } = body;

        if (!fullName || !email || !roleInterest) {
            return NextResponse.json(
                { error: 'Please provide all required fields: name, email, and preferred role.' },
                { status: 400 }
            );
        }

        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

        const data = await resend.emails.send({
            from: fromEmail,
            replyTo: email,
            to: RECIPIENTS,
            subject: `New Talent Network Application: ${fullName} (${roleInterest})`,
            html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
            <div style="background-color: #001A00; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Utatu International Careers</h1>
                <p style="color: #d4af37; margin: 4px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">New Talent Network Submission</p>
            </div>
            
            <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; background: #ffffff;">
                <p style="font-size: 15px; margin-top: 0;">A prospective candidate has submitted a general application to join the Utatu International talent network.</p>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; width: 35%; color: #4a5568;">Applicant Name</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #001A00;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #4a5568;">Email Address</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">
                                <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #4a5568;">Phone Number</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #4a5568;">Role of Interest</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #001A00;">${roleInterest}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #4a5568;">Experience (Years)</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${experienceYears || 'Not specified'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #4a5568;">Curriculum Experience</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${curriculumExperience || 'Not specified'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: 600; color: #4a5568;">Resume / Portfolio / LinkedIn</td>
                            <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">
                                ${
                                    portfolioOrResumeUrl
                                        ? `<a href="${portfolioOrResumeUrl}" target="_blank" rel="noopener noreferrer" style="color: #0066cc;">${portfolioOrResumeUrl}</a>`
                                        : 'Not provided'
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>

                ${
                    message
                        ? `
                <div style="margin-top: 24px;">
                    <h3 style="font-size: 15px; font-weight: 600; color: #001A00; margin-bottom: 8px;">Candidate Introduction / Cover Note:</h3>
                    <div style="padding: 16px; background-color: #f7fafc; border-left: 4px solid #001A00; border-radius: 4px; font-size: 14px; white-space: pre-wrap;">${message}</div>
                </div>`
                        : ''
                }

                <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096; text-align: center;">
                    This application was sent via the Careers page on <a href="https://www.utatuinternational.com/careers" style="color: #718096;">utatuinternational.com</a>.
                </div>
            </div>
        </div>
      `,
        });

        if (data.error) {
            console.error('Resend error in /api/careers:', data.error);
            return NextResponse.json(
                { error: 'Failed to submit application. Please try again or email us directly at admin@utatuinternational.com.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Application submitted successfully! Our team will reach out when matching roles open up.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error handling careers application:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later or contact us directly.' },
            { status: 500 }
        );
    }
}
