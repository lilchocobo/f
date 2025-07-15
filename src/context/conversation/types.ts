import { Message } from '@/components/messages/types';

export type ConversationState = {
  messages: Message[];
};

export type ConversationAction = 
  | { type: 'ADD_MESSAGE'; message: Message }
  | { type: 'CLEAR_MESSAGES' };

export type ConversationContextType = {
  state: ConversationState;
  handleNewMessage: (text: string) => Promise<void>;
  isTyping: boolean;
  isLoading: boolean;
};