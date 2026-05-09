import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const places = [
  { date: '02.08.2025', title: 'Одна из первых прогулок 🌹', desc: 'Через пару часов мы начали отношения ❤️', geo: 'Парк Машиностроителей, Благовещенск', img: 'https://picsum.photos/id/100/600/400' },
  { date: '25.09.2025', title: 'Концерт Cupsize 🎵', desc: 'Наш первый совместный концерт 🎤', geo: 'Огни Уфы, Уфа', img: 'https://picsum.photos/id/101/600/400' },
  { date: '06.10.2025', title: 'Мы официально поженились! 💍', desc: 'Ну почти 😄❤️', geo: 'Арт Квадрат, Уфа', img: 'https://picsum.photos/id/102/600/400' },
  { date: '27.10.2025', title: 'Первый поход в кино 🎬', desc: 'Русский кинематограф... mistake 😅', geo: 'ТЦ Простор, Уфа', img: 'https://picsum.photos/id/103/600/400' },
];

export default function Places() {
  return (
    <section id="places" className="px-6 py-24 relative z-10">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 font-serif text-3xl text-primary md:text-4xl"
        >
          📍 Наши места и события
        </motion.h2>
        <p className="mb-12 italic text-[#888]">Места, где живёт наша история...</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: '#4ecdc4', boxShadow: '0 10px 30px rgba(78, 205, 196, 0.15)' }}
              className="group overflow-hidden rounded-[40px] border border-[#0d2d2a] bg-[#4ecdc4]/5 transition-all text-left"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={place.img}
                  alt={place.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
                  {place.date}
                </span>
                <h3 className="mb-2 font-serif text-xl text-white">
                  {place.title}
                </h3>
                <p className="mb-6 text-sm text-[#888]">
                  {place.desc}
                </p>
                <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(place.geo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0d2d2a] px-5 py-2 text-xs text-[#4ecdc4] transition-all hover:bg-[#4ecdc4] hover:text-black"
                >
                  <MapPin size={12} />
                  {place.geo}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
