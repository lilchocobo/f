import { motion } from 'framer-motion';
import { MessagePreview } from './MessagePreview';
import { EmptyStateNote } from './EmptyStateNote';
import { useMessages } from './useMessages';
import { ChevronDown } from 'lucide-react';

interface MessagesListProps {
  searchQuery: string;
  onSelectConversation: () => void;
}

export function MessagesList({ searchQuery, onSelectConversation }: MessagesListProps) {
  const { messages } = useMessages();
  
  const filteredMessages = messages.filter(message => 
    message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredMessages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => {
            if (message.name === 'Faith') {
              onSelectConversation();
            }
          }}
        >
          <MessagePreview {...message} />
        </motion.div>
      ))}
      
      {/* Coming soon note temporarily disabled
      <EmptyStateNote />
      */}
      
      {/* Scroll indicator at bottom */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
  );
}