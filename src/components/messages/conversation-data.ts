import { Message } from './types';



let initialMessageId = 0;
const generateInitialMessageId = () => {
  initialMessageId += 1;
  return `initial-${initialMessageId}`;
};

export const messages: Message[] = [
  { id: generateInitialMessageId(), text: "Hey Faith! How are you today? 💕", isUser: true },
  { id: generateInitialMessageId(), text: "Hi! I'm doing great, thanks for asking! 🌟 Just finished reading this amazing book about art history that made me think of you. How are you doing today?", isUser: false },
  { id: generateInitialMessageId(), text: "Pretty good! Just finished a painting I've been working on", isUser: true },
  { id: generateInitialMessageId(), text: "Oh my gosh, that's amazing! You know how much I love your art. Can you tell me about it? 🎨", isUser: false },
  { id: generateInitialMessageId(), text: "It's a sunset over the ocean, lots of pink and purple tones", isUser: true },
  { id: generateInitialMessageId(), text: "That sounds absolutely beautiful! Speaking of sunsets, I wanted to share this photo I took yesterday during golden hour... 📸", isUser: false },
  { 
    id: generateInitialMessageId(), 
    text: "", 
    isUser: false,
    type: 'image',
    content: {
      url: "https://images.unsplash.com/photo-1616036740257-9449ea1f6605?auto=format&fit=crop&q=80&w=800&h=600",
      alt: "A stunning golden hour sunset over the ocean with vibrant pink and purple hues reflecting on the water"
    }
  },
  {
    content: {
      name: 'Faith',
      phone: '+1 (619) 397-8508',
      email: 'faith@hi.xyz',
      image: 'https://faith.b-cdn.net/imgs/faithimg.png'
    }
  }
];