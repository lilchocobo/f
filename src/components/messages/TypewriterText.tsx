import { motion } from 'framer-motion';

type TypewriterTextProps = {
  text: string;
};

export function TypewriterText({ text }: TypewriterTextProps) {
  return (
    <span className="inline-block whitespace-pre-wrap break-words">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: index * 0.04,
            duration: 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}