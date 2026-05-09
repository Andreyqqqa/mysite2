import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { cn } from '@/src/lib/utils';

const START_DATE = new Date(2025, 7, 3, 0, 0, 0).getTime();

export default function Counter() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = now - START_DATE;
      
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'дней', value: time.days },
    { label: 'часов', value: time.hours },
    { label: 'минут', value: time.minutes },
    { label: 'секунд', value: time.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-5">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="min-w-[80px] rounded-2xl border border-primary bg-black/60 p-4 text-center backdrop-blur-sm md:min-w-[100px] md:p-6"
        >
          <span className="block font-serif text-3xl text-primary md:text-4xl text-glow whitespace-nowrap">
            {item.value}
          </span>
          <small className="text-[10px] uppercase tracking-wider text-[#aaa] md:text-xs">
            {item.label}
          </small>
        </motion.div>
      ))}
    </div>
  );
}
