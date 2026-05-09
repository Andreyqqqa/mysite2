import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#1a0010] p-8 text-center text-sm text-[#444]">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-2xl text-primary"
        >
          ❤️
        </motion.div>
        <p>Сделано с любовью для Карины</p>
        <p className="text-[10px] uppercase tracking-widest opacity-50">2025 – 2026</p>
      </div>
    </footer>
  );
}
