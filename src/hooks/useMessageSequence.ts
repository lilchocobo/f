import { useState, useCallback } from 'react';
import { Message } from '@/components/messages/types';

const TYPING_DELAY = 1000;
const MESSAGE_DELAY = 500;

export function useMessageSequence() {
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sequenceMessage = useCallback(async (
    message: Message,
    onAddMessage: (message: Message) => void
  ) => {
    if (!message.isUser) {
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, TYPING_DELAY));
    }
    
    onAddMessage(message);
    setIsTyping(false);
    
    await new Promise(resolve => setTimeout(resolve, MESSAGE_DELAY));
  }, []);

  const sequenceMessages = useCallback(async (
    messages: Message[],
    onAddMessage: (message: Message) => void
  ) => {
    setIsLoading(true);
    
    for (const message of messages) {
      await sequenceMessage(message, onAddMessage);
    }
    
    setIsLoading(false);
  }, [sequenceMessage]);

  return {
    isTyping,
    isLoading,
    sequenceMessage,
    sequenceMessages
  };
}