import { GoogleGenerativeAI, Content } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Helper: Formats an array of service objects into a string for the AI prompt
function formatServices(services: any[]): string {
    return services
        .map(
            (s) => `- Service: ${s.name}
  - Description: ${s.description}
  - Price: $${s.price}
  - Category: ${s.category}`
        )
        .join('\n\n');
}

// Helper: Fetches services and formats them. Returns null on any failure.
async function getFormattedServices(): Promise<string | null> {
    try {
        const res = await fetch('https://munawara-chi.vercel.app/api/available-services');
        if (!res.ok) {
            console.error(`Fetch failed with status: ${res.status}`);
            return null; // Return null if fetch is not successful
        }
        const data = await res.json();
        // Ensure the fetched data is a non-empty array before formatting
        if (!Array.isArray(data) || data.length === 0) {
            console.error('Fetched data is not a valid array of services.');
            return null; // Return null if data is invalid
        }
        return formatServices(data);
    } catch (err) {
        console.warn('Could not fetch services from API. The service might be down.', err);
        return null; // Return null on any other error (e.g., network issue)
    }
}

export async function POST(req: Request) {
    try {
        // The frontend now sends the entire message history
        const { messages } = await req.json();
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
        }

        // 1. Attempt to get the formatted knowledge base
        const knowledge = await getFormattedServices();

        // 2. If the knowledge base is unavailable, return a specific user-facing message
        if (knowledge === null) {
            const reply = "I'm sorry, but our products and services information is currently unavailable. Please try again later.";
            return NextResponse.json({ reply });
        }

        // 3. If knowledge is available, proceed with the Gemini API call
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('Missing GEMINI_API_KEY');
            return NextResponse.json({ error: 'Missing API_KEY' }, { status: 500 });
        }

        const platformTagline = 'Affordable, scalable digital solutions for small businesses, entrepreneurs, and professionals. Grow, manage, and thrive in the digital age with Munawara.';

        const genAI = new GoogleGenerativeAI(apiKey);

        const systemInstruction = `
You are a helpful and friendly chat assistant for the Munawara Platform. 
Your goal is to assist users by answering questions about the platform's services and pricing.

Tagline: "${platformTagline}"

Use ONLY the following knowledge base to answer. If you don't know, say so.

--- KNOWLEDGE BASE ---
${knowledge}
--- END OF KNOWLEDGE BASE ---
        `.trim();

        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction,
        });

        // ** FIX **
        // The Gemini API requires the history to start with a 'user' role.
        // We find the first user message and discard any initial bot welcome messages from the history.
        let historyToProcess = messages.slice(0, -1);
        const firstUserIndex = historyToProcess.findIndex((msg: { sender: string; }) => msg.sender === 'user');

        if (firstUserIndex !== -1) {
            historyToProcess = historyToProcess.slice(firstUserIndex);
        } else {
            // If no user message exists in the history (e.g., just the initial bot message),
            // the history for the API call is empty.
            historyToProcess = [];
        }

        // Convert the filtered frontend message format to the format required by the GoogleGenerativeAI SDK
        const chatHistory: Content[] = historyToProcess.map((msg: { sender: 'user' | 'bot'; text: string }) => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));

        const currentUserMessage = messages[messages.length - 1].text;

        // Start the chat with the existing history
        const chat = model.startChat({
            history: chatHistory,
        });

        const result = await chat.sendMessage(currentUserMessage);
        const response = result.response;
        const reply = response.text();

        if (!reply) {
            return NextResponse.json({ error: 'No response from AI' }, { status: 500 });
        }

        return NextResponse.json({ reply });

    } catch (err: any) {
        console.error('Chat API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong', detail: err.message || String(err) },
            { status: 500 }
        );
    }
}
