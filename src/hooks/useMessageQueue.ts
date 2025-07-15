import { useState, useCallback } from 'react';
import { Message } from '@/components/messages/types';

export function useMessageQueue() {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const processMessage = useCallback(async (
    message: Message,
    onAddMessage: (message: Message) => void,
    delay = 1000
  ) => {
    if (!message.isUser) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    onAddMessage(message);
  }, []);

  const processQueue = useCallback(async (
    messages: Message[],
    onAddMessage: (message: Message) => void
  ) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    try {
      for (const message of messages) {
        await processMessage(message, onAddMessage);
      }
    } finally {
      setIsProcessing(false);
    }
  }, [isProcessing, processMessage]);

  return {
    isProcessing,
    processMessage,
    processQueue
  };
}