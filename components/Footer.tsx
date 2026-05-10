export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="row">
          <div className="col" style={{ maxWidth: '300px' }}>
            <div className="brand" style={{ marginBottom: '12px' }}>
              <span className="die" aria-hidden="true">
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              </span>
              gambit
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              A YSWS for builders who want a prompt, not a brief. Roll the dice, ship the thing, check your mailbox.
            </p>
          </div>
          <div className="col">
            <h5>Play</h5>
            <a href="https://gambit.fillout.com/rsvp">RSVP</a>
            <a href="#rules">Rules</a>
            <a href="#deck">The deck</a>
            <a href="#pot">The pot</a>
          </div>
          <div className="col">
            <h5>Community</h5>
            <a href="https://gambit.fillout.com/rsvp">Submit a theme</a>
            <a href="#">Discord</a>
            <a href="#">Archive</a>
          </div>
          <div className="col">
            <h5>Stuff</h5>
            <a href="#faq">FAQ</a>
            <a href="#">Press kit</a>
            <a href="mailto:hi@gambit.dev">Email us</a>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Gambit · A Hack Club YSWS · made on a dare</span>
          <span>v0.1 · season one opens soon</span>
        </div>
      </div>
    </footer>
  );
}
