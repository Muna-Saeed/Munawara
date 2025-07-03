// lib/sendEmail.ts

import { Resend } from 'resend';

// Instantiate Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the structure of the data our function will accept
interface EmailOptions {
    to: string;
    subject: string;
    html: string;
    cc?: string[];
    bcc?: string[];
}

/**
 * A reusable function to send emails using Resend.
 * @param {EmailOptions} options - The email options (to, subject, html).
 */
export const sendEmail = async ({ to, subject, html, cc, bcc }: EmailOptions) => {
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM as string,
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
        // Ensure the error is propagated
        throw error;
    }
};