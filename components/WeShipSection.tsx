const prizes = [
  { suit: '♠', title: 'Stickers', body: 'Top tier Gambit stickers' },
  { suit: '♥', title: 'Tech Gear', body: 'Accessories and other stuff' },
  { suit: '♦', title: 'Grants', body: 'AI credits & hosting' },
  { suit: '♣', title: 'Mystery', body: 'Surprise packages???' },
];

const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const;

export default function WeShipSection() {
  return (
    <section id="prizes" className="py-32 px-4 bg-gambit-dark border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="text-gambit-gold text-sm uppercase tracking-widest mb-4 reveal">We Ship</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gambit-cream reveal stagger-1">
            Real prizes for<br />real projects
          </h2>
          <p className="text-xl text-gambit-muted max-w-xl reveal stagger-2">
            Ship your project and we&apos;ll send a surprise physical reward to your door. Effort equals loot.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {prizes.map((prize, i) => (
            <div
              key={prize.title}
              className={`prize-card bg-gambit-card p-8 hover:scale-105 reveal ${staggerClass[i]}`}
            >
              <div className="text-3xl text-gambit-gold/60 mb-3">{prize.suit}</div>
              <h3 className="font-display text-xl font-bold mb-2 text-gambit-cream">{prize.title}</h3>
              <p className="text-gambit-muted text-sm">{prize.body}</p>
            </div>
          ))}
        </div>

        <div
          className="border border-gambit-gold/30 p-8 reveal bg-gambit-gold/5"
          style={{ boxShadow: '0 0 30px rgba(200,169,110,0.08)' }}
        >
          <h4 className="font-display text-lg font-bold mb-2 text-gambit-gold uppercase tracking-wider">The Criteria</h4>
          <p className="text-gambit-cream">
            Your loot scales based on effort and time spent. The more you put into your project, the better the rewards. Have prize ideas? DM me or share in the channel.
          </p>
        </div>
      </div>
    </section>
  );
}
