import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

export function WaitlistForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-imessage-blue font-medium"
      >
        Thanks! We'll be in touch soon.
      </motion.div>
    );
  }

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.form
            key="form"
            initial={{ width: 140 }}
            animate={{ width: 300 }}
            exit={{ width: 140 }}
            onSubmit={handleSubmit}
            className="relative flex items-center gap-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-imessage-blue focus-visible:border-transparent"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              className="relative flex-shrink-0 w-10 h-10 rounded-full bg-imessage-blue hover:bg-imessage-blue/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button
              size="lg"
              onClick={() => setIsExpanded(true)}
              className="relative rounded-full bg-imessage-blue text-white hover:bg-imessage-blue/90"
            >
              Join Waitlist
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}