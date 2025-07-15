import { useState, useEffect, useCallback } from 'react';
import { Message } from './types';

export function useMessageSequence(messages: Message[]) {
  const [visibleMessages, setVisibleMessages] = useState<(Message & { uniqueId: string })[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const showNextMessage = useCallback(() => {
    if (currentIndex >= messages.length) return;
    
    const currentMessage = messages[currentIndex];
    const uniqueId = `${currentMessage.id}-${Date.now()}`;
    
    if (!currentMessage.isUser) {
      setIsTyping(true);
      const typingDelay = 1500;
      
      const timer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, { ...currentMessage, uniqueId }]);
        setCurrentIndex(prev => prev + 1);
      }, typingDelay);
      
      return () => clearTimeout(timer);
    } else {
      setVisibleMessages(prev => [...prev, { ...currentMessage, uniqueId }]);
      const typingDuration = currentMessage.text.length * 30 + 500;
      
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, typingDuration);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, messages]);

  useEffect(() => {
    return showNextMessage();
  }, [showNextMessage]);

  return { visibleMessages, isTyping };
}