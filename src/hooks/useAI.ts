import { useCallback, useRef } from 'react';
import type { Message } from '@/components/messages/types';
import { faithContact } from '@/components/messages/conversation-data';

const API_URL = 'https://daze-production.up.railway.app/d2612687-6180-001c-9c0c-d188db86bb35/message';

let messageIdCounter = 0;
const generateMessageId = () => {
  messageIdCounter += 1;
  return `msg-${Date.now()}-${messageIdCounter}`;
};

export function useAI() {
  const messageCountRef = useRef(0);

  const sendMessage = useCallback(async (message: string): Promise<Message[]> => {
    messageCountRef.current += 1;

    // After 4 messages, return the contact suggestion
    if (messageCountRef.current > 4) {
      return [
        {
          id: generateMessageId(),
          text: "I'd love to continue our chat! Add me as a contact so we can keep the conversation going 💫",
          isUser: false
        },
        {
          id: generateMessageId(),
          text: "",
          isUser: false,
          type: 'contact',
          content: faithContact
        }
      ];
    }

    try {
      const request = {
        text: message,
        roomId: 'faith-chat',
        userId: 'user',
        userName: 'User'
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      return data.map((response: any) => ({
        id: generateMessageId(),
        text: response.text,
        isUser: false,
        ...(response.action && response.action !== 'NONE' && {
          action: response.action
        })
      }));
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }, []);

  return sendMessage;
}