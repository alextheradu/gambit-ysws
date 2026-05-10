const steps = [
  { num: '01', suit: '♠', title: 'Roll Your Theme', body: 'Get a broad, randomly assigned prompt unique to you. No two themes are alike.' },
  { num: '02', suit: '♥', title: 'Build It', body: 'Make any website, app, or software that fits your theme. Your choice, your vision.' },
  { num: '03', suit: '♦', title: 'Rerolls', body: 'Get 2–3 free rerolls. Need more? Buy them with in-game currency.' },
  { num: '04', suit: '♣', title: 'Crowdsourced', body: 'Contribute a theme for someone else with every project you ship. Reviewed before adding.' },
];

const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const;

export default function YouShipSection() {
  return (
    <section id="how-it-works" className="py-32 px-4 bg-gambit-black border-t border-gambit-cream/10 relative felt-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="text-gambit-violet text-xs uppercase tracking-[0.3em] mb-4 reveal">You Ship</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gambit-cream reveal stagger-1">
            Your way from<br />theme to shipped
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-gambit-card border border-gambit-cream/12 p-6 hover:border-gambit-violet/35 hover:bg-gambit-violet/[0.03] reveal ${staggerClass[i]}`}
              style={{ boxShadow: '0 1px 4px rgba(28,13,51,0.06)' }}
            >
              {/* Card corner — top left */}
              <div className="absolute top-3 left-4 flex flex-col items-center gap-0.5 select-none">
                <span className="font-display text-sm font-bold text-gambit-gold leading-none">{step.num}</span>
                <span className="text-gambit-gold/60 text-base leading-none">{step.suit}</span>
              </div>
              {/* Card corner — bottom right (mirrored) */}
              <div className="absolute bottom-3 right-4 flex flex-col items-center gap-0.5 rotate-180 select-none">
                <span className="font-display text-sm font-bold text-gambit-gold leading-none">{step.num}</span>
                <span className="text-gambit-gold/60 text-base leading-none">{step.suit}</span>
              </div>

              {/* Card face */}
              <div className="pt-10 pb-6 px-4 text-center">
                <div className="text-5xl text-gambit-violet/15 mb-5 select-none">{step.suit}</div>
                <h3 className="font-display text-xl font-bold mb-3 text-gambit-cream">{step.title}</h3>
                <p className="text-gambit-muted leading-relaxed text-sm">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
