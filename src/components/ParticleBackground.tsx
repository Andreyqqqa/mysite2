import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; size: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          left: `${Math.random() * 100}vw`,
          delay: Math.random() * 5,
          size: Math.random() * 16 + 10,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '110vh', opacity: 0, rotate: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.5, 0], rotate: 360 }}
          transition={{ duration: 6 + Math.random() * 4, ease: 'linear' }}
          className="absolute text-primary/30"
          style={{ left: p.left, fontSize: p.size }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
