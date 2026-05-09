import { motion } from 'motion/react';

const timeline = [
  { date: '7 июля 2025', icon: '💬', title: 'Telegram', text: 'Начало нашей переписки в Telegram — с этого всё и началось 🌸' },
  { date: '30 июля 2025', icon: '🚶', title: 'Первая прогулка', text: 'Я увидел тебя и понял, что ты особенная ✨' },
  { date: '3 августа 2025', icon: '❤️', title: 'Начало отношений', text: 'Особенно важная дата — день, когда мы стали парой 🌹' },
  { date: '3 сентября 2025', icon: '🎉', title: 'Первый месяц', text: 'Первый месяц вместе — и это только начало! 🥂' },
  { date: '3 февраля 2026', icon: '💫', title: 'Полгода вместе', text: 'Полгода счастья — каждый день с тобой бесценен 💕' },
  { date: 'Будущее', icon: '∞', title: 'Продолжение...', text: 'Наша история будет длиться вечно 🌙', future: true },
];

export default function History() {
  return (
    <section id="history" className="px-6 py-24 relative z-10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 font-serif text-3xl text-primary md:text-4xl"
        >
          📖 Наша история
        </motion.h2>

        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-6 rounded-2xl border border-[#3d0020] bg-[#ff6b8a]/5 p-6 text-left transition-all hover:border-primary ${item.future ? 'border-dashed border-[#5d0040]' : ''}`}
            >
              <div className="text-3xl md:text-4xl">{item.icon}</div>
              <div>
                <h3 className={`font-serif text-lg text-primary md:text-xl ${item.future ? 'italic' : ''}`}>
                  {item.date} — {item.title}
                </h3>
                <p className="text-sm text-[#888] md:text-base">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
