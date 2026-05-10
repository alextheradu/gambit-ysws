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
              A YSWS for builders who want a prompt, not a brief. Roll the dice, ship the thing, check your mailbox. Want to sponsor? Message @Alex Radu on slack!
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
          </div>
          <div className="col">
            <h5>Stuff</h5>
            <a href="#faq">FAQ</a>
            {/* <a href="#">Press kit</a>
            <a href="mailto:hi@gambit.dev">Email us</a> */}
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Gambit · A <a href="https://hackclub.com/">Hack Club</a> YSWS</span>
          <a href="https://hackclub.com/" className="hc-flag-link">
            <img src="/hackclub/flag-standalone.svg" alt="Hack Club" style={{ height: '32px', width: 'auto' }} />
          </a>
          <span>v1 opens soon (prob mid-june to early july)</span>
        </div>
      </div>
    </footer>
  );
}
