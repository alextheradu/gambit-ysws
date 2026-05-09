import DiceIcon from './DiceIcon';

export default function CTASection() {
  return (
    <section id="join" className="py-32 px-4 bg-gambit-dark border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[22rem] leading-none text-gambit-violet/5 font-bold">♦</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="reveal">
          <DiceIcon size={64} className="text-gambit-gold mx-auto mb-8 float-animation" />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gambit-cream reveal stagger-1">
          Ready to roll?
        </h2>
        <p className="text-xl text-gambit-muted mb-12 max-w-xl mx-auto reveal stagger-2">
          Join #gambit and RSVP now. Date TBD.
        </p>
        <button className="px-12 py-6 bg-gambit-gold text-black font-bold text-xl hover:bg-gambit-cream transition-colors uppercase tracking-wider mb-12 pulse-glow reveal stagger-3">
          Join & RSVP
        </button>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gambit-muted text-sm uppercase tracking-wider reveal stagger-4">
          <span>Free to participate</span>
          <span className="hidden sm:block text-gambit-violet">|</span>
          <span>Real prizes</span>
          <span className="hidden sm:block text-gambit-violet">|</span>
          <span>Community driven</span>
        </div>
      </div>
    </section>
  );
}
