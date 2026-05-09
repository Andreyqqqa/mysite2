import { motion } from 'motion/react';

const plans = [
  { icon: '😊', text: 'Прожить счастливую жизнь', check: '🤍' },
  { icon: '💑', text: 'Поддерживать хорошие отношения', check: '🤍' },
  { icon: '🐱', text: 'Завести котёнка', check: '🤍' },
  { icon: '🔮', text: 'Остальное в будущем...', check: '✨', future: true },
];

export default function Plans() {
  return (
    <section id="plans" className="px-6 py-24 relative z-10 bg-black/20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 font-serif text-3xl text-primary md:text-4xl"
        >
          🌟 Наши планы
        </motion.h2>
        <p className="mb-12 italic text-[#888]">То, что ждёт нас впереди...</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: '#ff6b8a' }}
              className={`rounded-3xl border border-[#3d0020] bg-primary/5 p-8 text-center transition-all ${plan.future ? 'border-dashed border-[#5d0040]' : ''}`}
            >
              <div className="mb-4 text-4xl">{plan.icon}</div>
              <div className="mb-4 text-sm font-medium leading-relaxed text-[#ccc]">{plan.text}</div>
              <div className="text-xl">{plan.check}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
