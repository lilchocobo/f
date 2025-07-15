import { motion } from 'framer-motion';
import { forwardRef } from 'react';

export const TypingIndicator = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex justify-start mb-4">
      <div className="bg-gray-200 dark:bg-[#3A3A3C] rounded-message px-4 py-2">
        <motion.div 
          className="flex space-x-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8
          }}
        >
          <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white/70" />
          <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white/70" />
          <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white/70" />
        </motion.div>
      </div>
    </div>
  );
});

TypingIndicator.displayName = 'TypingIndicator';