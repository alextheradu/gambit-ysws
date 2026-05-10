export default function DeckSection() {
  return (
    <section className="sec" id="deck">
      <div className="wrap">
        <span className="eyebrow" data-reveal="up">the deck · theme cards</span>
        <h2 data-reveal="up" data-delay="1">Every theme is a<br /><em>card</em> in the deck.</h2>
        <p className="lede" data-reveal="up" data-delay="2">Themes are broad constraints, not narrow briefs. You decide what to build inside them. You never draw the same card twice.</p>

        <div className="deck-stage" data-reveal="scale" data-delay="2">
          <div className="pcard suit-d" style={{ ['--tx' as string]: '-360px', ['--ty' as string]: '0px', ['--r' as string]: '-14deg' }}>
            <div className="corner"><b>3♦</b><span>constraint</span></div>
            <div className="pip">♦</div>
            <div className="quest">&ldquo;No JavaScript - HTML and CSS only&rdquo;</div>
            <div className="meta">web · constraint · pure</div>
          </div>
          <div className="pcard suit-c" style={{ ['--tx' as string]: '-200px', ['--ty' as string]: '-12px', ['--r' as string]: '-7deg' }}>
            <div className="corner"><b>7♣</b><span>format</span></div>
            <div className="pip">♣</div>
            <div className="quest">&ldquo;Browser extension&rdquo;</div>
            <div className="meta">web · tool · install</div>
          </div>
          <div className="pcard suit-h" style={{ ['--tx' as string]: '-40px', ['--ty' as string]: '-22px', ['--r' as string]: '-2deg', zIndex: 3 }}>
            <div className="corner"><b>K♥</b><span>challenge</span></div>
            <div className="pip">♥</div>
            <div className="quest">&ldquo;An AI to beat or solve a game&rdquo;</div>
            <div className="meta">AI · games · compete</div>
          </div>
          <div className="pcard suit-s" style={{ ['--tx' as string]: '120px', ['--ty' as string]: '-18px', ['--r' as string]: '4deg' }}>
            <div className="corner"><b>5♠</b><span>format</span></div>
            <div className="pip">♠</div>
            <div className="quest">&ldquo;Terminal only&rdquo;</div>
            <div className="meta">cli · terminal · no gui</div>
          </div>
          <div className="pcard suit-d" style={{ ['--tx' as string]: '280px', ['--ty' as string]: '-6px', ['--r' as string]: '10deg' }}>
            <div className="corner"><b>9♦</b><span>vibe</span></div>
            <div className="pip">♦</div>
            <div className="quest">&ldquo;Bad GUI&rdquo;</div>
            <div className="meta">ui · cursed · art</div>
          </div>
          <div className="pcard back" style={{ ['--tx' as string]: '430px', ['--ty' as string]: '8px', ['--r' as string]: '16deg' }}>
            <div className="seal">G</div>
          </div>
        </div>

        <div className="deck-foot" data-reveal="up" data-delay="3">
          <p><b>Want to add a theme?</b> Every project you ship earns you a theme submission slot. Community themes shape what everyone gets.</p>
          <a className="btn" href="https://gambit.fillout.com/rsvp">Submit a theme →</a>
        </div>
      </div>
    </section>
  );
}
