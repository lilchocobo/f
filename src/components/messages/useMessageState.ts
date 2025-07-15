import { create } from 'zustand';
import { Message, MessageStatus, AnimatedMessage } from './types';

type MessageState = {
  messages: AnimatedMessage[];
  status: MessageStatus;
  addMessage: (message: Message) => void;
  setTyping: (isTyping: boolean) => void;
  completeMessage: (animationId: string) => void;
  reset: () => void;
};

export const useMessageState = create<MessageState>((set, get) => ({
  messages: [],
  status: {
    isTyping: false,
    currentIndex: 0,
  },
  addMessage: (message) => {
    const animationId = `msg-${message.id}-${Date.now()}`;
    set((state) => ({
      messages: [
        ...state.messages,
        { ...message, animationId, isComplete: message.isUser },
      ],
    }));
    
    // Auto-complete user messages
    if (message.isUser) {
      get().completeMessage(animationId);
    }
  },
  setTyping: (isTyping) => set((state) => ({
    status: { ...state.status, isTyping },
  })),
  completeMessage: (animationId) => set((state) => {
    const messageIndex = state.messages.findIndex(msg => msg.animationId === animationId);
    if (messageIndex === -1) return state;

    return {
      messages: state.messages.map((msg) =>
        msg.animationId === animationId ? { ...msg, isComplete: true } : msg
      ),
      status: {
        ...state.status,
        currentIndex: state.status.currentIndex + 1,
      },
    };
  }),
  reset: () => set({ 
    messages: [], 
    status: { isTyping: false, currentIndex: 0 } 
  }),
}));