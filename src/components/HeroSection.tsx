import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { FloatingPhone } from './phone/FloatingPhone';
import { MobilePhone } from './phone/MobilePhone';

export function HeroSection() {
  const handleMessageClick = () => {
    const message = encodeURIComponent("Hey Faith! 👋");
    const imessageUrl = `imessage://+16193978508&body=${message}`;
    window.location.href = imessageUrl;
  };

  return (
    <div className="relative min-h-screen">
      {/* Mobile Layout */}
      <div className="lg:hidden h-screen">
        <MobilePhone />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container px-4 mx-auto pt-32 pb-16 text-center">
          {/* Main Heading */}
          <h1 className="text-7xl font-bold tracking-tight mb-6">
            Meet Faith
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Faith is your secure and seamless companion to navigate conversations,
            share moments, and build meaningful connections through iMessage.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleMessageClick}
              size="lg"
              className="rounded-full h-14 px-8 text-lg"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Text Faith
            </Button>
            <p className="text-sm text-muted-foreground">
              *Exclusively for iMessage enabled devices
            </p>
          </div>
        </div>

        {/* Phone Display */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{
              filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'
            }}
          >
            <FloatingPhone />
          </motion.div>
        </div>
      </div>
    </div>
  );
}