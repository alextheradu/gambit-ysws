const steps = [
  { num: '01', title: 'Roll Your Theme', body: 'Get a broad, randomly assigned prompt unique to you. No two themes are alike.' },
  { num: '02', title: 'Build It', body: 'Make any website, app, or software that fits your theme. Your choice, your vision.' },
  { num: '03', title: 'Rerolls', body: 'Get 2–3 free rerolls. Need more? Buy them with in-game currency.' },
  { num: '04', title: 'Crowdsourced', body: 'Contribute a theme for someone else with every project you ship. Reviewed before adding.' },
];

const revealClass = ['reveal-left', 'reveal-right', 'reveal-left', 'reveal-right'] as const;
const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const;

export default function YouShipSection() {
  return (
    <section id="how-it-works" className="py-32 px-4 bg-gambit-black border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="text-gambit-violet text-sm uppercase tracking-widest mb-4 reveal">You Ship</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gambit-cream reveal stagger-1">
            Your way from<br />theme to shipped
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-gambit-card p-10 border-l-4 border-gambit-violet hover:border-gambit-gold/50 hover:bg-gambit-violet/10 hover:scale-[1.02] transition-all ${revealClass[i]} ${staggerClass[i]}`}
            >
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-gambit-violet to-gambit-gold bg-clip-text text-transparent">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gambit-cream">{step.title}</h3>
              <p className="text-gambit-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
