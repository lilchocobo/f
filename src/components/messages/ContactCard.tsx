import { ChevronRight } from 'lucide-react';
import { ContactInfo } from './types';
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
      className="bg-gray-200 rounded-2xl overflow-hidden py-3 px-4 flex items-center w-full hover:bg-gray-300 transition-colors"
    >
      <div className="flex-1 mr-6 text-left">
        <h3 className="text-gray-900 font-medium">{contact.name}</h3>
       </div>
      <div className="flex items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {contact.image ? (
            <img
              src={contact.image}
              alt={contact.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl text-gray-600">
              {contact.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 ml-0.5 mr-[-2px]" />
      </div>
    </button>
  );
}