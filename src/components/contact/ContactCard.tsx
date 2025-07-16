import { ChevronRight } from 'lucide-react';
import { ContactInfo } from '../messages/types';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useVcfDownload } from '@/hooks/useVcfDownload';

type ContactCardProps = {
  contact: ContactInfo;
};

export function ContactCard({ contact }: ContactCardProps) {
  const { isMobile } = useDeviceType();
  const triggerVcfDownload = useVcfDownload();

  const handleClick = () => {
    if (isMobile) {
      triggerVcfDownload();
    } else {
      const message = encodeURIComponent("Hey Faith! 👋");
      const imessageUrl = `imessage://+16193978508&body=${message}`;
      window.location.href = imessageUrl;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-gray-200 dark:bg-[#1C1C1E] rounded-xl overflow-hidden py-2.5 px-3.5 flex items-center hover:bg-gray-300 dark:hover:bg-[#2C2C2E] transition-colors"
    >
      <div className="flex-1 mr-3 text-left">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-[#2C2C2E] flex items-center justify-center overflow-hidden mr-3">
            {contact.image ? (
              <img
                src={contact.image}
                alt={contact.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl text-gray-600 dark:text-white">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-medium">{contact.name}</h3>
          </div>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400 dark:text-[#8E8E93]" />
    </button>
  );
}