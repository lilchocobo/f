import { useState, useEffect } from 'react';
import { Message } from './types';
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

  useEffect(() => {
    setHasInitialMessagesLoaded(true);
    setIsLoading(false);
  }, []);

  const handleNewMessage = async (text: string) => {
    setIsLoading(true);
    
    const userMessage: Message = {
      id: generateMessageId(),
      text,
      isUser: true
    };
    onAddMessage(userMessage);

    setIsTyping(true);

    try {
      const responses = await sendMessage(text);
      setIsTyping(false);
      
      responses.forEach(response => {
        onAddMessage({
          ...response,
          id: generateMessageId()
        });
      });
    } catch (error) {
      console.error('Failed to get AI response:', error);
      setIsTyping(false);
      
      onAddMessage({
        id: generateMessageId(),
        text: "Sorry, I couldn't process your message. Please try again.",
        isUser: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isTyping,
    hasInitialMessagesLoaded,
    handleNewMessage
  };
}