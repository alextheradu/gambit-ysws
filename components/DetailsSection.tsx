const items = [
  {
    title: 'Loot System',
    body: 'Prizes selected based on your project and path taken. Spend credits to influence the decision and increase your chances.',
    highlight: true,
  },
  {
    title: 'Currency',
    body: 'Earn chips/mana/sparks through participation. Use them to buy rerolls or influence prize selection.',
    highlight: false,
  },
  {
    title: 'Launch',
    body: 'Expected: TBD. Join #gambit and RSVP to stay updated on the exact start date.',
    highlight: false,
  },
  {
    title: 'Help Out',
    body: 'Looking for organizers and staff. DM us to help review themes, select prizes, or manage the community.',
    highlight: false,
  },
];

const revealClass = ['reveal-left', 'reveal-right', 'reveal-left', 'reveal-right'] as const;
const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const;

export default function DetailsSection() {
  return (
    <section className="py-32 px-4 bg-gambit-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="text-gambit-gold text-sm uppercase tracking-widest mb-4 reveal">Details</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gambit-cream reveal stagger-1">How it works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`pl-8 transition-colors ${revealClass[i]} ${staggerClass[i]} ${item.highlight ? 'border-l-4 border-gambit-gold hover:border-gambit-gold/70' : 'border-l-4 border-gambit-violet/40 hover:border-gambit-violet/80'}`}
            >
              <h3 className={`font-display text-xl font-bold mb-3 ${item.highlight ? 'bg-gradient-to-r from-gambit-gold to-gambit-violet bg-clip-text text-transparent' : 'text-gambit-cream'}`}>
                {item.title}
              </h3>
              <p className="text-gambit-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
