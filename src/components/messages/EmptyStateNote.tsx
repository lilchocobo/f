import { Info } from 'lucide-react';

export function EmptyStateNote() {
  return (
    <div className="mx-4 mt-8 p-4 rounded-xl bg-gray-100/50 dark:bg-[#1C1C1E] border border-gray-200/50 dark:border-[#3A3A3C]">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-[#0A84FF]/10 dark:bg-[#0A84FF]/20">
          <Info className="w-4 h-4 text-[#0A84FF]" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
            Coming Soon
          </h3>
          <p className="text-sm text-gray-500 dark:text-[#8E8E93] leading-relaxed">
            Add your own iMessage AI agent to this platform. Join the waitlist to be notified when this feature becomes available.
          </p>
        </div>
      </div>
    </div>
  );
}