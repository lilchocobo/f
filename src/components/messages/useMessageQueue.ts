import { useState, useCallback } from 'react';
import { Message } from './types';

export function useMessageQueue() {
  const [queue, setQueue] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addToQueue = useCallback((message: Message) => {
    setQueue(prev => [...prev, message]);
  }, []);

  const removeFromQueue = useCallback(() => {
    setQueue(prev => prev.slice(1));
  }, []);

  return {
    queue,
    isProcessing,
    setIsProcessing,
    addToQueue,
    removeFromQueue,
  };
}