import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://faith.b-cdn.net/imgs/out-0-51.jpg',
    alt: 'Faith in the afternoon '
  },
  {
    url: 'https://faith.b-cdn.net/imgs/faithimg.png',
    alt: 'Faith at the beach'
  },
  {
    url: 'https://faith.b-cdn.net/imgs/FXXTQ77HZQWPV76D5JDDV3DZM0.png',
    alt: 'Faith smiling'
  },
  {
    url: 'https://faith.b-cdn.net/imgs/enhanced-image_1.jpeg',
    alt: 'Faith at the pool'
  }
];

const ROTATION_INTERVAL = 5000;

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateStack = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(rotateStack, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const orderedImages = [...images.slice(currentIndex), ...images.slice(0, currentIndex)];

  return (
    <div className="relative w-full overflow-visible px-4 lg:px-0">
      <div className="relative w-[180px] h-[240px] sm:w-[260px] sm:h-[347px] lg:w-[375px] lg:h-[500px] mx-auto perspective-1000">
        <div className="relative w-full h-full" onClick={rotateStack}>
          {orderedImages.map((image, index) => {
            const baseTransition = {
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1]
            };

            // Adjust offset based on screen size
            const offset = {
              x: index * (window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 8 : 16),
              y: index * (window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 8 : 16)
            };

            let style = {
              zIndex: images.length - index,
              rotateZ: index * (window.innerWidth < 640 ? 3 : 5),
              x: offset.x,
              y: offset.y,
              scale: 1 - (index * (window.innerWidth < 640 ? 0.015 : 0.03)),
              opacity: 1,
              transformOrigin: 'bottom center',
              transition: baseTransition
            };

            return (
              <motion.div
                key={image.url}
                className="absolute inset-0 w-full h-full cursor-pointer"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
                animate={style}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}