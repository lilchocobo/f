import { useState, useRef, useEffect } from 'react';
import { MessageList } from '../messages/MessageList';
import { MessageHeader } from './MessageHeader';
import { ChatInput } from './ChatInput';
import { MessagesScreen } from '../messages/MessagesScreen';

export function Screen() {
  const [showMessages, setShowMessages] = useState(false);
  const messageListRef = useRef<{ 
    addMessage: (text: string) => void;
    isLoading: boolean;
  }>(null);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const handleSendMessage = (text: string) => {
    if (messageListRef.current) {
      messageListRef.current.addMessage(text);
    }
  };

  useEffect(() => {
    const checkLoadingState = () => {
      setIsInputDisabled(messageListRef.current?.isLoading ?? true);
    };

    const interval = setInterval(checkLoadingState, 100);
    return () => clearInterval(interval);
  }, []);
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
        <MessageList ref={messageListRef} />
      </div>
      <div className="sticky bottom-0 w-full bg-white dark:bg-[#000000] border-t border-gray-200 dark:border-[#3A3A3C]">
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={isInputDisabled}
        />
      </div>
    </div>
  );
}