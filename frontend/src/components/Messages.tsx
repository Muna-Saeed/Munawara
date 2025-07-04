'use client';

import { useState, useMemo } from 'react';
import { Mail, User, Clock, Inbox, ArrowLeft } from 'lucide-react';

// --- Component Props ---
interface Message {
    _id: string;
    sender: [name: string, email: string];
    content: string;
    timestamp?: string;
    read?: boolean | null;
}
interface Props {
    messages: Message[];
    onMarkAsRead: (id: string) => void;
}

// --- Main Messages Component ---
const Messages = ({ messages, onMarkAsRead }: Props) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [filterUnread, setFilterUnread] = useState(false);

    // Memoize the filtered and sorted messages to optimize performance
    const sortedMessages = useMemo(() => {
        return [...messages]
            .filter((msg) => (filterUnread ? !msg.read : true))
            .sort((a, b) => new Date(b.timestamp || 0).getTime() - new Date(a.timestamp || 0).getTime());
    }, [messages, filterUnread]);

    // Find the currently selected message object
    const selectedMessage = useMemo(() =>
        messages.find((m) => m._id === selectedId),
        [messages, selectedId]
    );

    const handleSelectMessage = (id: string) => {
        const msg = messages.find((m) => m._id === id);
        if (msg && !msg.read) {
            onMarkAsRead(id);
        }
        setSelectedId(id);
    };

    // On mobile, this determines if we show the list or the detail view
    const isDetailViewActive = selectedId && selectedMessage;

    return (
        // ✅ Change #1: Add `relative` here
        <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">

            {/* --- Message List Pane --- */}
            <div
                className={`
                    flex flex-col w-full md:w-1/3 lg:w-1/4 border-r border-gray-200
                    transition-transform duration-300 ease-in-out
                    ${isDetailViewActive ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
                `}
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-200 shrink-0">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800">Customer Messages</h2>
                        <span className="px-2.5 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                            {messages.length}
                        </span>
                    </div>
                    <button
                        onClick={() => setFilterUnread((prev) => !prev)}
                        className="mt-3 w-full text-sm px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                    >
                        {filterUnread ? 'Show All Messages' : 'Filter Unread'}
                    </button>
                </div>

                {/* Message List */}
                <div className="overflow-y-auto h-full">
                    {sortedMessages.length > 0 ? (
                        sortedMessages.map((msg) => (
                            <MessageItem
                                key={msg._id}
                                message={msg}
                                isSelected={selectedId === msg._id}
                                onSelect={() => handleSelectMessage(msg._id)}
                            />
                        ))
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </div>

            {/* --- Message Detail Pane --- */}
            {/* ✅ Change #2: Add `flex-1` here */}
            <div
                className={`
                    absolute top-0 left-0 w-full h-full bg-white md:static
                    flex flex-col flex-1
                    transition-transform duration-300 ease-in-out
                    ${isDetailViewActive ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                `}
            >
                {selectedMessage ? (
                    <MessageDetail message={selectedMessage} onBack={() => setSelectedId(null)} />
                ) : (
                    <WelcomePane />
                )}
            </div>
        </div>
    );
};

// --- Helper Components ---

const MessageItem = ({ message, isSelected, onSelect }: { message: Message; isSelected: boolean; onSelect: () => void }) => {
    const [senderName] = Array.isArray(message.sender) ? message.sender : [message.sender, ''];
    const isUnread = !message.read;

    return (
        <div
            onClick={onSelect}
            className={`
        p-4 cursor-pointer border-l-4
        ${isSelected ? 'bg-blue-50 border-blue-500' : 'border-transparent hover:bg-gray-50'}
        ${isUnread && 'font-bold text-gray-900'}
      `}
        >
            <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                    {isUnread && <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>}
                    <p className="truncate max-w-48">{senderName || 'Anonymous'}</p>
                </div>
                <p className="text-xs text-gray-500 font-normal shrink-0">
                    {new Date(message.timestamp || 0).toLocaleDateString()}
                </p>
            </div>
            <p className="text-sm text-gray-600 font-normal line-clamp-2">{message.content}</p>
        </div>
    );
};

const MessageDetail = ({ message, onBack }: { message: Message; onBack: () => void }) => {
    const [senderName, senderEmail] = Array.isArray(message.sender) ? message.sender : [message.sender, ''];

    return (
        <>
            {/* Detail Header */}
            <div className="flex items-center p-4 border-b border-gray-200 shrink-0">
                <button onClick={onBack} className="md:hidden mr-4 p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-3">
                    <User className="text-gray-500" size={24} />
                    <div>
                        <h3 className="font-semibold text-gray-900">{senderName || 'Anonymous'}</h3>
                        {senderEmail && (
                            <a href={`mailto:${senderEmail}`} className="text-sm text-blue-600 hover:underline">
                                {senderEmail}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Detail Content */}
            <div className="p-6 overflow-y-auto">
                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                    <Clock size={16} />
                    {new Date(message.timestamp || 0).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
                </p>
                <div className="prose prose-sm max-w-none whitespace-pre-line text-gray-800">
                    {message.content}
                </div>
            </div>
        </>
    );
};

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
        <Inbox size={40} className="mb-3" />
        <h3 className="font-semibold">No Messages</h3>
        <p className="text-sm">There are no messages to display.</p>
    </div>
);

const WelcomePane = () => (
    <div className="hidden md:flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
        <Mail size={48} className="mb-4" />
        <h3 className="text-lg font-semibold">Select a message</h3>
        <p>Choose a message from the list to view its content.</p>
    </div>
);

export default Messages;