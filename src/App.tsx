/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoStrip from './components/PhotoStrip';
import History from './components/History';
import LoveReasons from './components/LoveReasons';
import Stats from './components/Stats';
import Plans from './components/Plans';
import Places from './components/Places';
import Music from './components/Music';
import Gallery from './components/Gallery';
import LetterEnvelope from './components/LetterEnvelope';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import FloatingPlayer from './components/FloatingPlayer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <ParticleBackground />
          <FloatingPlayer />
          <main>
            <Hero />
            <PhotoStrip />
            <History />
            <LoveReasons />
            <Stats />
            <Plans />
            <Places />
            <Music />
            <Gallery />
            <LetterEnvelope />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
