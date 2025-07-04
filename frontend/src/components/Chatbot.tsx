// components/Chatbot.tsx

'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

// Define the shape of a message
interface Message {
    role: 'user' | 'model';
    text: string;
}

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsLoading(true);
        const userMessage: Message = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: input }),
            });

            if (!response.body) {
                throw new Error("No response body.");
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let modelResponse = '';

            // Initialize model message
            setMessages((prev) => [...prev, { role: 'model', text: '' }]);

            // Stream the response
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                modelResponse += chunk;

                setMessages((prev) => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }

        } catch (error) {
            console.error('Error fetching chat response:', error);
            setMessages((prev) => [...prev, { role: 'model', text: 'Sorry, I encountered an error.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-4 border rounded-lg shadow-lg bg-white">
            <div className="h-96 overflow-y-auto mb-4 p-2 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && <div className="flex justify-start"><div className="p-3 rounded-lg bg-gray-200 text-black">Thinking...</div></div>}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                    className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
                >
                    Send
                </button>
            </form>
        </div>
    );
}