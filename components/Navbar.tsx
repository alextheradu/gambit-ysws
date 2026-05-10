export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap row">
        <a className="brand" href="#top">
          <span className="die" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </span>
          gambit
        </a>
        <nav className="links">
          <a href="#rules">Rules</a>
          <a href="#deck">The deck</a>
          <a href="#pot">The pot</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-primary" href="https://gambit.fillout.com/rsvp">RSVP →</a>
      </div>
    </header>
  );
}
