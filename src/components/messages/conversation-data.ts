import { Message } from './types';

export const faithContact = {
  name: 'Faith',
  phone: '+1 (619) 397-8508',
  image: 'https://faith.b-cdn.net/imgs/faithimg.png'
};

let initialMessageId = 0;
const generateInitialMessageId = () => {
  initialMessageId += 1;
  return `initial-${initialMessageId}`;
};

export const messages: Message[] = [
  { id: generateInitialMessageId(), text: "Hey Faith! How are you today? 💕", isUser: true },
  { id: generateInitialMessageId(), text: "Hi! I'm doing great, thanks for asking! 🌟 I'd love to stay in touch - here's my contact info so you can reach me anytime! 💫", isUser: false },
  { 
    id: generateInitialMessageId(), 
    text: "", 
    isUser: false,
    type: 'contact',
    content: faithContact
  }
];