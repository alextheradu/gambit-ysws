const prizes = [
  { suit: '♠', title: 'Stickers', body: 'Top tier Gambit stickers', tier: 'All Shippers' },
  { suit: '♥', title: 'Tech Gear', body: 'Accessories & hardware', tier: 'Strong Effort' },
  { suit: '♦', title: 'Grants', body: 'AI credits & hosting', tier: 'Exceptional' },
  { suit: '♣', title: 'Mystery Box', body: 'Surprise packages — contents unknown', tier: '???' },
];

const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const;

export default function WeShipSection() {
  return (
    <section id="prizes" className="py-32 px-4 bg-gambit-dark border-t border-gambit-cream/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-gambit-gold text-xs uppercase tracking-[0.3em] mb-4 reveal">We Ship</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gambit-cream reveal stagger-1">
            Real prizes for<br />real projects
          </h2>
          <p className="text-xl text-gambit-muted max-w-xl reveal stagger-2">
            Ship your project and we&apos;ll send a surprise physical reward to your door. Effort equals loot.
          </p>
        </div>

        {/* Payout table */}
        <div className="border border-gambit-cream/12 reveal stagger-3" style={{ boxShadow: '0 1px 4px rgba(28,13,51,0.06)' }}>
          {/* Table header — desktop */}
          <div className="hidden md:flex border-b border-gambit-cream/10 px-6 py-3 text-xs font-display uppercase tracking-widest text-gambit-muted bg-gambit-black/40">
            <span className="w-10"></span>
            <span className="flex-1">Prize</span>
            <span className="flex-1">Includes</span>
            <span className="w-32 text-right">Tier</span>
          </div>

          {prizes.map((prize, i) => (
            <div
              key={prize.title}
              className={`border-b border-gambit-cream/8 last:border-0 hover:bg-gambit-violet/[0.04] ${staggerClass[i]}`}
            >
              {/* Desktop row */}
              <div className="hidden md:flex px-6 py-5 items-center">
                <span className="w-10 text-2xl text-gambit-gold">{prize.suit}</span>
                <span className="flex-1 font-display font-bold text-gambit-cream">{prize.title}</span>
                <span className="flex-1 text-gambit-muted text-sm">{prize.body}</span>
                <span className="w-32 text-right text-xs uppercase tracking-wider text-gambit-violet border border-gambit-violet/25 px-2 py-1 font-display">{prize.tier}</span>
              </div>
              {/* Mobile */}
              <div className="md:hidden px-5 py-4 flex items-start gap-4">
                <span className="text-2xl text-gambit-gold mt-0.5">{prize.suit}</span>
                <div className="flex-1">
                  <div className="font-display font-bold text-gambit-cream mb-1">{prize.title}</div>
                  <div className="text-gambit-muted text-sm">{prize.body}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-gambit-violet font-display">{prize.tier}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Criteria */}
        <div
          className="border border-gambit-gold/25 p-8 mt-5 reveal bg-gambit-gold/[0.04]"
        >
          <div className="flex items-start gap-4">
            <span className="text-gambit-gold text-xl mt-0.5 select-none">♦</span>
            <div>
              <h4 className="font-display text-sm font-bold mb-2 text-gambit-gold uppercase tracking-widest">The Criteria</h4>
              <p className="text-gambit-cream text-sm leading-relaxed">
                Loot scales based on effort and time spent. The more you put into your project, the better the rewards. Have prize ideas? DM me or share in the channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
