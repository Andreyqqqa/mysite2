import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Counter from './Counter';

const slides = [
  'https://picsum.photos/id/10/1920/1080',
  'https://picsum.photos/id/11/1920/1080',
  'https://picsum.photos/id/12/1920/1080',
  'https://picsum.photos/id/13/1920/1080',
  'https://picsum.photos/id/14/1920/1080',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-10 bg-black/65" />

      {/* Content */}
      <div className="relative z-20 px-6 text-center pt-24 md:pt-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 text-sm uppercase tracking-[2px] text-[#ccc] md:text-base"
        >
          с 3 августа 2025 года 🌹
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-5 font-serif text-4xl text-white md:text-7xl"
        >
          Андрей <span className="italic text-primary">&</span> Карина
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-base italic text-[#ddd] md:text-lg min-h-[1.5em]"
        >
          С того дня как ты появилась в моей жизни — всё изменилось ✨
        </motion.p>

        <Counter />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#letter"
            className="inline-block rounded-full border border-white bg-white/10 px-8 py-3 text-sm tracking-[1px] text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-primary"
          >
            Читать письмо ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
