import { motion } from 'motion/react';

const stripImages = Array.from({ length: 20 }).map((_, i) => `https://picsum.photos/id/${i + 10}/200/140`);

export default function PhotoStrip() {
  return (
    <div className="relative z-10 h-24 overflow-hidden border-y border-[#3d0020] bg-[#050003] md:h-40">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex w-max items-center gap-2 p-2 md:gap-4 md:p-4"
      >
        {[...stripImages, ...stripImages].map((img, i) => (
          <div
            key={i}
            className="h-20 w-32 flex-shrink-0 rounded-lg border border-[#3d0020] bg-cover bg-center transition-transform hover:scale-105 md:h-32 md:w-48"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
