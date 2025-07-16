import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Always disable the input
  const isDisabled = true;

  useEffect(() => {
    // Focus the input when component mounts
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled && !isDisabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t border-gray-200 dark:border-[#3A3A3C] bg-white dark:bg-[#000000]">
      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Add Faith as a contact to continue chatting"
        className="flex-1 h-10 rounded-full px-4 py-2 bg-gray-100 dark:bg-[#1C1C1E] border-0 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#8E8E93] disabled:bg-gray-100/50 dark:disabled:bg-[#1C1C1E]/50 disabled:text-gray-500 dark:disabled:text-[#8E8E93] transition-all duration-200"
        disabled={isDisabled}
      />
      <button
        type="submit"
        className="p-2 rounded-full text-[#0A84FF] hover:bg-gray-100 dark:hover:bg-[#1C1C1E] transition-colors disabled:text-gray-400 dark:disabled:text-[#8E8E93] disabled:hover:bg-transparent"
        disabled={!message.trim() || disabled || isDisabled}
      >
        <Send size={20} />
      </button>
    </form>
  );
}