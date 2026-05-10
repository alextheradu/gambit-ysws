const faqs = [
  {
    rom: 'i.',
    q: 'What exactly is Gambit?',
    a: "Gambit is a YSWS (You Ship, We Ship) where you get a randomly assigned theme and build any website or software project around it. Ship it, and we mail you a surprise physical reward. Stickers, tech gear, micro-grants, scaled by effort.",
  },
  {
    rom: 'ii.',
    q: 'How do rerolls work?',
    a: "You start with 2–3 free rerolls. If you don't vibe with your theme, burn a reroll and get a new one. Need more? You can buy extra rerolls with in-game currency you earn by participating and shipping.",
  },
  {
    rom: 'iii.',
    q: 'What prizes can I get?',
    a: "Everyone who ships gets stickers at minimum. Beyond that: tech accessories, AI/hosting credits, mystery boxes, or micro-grants up to $50 for outstanding projects. Prize tier is judged on time spent, effort shown, and how much of the work was you vs. AI.",
  },
  {
    rom: 'iv.',
    q: 'When does Gambit start?',
    a: "Expected launch: TBD. RSVP now and join #gambit on Hack Club Slack to get notified the moment season one opens. The sooner you RSVP, the earlier your player number.",
  },
  {
    rom: 'v.',
    q: 'Can I submit a theme for other players?',
    a: "Yes! Every project you ship earns you a theme submission slot. Keep themes broad and weird. They go into the community deck for everyone.",
  },
  {
    rom: 'vi.',
    q: 'How do I get involved beyond playing?',
    a: "We're looking for organizers and staff, people to help select prizes and manage the community. DM us in #gambit or email if you want to help run the show.",
  },
];

export default function FAQSection() {
  return (
    <section className="sec" id="faq">
      <div className="wrap" style={{ maxWidth: '920px' }}>
        <span className="eyebrow" data-reveal="up">faq</span>
        <h2 data-reveal="up" data-delay="1">Questions,<br />answered.</h2>
        <div className="faq-list">
          {faqs.map(({ rom, q, a }, i) => (
            <details className="qa" key={rom} data-reveal="up" data-delay={String(i + 1)}>
              <summary>
                <span className="rom">{rom}</span>
                <span>{q}</span>
                <span className="plus">+</span>
              </summary>
              <div className="body">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
