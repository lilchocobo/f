import { useState } from 'react';
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { faithContact } from '../messages/conversation-data';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useVcfDownload } from '@/hooks/useVcfDownload';

type ContactDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const quickActions = [
  { 
    icon: MessageSquare, 
    label: 'Message',
    onClick: () => {}
  },
  { 
    onClick: () => {
      const message = encodeURIComponent("Hey Faith! 👋");
      const imessageUrl = `imessage://+16193978508&body=${message}`;
      window.location.href = imessageUrl;
    }
  },
  { icon: Phone, label: 'Call', onClick: () => {} },
  { icon: Mail, label: 'Mail', onClick: () => {} }
];

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isMobile } = useDeviceType();
  const triggerVcfDownload = useVcfDownload();

  const handleMessageClick = () => {
    if (isMobile) {
      triggerVcfDownload();
    } else {
      const message = encodeURIComponent("Hey Faith! 👋");
      const imessageUrl = `imessage://+16193978508&body=${message}`;
      window.location.href = imessageUrl;
    }
  };

  const handleAddToContacts = () => {
    if (isMobile) {
      triggerVcfDownload();
    } else {
      const message = encodeURIComponent("Hey Faith! 👋");
      const imessageUrl = `imessage://+16193978508&body=${message}`;
      window.location.href = imessageUrl;
    }
  };

  // Update the quickActions to use the new handler
  const updatedQuickActions = [
    { 
      icon: MessageSquare, 
      label: 'Message',
      onClick: handleMessageClick
    },
    { icon: Phone, label: 'Call', onClick: () => {} },
    { icon: Mail, label: 'Mail', onClick: () => {} }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="bottom" 
        className="p-0 bg-muted rounded-t-[20px] overflow-hidden h-[95vh]"
      >
        <div className="overflow-y-auto h-full">
          <SheetTitle className="sr-only">Contact Information</SheetTitle>

          {/* Profile Header */}
          <div className="text-center pt-6 pb-4 bg-background">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3">
              <img
                src={faithContact.image}
                alt={faithContact.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">{faithContact.name}</h2>
            <p className="text-muted-foreground mt-1">AI Companion</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4 px-4 py-6 bg-background">
            {updatedQuickActions.map((action) => (
              <button
                key={action.label}
                onClick={action.onClick}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <action.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-foreground">{action.label}</span>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="px-4 py-6 space-y-6 bg-background">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <span className="text-foreground">{faithContact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                  <span className="text-foreground">{faithContact.email}</span>
                </div>
              </div>
            </div>

            {/* Add to Contacts */}
            <div>
              <Button 
                className="w-full"
                onClick={handleAddToContacts}
              >
                Add to Contacts
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}