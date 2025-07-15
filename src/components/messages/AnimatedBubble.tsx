import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { TypewriterText } from './TypewriterText';

type AnimatedBubbleProps = {
  text: string;
  isUser: boolean;
  onComplete?: () => void;
};

export function AnimatedBubble({ text, isUser, onComplete }: AnimatedBubbleProps) {
  const [isTyping, setIsTyping] = useState(true);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!completedRef.current) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        
        const completeTimer = setTimeout(() => {
          completedRef.current = true;
          onComplete?.();
        }, 500);
        
        return () => clearTimeout(completeTimer);
      }, text.length * 40);
      
      return () => clearTimeout(timer);
    }
  }, [text, onComplete]);

  return (
    <motion.div
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'max-w-[65%] rounded-2xl',
        isUser ? 'bg-[#147efb]' : 'bg-rose-100'
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isTyping ? 'typing' : 'complete'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'px-4 py-2',
            isUser ? 'text-white' : 'text-gray-900'
          )}
        >
          {isTyping ? (
            <TypewriterText text={text} />
          ) : (
            <span className="whitespace-pre-wrap break-words">{text}</span>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}