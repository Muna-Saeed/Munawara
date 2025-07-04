'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

// --- TYPE DEFINITIONS ---
type Message = {
    sender: 'user' | 'bot';
    text: string;
};

// --- HELPER & UI COMPONENTS ---

const MessageBubble = ({ message }: { message: Message }) => {
    const isUser = message.sender === 'user';
    return (
        <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-sky-700" />
                </div>
            )}
            <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl ${isUser
                    ? 'bg-sky-700 text-white rounded-br-lg'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-lg'
                    }`}
            >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
            {isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                </div>
            )}
        </div>
    );
};

const MessageList = ({ messages, isLoading }: { messages: Message[]; isLoading: boolean }) => {
    const chatRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, isLoading]);
    return (
        <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-4 bg-sky-50/50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((msg, idx) => (<MessageBubble key={idx} message={msg} />))}
            {isLoading && (
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center"><Bot className="w-5 h-5 text-sky-700" /></div>
                    <div className="max-w-[85%] px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-200 rounded-bl-lg">
                        <div className="flex items-center justify-center space-x-1">
                            <span className="text-xs italic text-gray-500">Typing</span>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ChatInput = ({ input, setInput, onSendMessage, isLoading, isSuggesting, onSuggest }: {
    input: string;
    setInput: (value: string) => void;
    onSendMessage: (message: string) => void;
    isLoading: boolean;
    isSuggesting: boolean;
    onSuggest: () => void;
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSendMessage(input);
    };
    return (
        <div className="border-t border-gray-200 p-3 bg-white rounded-b-xl">
            {!input && !isLoading && !isSuggesting && (
                <div className="mb-2">
                    <button onClick={onSuggest} disabled={isSuggesting} className="w-full flex items-center justify-center gap-2 text-xs px-3 py-2 rounded-lg bg-sky-100 text-sky-800 hover:bg-sky-200 transition-colors disabled:opacity-50">
                        <Sparkles className="w-3.5 h-3.5" />
                        Suggest a Service
                    </button>
                </div>
            )}
            {isSuggesting && (
                <div className="mb-2 text-center text-xs text-gray-500 italic">Thinking of a suggestion...</div>
            )}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                    className="flex-1 border border-gray-300 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-shadow text-black"
                    placeholder="Ask something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading || isSuggesting}
                    aria-label="Chat input"
                />
                <button type="submit" disabled={!input.trim() || isLoading || isSuggesting} className="bg-sky-700 text-white p-2 rounded-lg hover:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" aria-label="Send message">
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
};

const ChatWindow = ({ onClose, messages, isLoading, onSendMessage, input, setInput, isSuggesting, onSuggest, isOpen }: {
    onClose: () => void;
    messages: Message[];
    isLoading: boolean;
    onSendMessage: (message: string) => void;
    input: string;
    setInput: (value: string) => void;
    isSuggesting: boolean;
    onSuggest: () => void;
    isOpen: boolean;
}) => {
    return (
        // Main container for the chat window with responsive sizing and positioning
        <div className={`fixed z-[60] flex flex-col bg-white rounded-xl shadow-2xl transition-all duration-300 ease-in-out
            bottom-6 right-6 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[550px] /* Responsive floating window */
            sm:bottom-24 sm:right-8
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`
        }>
            {/* Header */}
            <div className="bg-sky-700 text-white px-4 py-3 flex items-center justify-between shadow-sm rounded-t-xl">
                <div className="flex items-center gap-2"><Bot className="w-5 h-5" /><span className="font-semibold text-base">Munawara Assistant</span></div>
                <button onClick={onClose} aria-label="Close chat"><X className="h-5 w-5 text-white hover:text-gray-200 transition-colors" /></button>
            </div>
            {/* Message List */}
            <MessageList messages={messages} isLoading={isLoading} />
            {/* Input Area */}
            <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} input={input} setInput={setInput} isSuggesting={isSuggesting} onSuggest={onSuggest} />
        </div>
    );
};

// --- MAIN CHATBOT COMPONENT ---
export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasUnread, setHasUnread] = useState(false);
    const [input, setInput] = useState('');
    const [isSuggesting, setIsSuggesting] = useState(false);
    const notificationSound = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasBeenNotified = sessionStorage.getItem('hasInitialNotification');
            if (!hasBeenNotified) {
                setHasUnread(true);
                sessionStorage.setItem('hasInitialNotification', 'true');
            }
        }
    }, []);

    useEffect(() => {
        if (messages.length > 1 && messages[messages.length - 1].sender === 'bot' && !isOpen) {
            setHasUnread(true);
            notificationSound.current?.play().catch(err => console.error("Audio play failed:", err));
        }
    }, [messages, isOpen]);

    const handleOpenChat = () => {
        setIsOpen(true);
        setHasUnread(false);
        if (messages.length === 0) {
            setMessages([{ sender: 'bot', text: "Hello! I'm the Munawara Assistant. How can I help you today?" }]);
        }
    };

    const handleSendMessage = async (messageText: string) => {
        const trimmedText = messageText.trim();
        if (!trimmedText) return;

        const newMessages: Message[] = [...messages, { sender: 'user', text: trimmedText }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            // ** UPDATED **
            // Send the entire message history to the API for context.
            const res = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages })
            });

            if (!res.ok) throw new Error(`API error: ${res.statusText}`);
            const data = await res.json();

            setMessages(prev => [...prev, { sender: 'bot', text: data.reply || 'Sorry, I could not get a response.' }]);
        } catch (error) {
            console.error("Failed to send message:", error);
            setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! Something went wrong. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestService = async () => {
        setIsSuggesting(true);
        try {
            const res = await fetch('/api/chatbot/suggest', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages }) });
            if (!res.ok) throw new Error('Suggestion API failed');
            const data = await res.json();
            if (data.suggestion && data.suggestion !== 'none') {
                setInput(`Tell me more about the ${data.suggestion} service.`);
            } else {
                setInput("I'm not sure what to suggest. What are you looking for?");
            }
        } catch (error) {
            console.error("Failed to get suggestion:", error);
            setInput("Sorry, I couldn't think of a suggestion right now.");
        } finally {
            setIsSuggesting(false);
        }
    };

    return (
        <>
            <audio ref={notificationSound} src="/notification.mp3" preload="auto" />

            {/* Floating Action Button */}
            <button
                onClick={isOpen ? () => setIsOpen(false) : handleOpenChat}
                className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-[70] transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${hasUnread && !isOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-sky-700 hover:bg-sky-800'}`}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                {hasUnread && !isOpen && (<span className="absolute top-0 right-0 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span>)}
                {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
            </button>

            {/* Chat Window */}
            <ChatWindow
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
                input={input}
                setInput={setInput}
                isSuggesting={isSuggesting}
                onSuggest={handleSuggestService}
            />
        </>
    );
}
