import { motion } from 'motion/react';

const images = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  url: `https://picsum.photos/id/${i + 20}/800/${i % 3 === 0 ? 1200 : 800}`,
  tall: i % 3 === 0,
}));

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 relative z-10">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 font-serif text-3xl text-primary md:text-4xl"
        >
          📸 Наши моменты
        </motion.h2>

        <div className="masonry gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block w-full overflow-hidden rounded-2xl border border-[#3d0020] transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(255,107,138,0.2)]"
            >
              <img
                src={img.url}
                alt={`Момент ${i + 1}`}
                className="w-full transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
