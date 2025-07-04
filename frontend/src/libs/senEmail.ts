import { Resend } from 'resend';

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
    cc?: string[];
    bcc?: string[];
}

export const sendEmail = async ({ to, subject, html, cc, bcc }: EmailOptions) => {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.EMAIL_FROM;

    if (!apiKey || !from) {
        throw new Error("Missing RESEND_API_KEY or EMAIL_FROM in environment variables");
    }

    const resend = new Resend(apiKey);

    try {
        const { data, error } = await resend.emails.send({
            from,
            to: [to],
            subject,
            html,
            ...(cc && { cc }),
            ...(bcc && { bcc }),
        });

        if (error) {
            console.error('Resend Error:', error);
            throw new Error('Failed to send email.');
        }

        console.log('Email sent successfully:', data);
        return data;
    } catch (error) {
        console.error('An unexpected error occurred in sendEmail:', error);
        throw error;
    }
};
