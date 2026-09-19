import { useState } from 'react';
import Navbar from '../components/Navbar';

const initialMessages = [
  { sender: 'Aarav', text: 'Hi Meera, I would love your feedback on our prototype.', time: '12:00 PM', mine: true },
  { sender: 'Meera', text: 'Absolutely, let’s review the data pipeline and pilot plan.', time: '12:05 PM', mine: false },
];

export default function MessagingPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const sendMessage = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { sender: 'You', text: draft, time: 'Now', mine: true }]);
    setDraft('');
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Messages</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Mentor conversation</h1>
        </div>

        <div className="glass-card rounded-3xl border border-stone-200 p-4">
          <div className="flex items-center justify-between border-b border-stone-200 p-4">
            <div>
              <div className="text-lg font-bold">Meera Nair</div>
              <div className="text-xs text-emerald-300">Online</div>
            </div>
          </div>

          <div className="space-y-4 p-4">
            {messages.map((message, index) => (
              <div key={`${message.sender}-${index}`} className={`flex ${message.mine ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${message.mine ? 'bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] text-white' : 'bg-stone-100 text-stone-700'}`}>
                  <div className="text-xs opacity-80">{message.sender} • {message.time}</div>
                  <div className="mt-1">{message.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 border-t border-stone-200 p-4">
            <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write a message..." className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-3" />
            <button onClick={sendMessage} className="rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-5 py-3 font-semibold text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
