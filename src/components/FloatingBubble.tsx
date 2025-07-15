import { motion } from 'framer-motion';

type FloatingBubbleProps = {
  text: string;
  delay: number;
  x: number;
  y: number;
  isUser?: boolean;
};

export function FloatingBubble({ text, delay, x, y, isUser }: FloatingBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: y - 100,
        x: x + (Math.random() * 50 - 25),
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${
        isUser ? 'bg-imessage-bubble-blue text-white' : 'bg-imessage-bubble-gray text-gray-900'
      } px-4 py-2 rounded-message max-w-[200px] shadow-lg`}
    >
      {text}
    </motion.div>
  );
}