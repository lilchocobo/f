import { createContext, useContext, useReducer, ReactNode, useCallback, useState } from 'react';
import { Message } from '@/components/messages/types';
import { messages as initialMessages } from '@/components/messages/conversation-data';
import { useAI } from '@/hooks/useAI';

type ConversationState = {
  messages: Message[];
};

type ConversationAction = 
  | { type: 'ADD_MESSAGE'; message: Message }
  | { type: 'CLEAR_MESSAGES' };

type ConversationContextType = {
  state: ConversationState;
  handleNewMessage: (text: string) => Promise<void>;
  isTyping: boolean;
  isLoading: boolean;
};

const ConversationContext = createContext<ConversationContextType | null>(null);

let messageIdCounter = 0;
const generateMessageId = () => {
  messageIdCounter += 1;
  return `msg-${Date.now()}-${messageIdCounter}`;
};

function conversationReducer(state: ConversationState, action: ConversationAction): ConversationState {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
}

export function ConversationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(conversationReducer, {
    messages: [] // Start with empty messages for auto-send functionality
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