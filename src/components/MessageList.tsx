import { motion, AnimatePresence } from 'framer-motion';
import { useMessageAnimation } from './messages/useMessageAnimation';
import { messages } from './messages/conversation-data';
import { TypingIndicator } from './messages/TypingIndicator';
import { MessageBubble } from './messages/MessageBubble';
import { useEffect, useRef } from 'react';

export function MessageList() {
  const { animatedMessages, isTyping, handleMessageComplete } = useMessageAnimation(messages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollToBottom = () => {
      scrollElement.scrollTo({
        top: scrollElement.scrollHeight,
        behavior: 'smooth'
      });
    };

    scrollToBottom();
    // Add a small delay to ensure new content is rendered
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [animatedMessages.length, isTyping]);

  return (
    <div 
      ref={scrollRef}
      className="h-full overflow-y-auto scrollbar-hide"
    >
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {animatedMessages.map((message) => (
            <motion.div
              key={message.animationId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} px-4`}
            >
              <MessageBubble
                message={message}
                onComplete={() => handleMessageComplete(message.animationId)}
              />
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              key="typing-indicator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start px-4"
            >
              <TypingIndicator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}