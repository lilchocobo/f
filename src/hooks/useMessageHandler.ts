import { useState, useCallback } from 'react';
import { Message } from '@/components/messages/types';
import { useAI } from '@/hooks/useAI';

let messageIdCounter = 0;
const generateMessageId = () => {
  messageIdCounter += 1;
  return `msg-${Date.now()}-${messageIdCounter}`;
};

export function useMessageHandler(
  initialMessages: Message[],
  onAddMessage: (message: Message) => void
) {
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialMessagesLoaded, setHasInitialMessagesLoaded] = useState(false);
  const sendMessage = useAI();

  const loadInitialMessages = useCallback(async () => {
    if (hasInitialMessagesLoaded) return;
    
    setIsLoading(true);
    try {
      for (const message of initialMessages) {
        const msg = {
          ...message,
          id: generateMessageId()
        };
        
        if (!msg.isUser) {
          setIsTyping(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setIsTyping(false);
        }
        
        onAddMessage(msg);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      setHasInitialMessagesLoaded(true);
    } finally {
      setIsLoading(false);
    }
  }, [initialMessages, onAddMessage, hasInitialMessagesLoaded]);

  const handleNewMessage = useCallback(async (text: string) => {
    if (isTyping) return;

    const userMessage: Message = {
      id: generateMessageId(),
      text,
      isUser: true
    };
    onAddMessage(userMessage);

    setIsTyping(true);
    try {
      const responses = await sendMessage(text);
      
      for (const response of responses) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        onAddMessage({
          ...response,
          id: generateMessageId()
        });
      }
    } catch (error) {
      console.error('Failed to get AI response:', error);
      onAddMessage({
        id: generateMessageId(),
        text: "Sorry, I couldn't process your message. Please try again.",
        isUser: false
      });
    } finally {
      setIsTyping(false);
    }
  }, [sendMessage, onAddMessage, isTyping]);

  return {
    isLoading,
    isTyping,
    hasInitialMessagesLoaded,
    handleNewMessage,
    loadInitialMessages
  };
}