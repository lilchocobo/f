import { useEffect, useCallback, useRef, useState } from 'react';
import { Message, AnimatedMessage } from './types';

const TYPING_DELAY = 1500;

export function useMessageAnimation(messages: Message[]) {
  const [animatedMessages, setAnimatedMessages] = useState<AnimatedMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const processingRef = useRef(false);

  const addMessage = useCallback((message: Message) => {
    const animationId = `msg-${message.id}-${Date.now()}`;
    setAnimatedMessages(prev => [...prev, {
      ...message,
      animationId,
      isComplete: false
    }]);
  }, []);

  const handleMessageComplete = useCallback((animationId: string) => {
    setAnimatedMessages(prev => prev.map(msg => 
      msg.animationId === animationId ? { ...msg, isComplete: true } : msg
    ));
    setCurrentIndex(prev => prev + 1);
    processingRef.current = false;
  }, []);

  useEffect(() => {
    if (currentIndex >= messages.length || processingRef.current) return;

    const message = messages[currentIndex];
    processingRef.current = true;
    
    if (!message.isUser) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        addMessage(message);
      }, TYPING_DELAY);
      
      return () => clearTimeout(typingTimer);
    } else {
      addMessage(message);
    }
  }, [currentIndex, messages, addMessage]);

  return {
    animatedMessages,
    isTyping,
    handleMessageComplete
  };
}