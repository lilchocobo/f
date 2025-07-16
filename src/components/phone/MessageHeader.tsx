import { ChevronLeft, Info } from 'lucide-react';
import { ContactDrawer } from './ContactDrawer';
import { useState } from 'react';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useVcfDownload } from '@/hooks/useVcfDownload';

interface MessageHeaderProps {
  onBack: () => void;
}

export function MessageHeader({ onBack }: MessageHeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isMobile } = useDeviceType();
  const triggerVcfDownload = useVcfDownload();

  const handleInfoClick = () => {
    if (isMobile) {
      triggerVcfDownload();
    } else {
      setIsDrawerOpen(true);
    }
  };

  return (
    <>
      <div className="bg-white/95 dark:bg-[#000000]/95 sticky top-0 z-10 backdrop-blur-lg border-b border-gray-200 dark:border-[#3A3A3C]">
        <div className="w-full h-20 px-4 flex items-center justify-between">
          <button 
            className="text-[#0A84FF] hover:text-[#0A84FF]/80"
            onClick={onBack}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex flex-col items-center mt-3">
            <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
              <img
                src="https://faith.b-cdn.net/imgs/faithimg.png"
                alt="Faith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-medium text-sm text-gray-900 dark:text-white">Faith</h2>
            </div>
          </div>

          <button 
            className="text-[#0A84FF] hover:text-[#0A84FF]/80 lg:hidden"
            onClick={handleInfoClick}
          >
            <Info size={20} />
          </button>
          
          <div className="hidden lg:block w-5" />
        </div>
      </div>

      <ContactDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}