import { motion } from 'framer-motion';
import { Screen } from './Screen';

export function FloatingPhone() {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateY(-20deg) rotateX(10deg)', // Adjusted angles for more frontal view
      }}
      className="hidden lg:block rounded-[32px] bg-violet-500"
    >
      <motion.div
        initial={{
          transform: 'translateZ(4px) translateY(-1px)', // Reduced shadow distance
        }}
        animate={{
          transform: 'translateZ(16px) translateY(-4px)', // Reduced floating height
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className="relative h-[600px] w-[300px] rounded-[32px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <div className="h-full w-full overflow-hidden rounded-[28px]">
          <Screen />
        </div>
      </motion.div>
    </div>
  );
}