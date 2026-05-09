import DiceIcon from './DiceIcon';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-24 left-8 text-8xl text-gambit-gold/10 pointer-events-none select-none font-bold">♠</div>
      <div className="absolute top-32 right-8 text-7xl text-gambit-gold/10 pointer-events-none select-none font-bold">♥</div>
      <div className="absolute bottom-32 left-12 text-9xl text-gambit-gold/10 pointer-events-none select-none font-bold">♦</div>
      <div className="absolute bottom-24 right-12 text-8xl text-gambit-gold/10 pointer-events-none select-none font-bold">♣</div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-6 reveal">
          <DiceIcon size={48} className="text-gambit-gold float-animation" />
        </div>
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gambit-gold tracking-tighter uppercase glitch-text reveal stagger-1">
          Gambit
        </h1>
        <p className="text-2xl md:text-3xl text-gambit-cream mb-4 font-medium reveal stagger-2">
          Stuck on what to build?
        </p>
        <p className="text-xl text-gambit-muted mb-12 max-w-xl mx-auto reveal stagger-3">
          Let the dice decide. A YSWS where random themes meet shipped projects and mystery prizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal stagger-4">
          <button className="px-10 py-5 bg-gambit-violet text-white font-bold text-lg hover:bg-gambit-violet/80 transition-colors uppercase tracking-wider pulse-glow">
            Roll Your Theme
          </button>
          <a href="#how-it-works" className="px-10 py-5 border-2 border-gambit-gold text-gambit-gold font-bold text-lg hover:bg-gambit-gold hover:text-black transition-colors uppercase tracking-wider">
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
