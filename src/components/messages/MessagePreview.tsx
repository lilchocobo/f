import { formatDistanceToNow } from 'date-fns';

interface MessagePreviewProps {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unread?: boolean;
}

export function MessagePreview({ name, avatar, lastMessage, timestamp, unread }: MessagePreviewProps) {
  return (
    <div className="flex items-center px-4 py-2 hover:bg-muted/50">
      <div className="relative mr-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        {unread && (
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <h3 className="font-semibold text-[17px] truncate text-foreground">{name}</h3>
          <span className="text-muted-foreground text-sm ml-2">
            {name === 'Faith' ? '1 min ago' : '1 day ago'}
          </span>
        </div>
        <p className={`text-[15px] truncate ${unread ? 'text-foreground' : 'text-muted-foreground'}`}>
          {lastMessage}
        </p>
      </div>
      <div className="ml-2">
        <svg className="w-2 h-2 text-muted-foreground" viewBox="0 0 8 13" fill="none">
          <path d="M1 1l5 5.5L1 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}