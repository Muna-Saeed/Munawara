'use client';

import { Message } from 'next-auth';
import { Mail, User, Clock } from 'lucide-react';

interface Props {
    messages: Message[];
}

const Messages = ({ messages }: Props) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                    Customer Messages <span className="text-blue-600">({messages.length})</span>
                </h2>
            </div>

            {messages.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <p className="text-gray-500 text-lg">No messages yet</p>
                    <p className="text-sm text-gray-400 mt-2">Customer inquiries will appear here</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {messages.map((msg) => {
                        // Extract sender name and email from the sender array
                        const [senderName, senderEmail] = Array.isArray(msg.sender)
                            ? msg.sender
                            : [msg.sender, ''];

                        return (
                            <div
                                key={msg.id}
                                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="space-y-3">
                                    {/* Sender Information */}
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <User size={16} className="text-gray-400" />
                                            <h3 className="font-semibold text-gray-800 truncate">
                                                {senderName || 'Anonymous'}
                                            </h3>
                                        </div>
                                        {senderEmail && (
                                            <div className="flex items-center space-x-2 text-sm">
                                                <Mail size={14} className="text-gray-400" />
                                                <a
                                                    href={`mailto:${senderEmail}`}
                                                    className="text-blue-600 hover:underline truncate"
                                                >
                                                    {senderEmail}
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Message Content */}
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {msg.content}
                                        </p>
                                    </div>

                                    {/* Timestamp */}
                                    <div className="flex items-center text-xs text-gray-500">
                                        <Clock size={14} className="mr-1" />
                                        {msg.timestamp
                                            ? new Date(msg.timestamp).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })
                                            : 'Unknown date'}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Messages;