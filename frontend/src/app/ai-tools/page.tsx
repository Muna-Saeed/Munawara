"use client";
import { useState } from "react";

export default function AITools() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  async function handleAsk() {
    const res = await fetch(`/api/ai?message=${encodeURIComponent(input)}`);
    const data = await res.json();
    setReply(data.reply || data.message);
  }

  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">AI Chatbot</h1>
      <input
        className="border p-2 rounded w-full max-w-md mb-4"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button
        className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700 ml-2"
        onClick={handleAsk}
      >
        Ask
      </button>
      {reply && <div className="mt-6 bg-white p-4 rounded shadow">{reply}</div>}
    </section>
  );
}