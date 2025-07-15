import { useCallback, useState } from 'react';
import { Message } from '@/components/messages/types';

const INITIAL_DELAY = 500;
const MESSAGE_DELAY = 1000;

export function useMessageSequencer() {
  const [isTyping, setIsTyping] = useState(false);

  const sequenceMessages = useCallback(async (
    messages: Message[],
    onAddMessage: (message: Message) => void
  ) => {
    // Initial pause before starting
    await new Promise(resolve => setTimeout(resolve, INITIAL_DELAY));

    for (const message of messages) {
      // Show typing indicator for AI messages
      if (!message.isUser) {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, MESSAGE_DELAY));
        setIsTyping(false);
      }

      // Add the message
      onAddMessage(message);

      // Pause before next message
      await new Promise(resolve => setTimeout(resolve, MESSAGE_DELAY));
    }
  }, []);

  return {
    sequenceMessages,
    isTyping
  };
}