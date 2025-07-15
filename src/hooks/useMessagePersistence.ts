import { useCallback } from 'react';
import { Message } from '@/components/messages/types';
import { useConversation } from '@/context/ConversationContext';

export function useMessagePersistence() {
  const { state, dispatch } = useConversation();

  const addMessage = useCallback((message: Message) => {
    dispatch({ type: 'ADD_MESSAGE', message });
  }, [dispatch]);

  const setInitialMessages = useCallback((messages: Message[]) => {
    dispatch({ type: 'SET_MESSAGES', messages });
  }, [dispatch]);

  const clearMessages = useCallback(() => {
    dispatch({ type: 'CLEAR_MESSAGES' });
  }, [dispatch]);

  return {
    messages: state.messages,
    addMessage,
    setInitialMessages,
    clearMessages,
  };
}