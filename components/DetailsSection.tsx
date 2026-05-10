const items = [
  {
    title: 'Loot System',
    body: 'Prizes selected based on your project and path taken. Spend credits to influence the decision and increase your chances.',
    highlight: true,
  },
  {
    title: 'Currency',
    body: 'Earn chips through participation. Use them to buy rerolls or influence prize selection.',
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
    <section className="py-32 px-4 bg-gambit-black border-t border-gambit-cream/10 felt-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="text-gambit-gold text-xs uppercase tracking-[0.3em] mb-4 reveal">Details</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gambit-cream reveal stagger-1">House Rules</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`border p-8 ${
                item.highlight
                  ? 'border-gambit-gold/40 bg-gambit-gold/[0.05] hover:border-gambit-gold/60'
                  : 'border-gambit-cream/10 bg-gambit-card hover:border-gambit-violet/30 hover:bg-gambit-violet/[0.03]'
              } ${revealClass[i]} ${staggerClass[i]}`}
              style={{ boxShadow: '0 1px 4px rgba(28,13,51,0.05)' }}
            >
              <h3 className={`font-display text-xl font-bold mb-3 ${item.highlight ? 'text-gambit-gold' : 'text-gambit-cream'}`}>
                {item.title}
              </h3>
              <p className="text-gambit-muted leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
