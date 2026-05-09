'use client';
import { useEffect, useState } from 'react';
import DiceIcon from './DiceIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-gambit-dark/80 border-b border-gambit-gold/15' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-gambit-gold font-display font-bold uppercase tracking-widest text-lg">
          <DiceIcon size={20} className="text-gambit-gold" />
          Gambit
        </a>
        <div className="hidden md:flex items-center gap-8 text-gambit-cream text-sm uppercase tracking-wider">
          <a href="#how-it-works" className="hover:text-gambit-gold transition-colors border-b border-transparent hover:border-gambit-gold pb-0.5">How It Works</a>
          <a href="#prizes" className="hover:text-gambit-gold transition-colors border-b border-transparent hover:border-gambit-gold pb-0.5">Prizes</a>
          <a href="#join" className="px-4 py-2 border border-gambit-gold text-gambit-gold hover:bg-gambit-gold hover:text-black transition-all text-sm font-bold">Join</a>
        </div>
      </div>
    </nav>
  );
}
