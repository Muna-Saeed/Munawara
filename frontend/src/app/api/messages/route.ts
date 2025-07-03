import { getMessages, insertMessage } from "@/libs/dbManager";
import { NextResponse } from "next/server";
import { Message } from 'next-auth';
import { sendEmail } from "@/libs/senEmail";



export async function GET() {
    try {
        const messages = await getMessages();
        return NextResponse.json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const newMessage: Message = {
            sender: [name, email],
            content: message,
            timestamp: new Date().toISOString(),
        };

        // Save message using your DB manager
        await insertMessage(newMessage);
        await sendEmail({
            to: process.env.ADMIN_EMAIL as string,
            cc: [process.env.CC_EMAIL as string],
            subject: `New Contact Submission from ${name}`,
            html: `<h1>New message from ${name}</h1><p>Email: ${email}</p><p>Message: ${message}</p>`,
        });

        return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
    } catch (error) {
        console.error("Error saving message:", error);
        return NextResponse.json({ error: "Failed to save message." }, { status: 500 });
    }
}
