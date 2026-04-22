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
            // Section 1
            fullName, dateOfBirth, gender, nationality, countryOfResidence, cityOfResidence, primaryLanguage, additionalLanguages,
            // Section 2
            currentSchool, schoolCountry, currentCurriculum, currentGrade, cambridgeStage, intendedStartTerm, intendedStartYear,
            // Section 3
            learningMode, hasDevice, internetQuality, homeSupportPerson, hoursAvailable, studiedOnlineBefore, onlineStudyDetails,
            // Section 4
            selectedSubjects, otherSubjects, subjectNotes,
            // Section 5
            learningNeeds, learningNeedsDetails, medicalConditions, everExcluded, exclusionDetails,
            // Section 6
            parentName, parentRelationship, parentPhone, parentEmail, secondaryContactName, secondaryContactRelationship, secondaryContactPhone, secondaryContactEmail, preferredContact, bestTimeToContact, howDidYouHear,
            // Section 7
            signature
        } = body;

        if (!fullName || !parentEmail) {
             return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL as string,
            replyTo: parentEmail,
            to: RECIPIENTS,
            subject: `New Admission Application: ${fullName}`,
            html: `
        <div style="font-family: sans-serif; max-width: 700px; margin: 0 auto; color: #333;">
            <h2 style="color: #004d40; border-bottom: 2px solid #004d40; padding-bottom: 10px;">New Admission Form Submission</h2>
            <p>You have received a new admission application via the Utatu International website.</p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><th colspan="2" style="background-color: #f1f5f9; padding: 10px; text-align: left; font-size: 16px;">1. Student Details</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd; width: 35%;"><strong>Full Name</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Date of Birth</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${dateOfBirth}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Gender</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${gender}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Nationality</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${nationality}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Residence</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${cityOfResidence}, ${countryOfResidence}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Language(s)</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${primaryLanguage} (Additional: ${additionalLanguages || 'None'})</td></tr>

                <tr><th colspan="2" style="background-color: #f1f5f9; padding: 10px; text-align: left; font-size: 16px;">2. Academic Details</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Current School</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${currentSchool} (${schoolCountry})</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Current Curriculum/Grade</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${currentCurriculum} - ${currentGrade}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Applying for Cambridge Stage</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${cambridgeStage}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Intended Start Term</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${intendedStartTerm} ${intendedStartYear}</td></tr>

                <tr><th colspan="2" style="background-color: #f1f5f9; padding: 10px; text-align: left; font-size: 16px;">3. Learning Setup</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Mode / Device</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${learningMode} / ${hasDevice}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Internet Quality</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${internetQuality}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Home Support</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${homeSupportPerson}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Hours Available</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${hoursAvailable}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Studied Online Before?</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${studiedOnlineBefore} ${studiedOnlineBefore === 'yes' ? `(Details: ${onlineStudyDetails})` : ''}</td></tr>

                <tr><th colspan="2" style="background-color: #f1f5f9; padding: 10px; text-align: left; font-size: 16px;">4. Subjects</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Selected Subjects</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${selectedSubjects?.join(', ') || 'N/A'}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Other Subjects</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${otherSubjects || 'N/A'}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Subject Notes</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${subjectNotes || 'N/A'}</td></tr>

                <tr><th colspan="2" style="background-color: #f1f5f9; padding: 10px; text-align: left; font-size: 16px;">5. Requirements</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Learning Needs</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${learningNeeds} ${learningNeeds === 'yes' ? `(Details: ${learningNeedsDetails})` : ''}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Medical Conditions</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${medicalConditions || 'None'}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Ever Excluded?</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${everExcluded} ${everExcluded === 'yes' ? `(Details: ${exclusionDetails})` : ''}</td></tr>

                <tr><th colspan="2" style="background-color: #f1f5f9; padding: 10px; text-align: left; font-size: 16px;">6. Parent / Guardian</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Primary Contact</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${parentName} (${parentRelationship})</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Primary Contact Info</strong></td><td style="padding: 10px; border: 1px solid #ddd;">Phone: ${parentPhone} <br> Email: <a href="mailto:${parentEmail}">${parentEmail}</a></td></tr>
                
                ${secondaryContactName ? `
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Secondary Contact</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${secondaryContactName} (${secondaryContactRelationship})</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Secondary Contact Info</strong></td><td style="padding: 10px; border: 1px solid #ddd;">Phone: ${secondaryContactPhone} <br> Email: <a href="mailto:${secondaryContactEmail}">${secondaryContactEmail}</a></td></tr>
                ` : ''}
                
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Communication Preferences</strong></td><td style="padding: 10px; border: 1px solid #ddd;">Contact via: ${preferredContact} <br> Best Time: ${bestTimeToContact}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>How Did You Hear About Us?</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${howDidYouHear}</td></tr>
            </table>

            <h3 style="margin-top: 30px; color: #333;">7. Declaration / Signature:</h3>
            <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #004d40;">
                <em>Signed electronically by:</em> <strong>${signature}</strong>
            </div>

            <p style="margin-top: 40px; color: #777; font-size: 12px; border-top: 1px solid #ddd; padding-top: 10px;">
                This email was generated from the Utatu International website Admission Form.
            </p>
        </div>
      `,
        });

        if (data.error) {
            console.error('Resend error:', data.error);
            return NextResponse.json({ error: 'Failed to submit application. Please try again later.' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Application submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error handling admission API path:', error);
        return NextResponse.json({ error: 'Failed to submit application. Please try again later.' }, { status: 500 });
    }
}
