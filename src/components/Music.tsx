import { motion } from 'motion/react';

const tracks = [
  'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yupi-110805053/cupsize-ya-lyublyu-tebya-full&color=%23ff6b8a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/linalifonova/minus-plyus&color=%23ff6b8a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cupsizeeeeee/ulybnis-3&color=%23ff6b8a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/everlov3d/cupsize-bolshe-chem&color=%23ff6b8a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
];

export default function Music() {
  return (
    <section id="music" className="px-6 py-24 relative z-10 bg-black/20">
      <div className="mx-auto max-w-xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 font-serif text-3xl text-primary md:text-4xl"
        >
          🎵 Наша музыка
        </motion.h2>
        <p className="mb-12 italic text-[#888]">Треки, которые звучат в нашей истории...</p>

        <div className="space-y-6">
          {tracks.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-[#3d0020] transition-all hover:border-primary hover:shadow-[0_10px_30px_rgba(255,107,138,0.15)]"
            >
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={url}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
