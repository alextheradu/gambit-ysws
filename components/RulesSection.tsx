export default function RulesSection() {
  return (
    <section className="sec felt" id="rules">
      <span className="stitch t"></span>
      <span className="stitch b"></span>
      <div className="wrap">
        <div className="rules-head">
          <div>
            <span className="eyebrow" data-reveal="up">you ship · four moves</span>
            <h2 data-reveal="up" data-delay="1">Your way from<br />theme to shipped.</h2>
          </div>
          <p className="lede" data-reveal="up" data-delay="2" style={{ color: 'rgba(255,255,255,.78)', maxWidth: '38ch', margin: 0 }}>
            Get a randomly assigned theme, build any website or software project around it, ship it, and check your mailbox.
          </p>
        </div>

        <div className="rules">
          <div className="rule" data-reveal="up" data-delay="1">
            <div className="n">i</div>
            <span className="tag-l">the deal</span>
            <h3>Roll Your Theme</h3>
            <p>Get a broad, randomly assigned prompt unique to you. No two themes are alike. Themes are community-sourced.</p>
          </div>
          <div className="rule" data-reveal="up" data-delay="2">
            <div className="n">ii</div>
            <span className="tag-l">the work</span>
            <h3>Build It</h3>
            <p>Make any website, app, or software that fits your theme. Your choice, your vision. As long as it ships.</p>
          </div>
          <div className="rule" data-reveal="up" data-delay="3">
            <div className="n">iii</div>
            <span className="tag-l">free rerolls</span>
            <h3>Rerolls</h3>
            <p>Start with 2–3 free rerolls. Need more? Buy them with in-game currency earned by participating and shipping.</p>
          </div>
          <div className="rule k" data-reveal="up" data-delay="4">
            <div className="n">iv</div>
            <span className="tag-l">the community</span>
            <h3>Crowdsourced</h3>
            <p>Contribute a theme for someone else with every project you ship. Community themes shape the deck for everyone.</p>
          </div>
        </div>

        <div className="rules-foot" data-reveal="up" data-delay="2">
          <span>loot scales on effort · time spent · how much was you</span>
          <a className="btn" href="https://gambit.fillout.com/rsvp">RSVP →</a>
        </div>
      </div>
    </section>
  );
}
