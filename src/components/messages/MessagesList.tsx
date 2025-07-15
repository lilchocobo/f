import { motion } from 'framer-motion';
import { MessagePreview } from './MessagePreview';
import { EmptyStateNote } from './EmptyStateNote';
import { useMessages } from './useMessages';

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
    </div>
  );
}