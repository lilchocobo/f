import { Message } from './types';
import { ContactCard } from '../contact/ContactCard';

type MessageBubbleProps = {
  message: Message;
  onComplete?: () => void;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const timestamp = new Date().toLocaleTimeString([], { 
    hour: 'numeric', 
    minute: '2-digit'
  });

  // If it's a contact card message
  if (message.type === 'contact' && message.content) {
    return (
      <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className="max-w-[70%]">
          <ContactCard contact={message.content} />
        </div>
      </div>
    );
  }

  // If it's an image message
  if (message.type === 'image' && message.content && typeof message.content === 'object' && 'url' in message.content) {
    return (
      <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`rounded-message overflow-hidden max-w-[70%] ${
          message.isUser
            ? 'bg-[#0A84FF]'
            : 'bg-gray-200 dark:bg-[#3A3A3C]'
        }`}>
          <div className="aspect-[4/3] relative">
            <img
              src={message.content.url}
              alt={message.content.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // Regular text message
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-message px-4 py-2 max-w-[70%] ${
          message.isUser
            ? 'bg-[#0A84FF] text-white'
            : 'bg-gray-200 dark:bg-[#3A3A3C] text-gray-900 dark:text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
        <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-gray-500 dark:text-white/70'}`}>
          {timestamp}
        </p>
      </div>
    </div>
  );
}