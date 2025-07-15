import { useState } from 'react';
import { MessagesHeader } from './MessagesHeader';
import { MessagesList } from './MessagesList';
import { SearchBar } from './SearchBar';

interface MessagesScreenProps {
  onSelectConversation: () => void;
}

export function MessagesScreen({ onSelectConversation }: MessagesScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="h-full bg-background">
      <MessagesHeader />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <MessagesList searchQuery={searchQuery} onSelectConversation={onSelectConversation} />
    </div>
  );
}