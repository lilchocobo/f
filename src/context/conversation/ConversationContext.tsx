import { createContext, useContext, useReducer, ReactNode, useCallback, useState } from 'react';
import { messages as initialMessages } from '@/components/messages/conversation-data';
import { useAI } from '@/hooks/useAI';
import { ConversationContextType } from './types';
import { conversationReducer } from './reducer';
import { generateMessageId } from './utils';

const ConversationContext = createContext<ConversationContextType | null>(null);

export function ConversationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(conversationReducer, {
    messages: initialMessages.map(msg => ({ ...msg, id: generateMessageId() }))
  });
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sendMessage = useAI();

  const handleNewMessage = useCallback(async (text: string) => {
    if (isTyping) return;

    setIsLoading(true);
    // Add user message
    const userMessage = {
      id: generateMessageId(),
      text,
      isUser: true
    };
    dispatch({ type: 'ADD_MESSAGE', message: userMessage });

    // Get AI response
    setIsTyping(true);
    try {
      const responses = await sendMessage(text);
      
      for (const response of responses) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch({
          type: 'ADD_MESSAGE',
          message: { ...response, id: generateMessageId() }
        });
      }
    } catch (error) {
      console.error('Failed to get AI response:', error);
      dispatch({
        type: 'ADD_MESSAGE',
        message: {
          id: generateMessageId(),
          text: "Sorry, I couldn't process your message. Please try again.",
          isUser: false
        }
      });
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  }, [sendMessage, isTyping]);

  return (
    <ConversationContext.Provider value={{ state, handleNewMessage, isTyping, isLoading }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error('useConversation must be used within a ConversationProvider');
  }
  return context;
}