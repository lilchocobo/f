import { useState } from 'react';
import { MessageList } from '../MessageList';
import { MessageHeader } from './MessageHeader';
import { ChatInput } from './ChatInput';
import { MessagesScreen } from '../messages/MessagesScreen';

export function Screen() {
  const [showMessages, setShowMessages] = useState(false);

  const handleSendMessage = (message: string) => {
    // This can be left empty or handle new messages if needed
    console.log('Message sent:', message);
  };

  if (showMessages) {
    return (
      <MessagesScreen 
        onSelectConversation={() => setShowMessages(false)} 
      />
    );
  }

  return (
    <div className="relative flex flex-col h-full w-full bg-white dark:bg-[#000000]">
      <MessageHeader onBack={() => setShowMessages(true)} />
      <div className="flex-1 overflow-hidden">
        <MessageList />
      </div>
      <div className="sticky bottom-0 w-full bg-white dark:bg-[#000000] border-t border-gray-200 dark:border-[#3A3A3C]">
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={false}
        />
      </div>
    </div>
  );
}