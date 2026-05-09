import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Главная', href: '#home' },
  { name: 'Письмо', href: '#letter' },
  { name: 'История', href: '#history' },
  { name: 'Люблю тебя', href: '#love' },
  { name: 'Цифры', href: '#stats' },
  { name: 'Планы', href: '#plans' },
  { name: 'Места', href: '#places' },
  { name: 'Музыка', href: '#music' },
  { name: 'Фото', href: '#gallery' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 backdrop-blur-glow md:px-12">
      <div className="font-serif text-2xl tracking-[3px] text-primary text-glow-strong">
        А ♥ К
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-primary md:hidden"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <ul className={cn(
        "absolute top-full left-0 right-0 flex flex-col gap-6 bg-[#0a0005]/98 p-6 transition-all md:static md:flex md:flex-row md:bg-transparent md:p-0",
        isOpen ? "flex" : "hidden md:flex"
      )}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "relative text-xs font-semibold uppercase tracking-widest transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-primary after:shadow-[0_0_8px_rgba(255,107,138,0.8)]" : "text-[#aaa]"
              )}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
