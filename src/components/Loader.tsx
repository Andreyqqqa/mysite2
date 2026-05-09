import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 1200); // Match exit animation duration
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050008]"
        >
          <div className="relative flex flex-col items-center gap-8">
            <svg
              className="w-[500px] max-w-[90vw] overflow-visible drop-shadow-[0_0_15px_rgba(255,107,138,0.6)]"
              viewBox="0 0 500 120"
            >
              <motion.text
                x="50%"
                y="80"
                textAnchor="middle"
                className="font-cormorant text-7xl font-light italic"
                fill="none"
                stroke="#ff6b8a"
                strokeWidth="1.5"
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                animate={{
                  strokeDashoffset: 0,
                  fill: '#ff6b8a',
                }}
                transition={{
                  strokeDashoffset: { duration: 3, delay: 0.5, ease: 'easeInOut' },
                  fill: { duration: 1, delay: 3.5, ease: 'easeIn' },
                }}
              >
                Андрей & Карина
              </motion.text>
            </svg>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-4xl"
              >
                ❤️
              </motion.span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.7, duration: 0.8 }}
                className="font-cormorant text-3xl italic tracking-[3px] text-[#aaa]"
              >
                03.08.2025
              </motion.span>
            </motion.div>
          </div>

          {/* Background Stars for Loader */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: Math.random() }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + Math.random() * 3,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
