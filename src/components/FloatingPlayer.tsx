import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Music as MusicIcon } from 'lucide-react';

export default function FloatingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Show after some time
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay block
          console.log('Autoplay blocked. User needs to interact.');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder for their track
        loop
      />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 rounded-full border border-primary bg-black/60 p-2 pl-4 backdrop-blur-md"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Наш Плейлист</span>
              <span className="text-xs text-white truncate max-w-[120px]">Cupsize — Минус Плюс</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
