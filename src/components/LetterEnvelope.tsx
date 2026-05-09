import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function LetterEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIsTypingStarted(true), 1200);
  };

  return (
    <section id="letter" className="flex flex-col items-center justify-center px-6 py-24 min-h-[600px] relative z-20">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        className="group relative cursor-pointer"
      >
        {/* Envelope Container */}
        <div className="relative w-[280px] h-[180px] md:w-[320px] md:h-[220px]">
          {/* Flap */}
          <motion.div
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-0 left-0 z-[5] w-0 h-0 border-l-[140px] border-r-[140px] border-t-[90px] border-transparent md:border-l-[160px] md:border-r-[160px] md:border-t-[110px] border-t-[#4d0040] origin-top drop-shadow-lg"
          />
          
          {/* Front */}
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-3 rounded-md border border-primary bg-gradient-to-br from-[#2d0020] to-[#3d0030] shadow-[0_0_40px_rgba(255,107,138,0.2)]">
            {/* The fake folder look using clips or border masks if needed, 
                but let's stick to the styling provided in the original */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[140px] border-r-[140px] border-b-[90px] border-transparent md:border-l-[160px] md:border-r-[160px] md:border-b-[110px] border-b-[#3a0028]" />
            <div className="absolute bottom-[90px] md:bottom-[110px] left-0 w-0 h-0 border-l-[140px] border-r-[140px] border-b-[90px] border-transparent md:border-l-[160px] md:border-r-[160px] md:border-b-[110px] border-b-[#350025]" />
            
            <span className="relative z-10 font-serif text-lg italic text-primary md:text-2xl">Для Карины ♥</span>
            <span className="relative z-10 animate-pulse text-[10px] uppercase tracking-widest text-[#888] md:text-xs">Нажми чтобы открыть</span>
          </div>
        </div>
      </motion.div>

      {/* Modal Letter */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/90 p-6 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative w-full max-w-[550px] rounded-xl border border-primary bg-[#0d0008] p-8 md:p-12 shadow-[0_0_60px_rgba(255,107,138,0.3)] bg-[repeating-linear-gradient(transparent,transparent_27px,rgba(255,107,138,0.05)_27px,rgba(255,107,138,0.05)_28px)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-primary transition-transform hover:rotate-90"
              >
                <X size={24} />
              </button>

              <div className="mx-auto mb-8 h-[180px] w-full rounded-lg bg-cover bg-center md:h-[220px]" style={{ backgroundImage: 'url(https://picsum.photos/id/15/800/600)' }} />
              
              <p className="mb-4 text-right font-serif text-sm text-[#888]">3 августа 2025 г.</p>
              
              <h3 className="mb-6 font-serif text-2xl italic text-primary md:text-3xl">Моя прекрасная девочка,</h3>
              
              <div className="space-y-6 font-serif text-base italic leading-relaxed text-[#ccc] md:text-lg">
                <p>Я тебя очень люблю и я очень дорожу нашими отношениями. Я верю в то, что у нас всё будет хорошо и мы проведём наши жизни вместе!</p>
                <p>Мы обязательно воплотим наши планы в реальность и сделаем то, что хотели — и у нас обязательно всё получится!</p>
                <p>Очень сильно тебя люблю!</p>
              </div>

              <div className="mt-12 text-right font-serif text-lg italic text-primary md:text-xl">
                С любовью, твой Андрей ❤️
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
