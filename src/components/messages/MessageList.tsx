import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef, useImperativeHandle } from 'react';
import { ChevronDown } from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { useMessageScroll } from '@/hooks/useMessageScroll';
import { TypingIndicator } from './TypingIndicator';
import { useConversation } from '@/context/ConversationContext';

export const MessageList = forwardRef<
  { addMessage: (text: string) => void; isLoading: boolean },
  {}
>((_, ref) => {
  const { state, handleNewMessage, isTyping, isLoading } = useConversation();
  const scrollRef = useMessageScroll<HTMLDivElement>([state.messages.length, isTyping]);

  useImperativeHandle(ref, () => ({
    addMessage: handleNewMessage,
    isLoading
  }));

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto bg-white dark:bg-[#000000]">
      <div className="space-y-2 p-4">
        <AnimatePresence mode="popLayout">
          {state.messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <MessageBubble message={message} />
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              key="typing-indicator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TypingIndicator />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Scroll indicator */}
        <div className="flex justify-center py-4">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-muted-foreground/60"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

MessageList.displayName = 'MessageList';