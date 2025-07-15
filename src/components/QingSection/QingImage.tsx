import { motion } from 'framer-motion';

export function QingImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative max-w-md mx-auto lg:max-w-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-purple-400 rounded-3xl blur opacity-30" />
      <div className="relative aspect-[3/4] max-h-[60vh]">
        <img
          src="https://i.ibb.co/3Mzp7Rj/qingimage.png"
          alt="Faith - Your AI Companion"
          className="rounded-2xl w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
}