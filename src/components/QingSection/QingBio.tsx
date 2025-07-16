import { motion } from 'framer-motion';
import { Heart, Music, Camera, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useVcfDownload } from '@/hooks/useVcfDownload';

const interests = [
  { icon: Heart, text: "Loves connecting with friends" },
  { icon: Music, text: "K-pop and indie music fan" },
  { icon: Camera, text: "Amateur photographer" },
  { icon: Sparkles, text: "Always spreading positivity" },
];

export function QingBio() {
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

  return (
    <div className="space-y-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-foreground"
      >
        Your Digital Bestie
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-muted-foreground"
      >
        Hey! I'm Faith, your new bestie who's always just a message away. I love chatting about everything from the latest TikTok trends to deep conversations about life and dreams.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        {interests.map(({ icon: Icon, text }, index) => (
          <div key={text} className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">{text}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-start gap-4 pt-4"
      >
        <Button
          onClick={handleMessageClick}
          size="lg"
          className="w-full sm:w-auto rounded-full h-14 px-8 text-lg"
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Text Faith
        </Button>
        <p className="text-sm text-muted-foreground">
          Only works on devices with iMessage - iPhone and MacBook
        </p>
      </motion.div>
    </div>
  );
}