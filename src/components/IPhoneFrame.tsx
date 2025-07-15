import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type IPhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative w-[300px] h-[600px] bg-black rounded-[50px] p-4 shadow-2xl",
        "before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2",
        "before:w-40 before:h-6 before:bg-black before:rounded-b-3xl",
        className
      )}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10">
        <div className="absolute top-1.5 right-7 w-2 h-2 bg-gray-800 rounded-full" />
      </div>
      <div className="relative h-full w-full bg-gray-900 rounded-[40px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-none h-6 bg-gray-900" />
          <div className="flex-1 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}