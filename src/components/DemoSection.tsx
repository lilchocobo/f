import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
};

const initialMessages: Message[] = [
  { id: 1, text: "Hey! I'd love some help planning my day.", isUser: true },
  {
    id: 2,
    text: "I'd be happy to help you plan your day! What's on your agenda?",
    isUser: false,
  },
];

export function DemoSection() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 2) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              id: 3,
              text: 'I can help you organize tasks, set reminders, and even suggest optimal times for your activities.',
              isUser: false,
            },
          ]);
        }, 2000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <div className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            See it in Action
          </h2>
          <Card className="p-4 bg-white shadow-lg rounded-2xl">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-[#007AFF] text-white'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}