import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const START_DATE = new Date(2025, 7, 3).getTime();

export default function Stats() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const diff = Date.now() - START_DATE;
    setDays(Math.floor(diff / 86400000));
  }, []);

  const stats = [
    { number: days, label: 'дней вместе' },
    { number: '∞', label: 'сообщений' },
    { number: '∞', label: 'встреч' },
    { number: '∞', label: 'поцелуев' },
    { number: '∞', label: 'объятий' },
  ];

  return (
    <section id="stats" className="px-6 py-24 relative z-10">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 font-serif text-3xl text-primary md:text-4xl"
        >
          🔢 Наши цифры
        </motion.h2>
        <p className="mb-12 italic text-[#888]">Всё, что есть между нами</p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: '#ff6b8a' }}
              className="rounded-3xl border border-[#3d0020] bg-primary/5 p-8 text-center transition-all"
            >
              <div className="mb-2 font-serif text-4xl text-primary md:text-5xl">{stat.number}</div>
              <div className="text-xs uppercase tracking-widest text-[#888]">{stat.label}</div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-full rounded-2xl border border-primary bg-primary/10 p-8"
          >
            <div className="mb-1 font-serif text-5xl text-primary">∞</div>
            <div className="text-sm tracking-widest text-[#888]">раз сказано "я тебя люблю" ❤️</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
