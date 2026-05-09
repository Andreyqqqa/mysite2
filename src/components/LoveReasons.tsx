import { motion } from 'motion/react';

const reasons = [
  { icon: '🤗', text: 'За твою поддержку' },
  { icon: '😊', text: 'За твою улыбку' },
  { icon: '👁️', text: 'За твои красивые глаза' },
  { icon: '✨', text: 'За твоё прекрасное тело' },
  { icon: '💝', text: 'За твою любовь ко мне' },
  { icon: '🎵', text: 'За твой прекрасный голос' },
  { icon: '😄', text: 'За твой прекрасный смех' },
  { icon: '💫', text: 'За нашу прекрасную любовь' },
  { icon: '🌹', text: 'За наши прекрасные чувства' },
  { icon: '💆', text: 'За твои волосы' },
  { icon: '🦋', text: 'За твою личность' },
];

export default function LoveReasons() {
  return (
    <section id="love" className="px-6 py-24 relative z-10 bg-black/20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 font-serif text-3xl text-primary md:text-4xl"
        >
          💕 Почему я люблю тебя
        </motion.h2>
        <p className="mb-12 italic text-[#888]">Карина, вот лишь часть причин...</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, borderColor: '#ff6b8a', backgroundColor: 'rgba(255, 107, 138, 0.1)' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#3d0020] bg-[#ff6b8a]/5 p-6 shadow-2xl transition-all"
            >
              <div className="mb-3 text-3xl">{reason.icon}</div>
              <p className="text-sm text-[#ccc]">{reason.text}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-full rounded-2xl border border-primary bg-[#ff6b8a]/10 p-8 text-center"
          >
            <div className="mb-2 text-4xl">❤️</div>
            <p className="font-serif text-xl italic text-primary">Я люблю тебя всю и ту, какая ты есть!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
