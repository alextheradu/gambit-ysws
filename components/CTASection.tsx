export default function CTASection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="table-cta" style={{ padding: '90px 40px 110px', textAlign: 'center', borderRadius: '20px', position: 'relative', overflow: 'visible' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)', justifyContent: 'center' }}>ready to play</span>
          <h2 style={{ marginTop: '14px' }}>Ready to<br /><em>roll?</em></h2>
          <p>Join #gambit and RSVP now. Roll the dice, ship the thing, check your mailbox.</p>
          <div className="actions">
            <a className="btn btn-primary" href="https://gambit.fillout.com/rsvp">RSVP &amp; roll your first theme →</a>
            <a className="btn btn-ghost" href="#rules" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See the rules</a>
          </div>
          <div className="chips" aria-hidden="true">
            <div className="chip"></div>
            <div className="chip green"></div>
            <div className="chip gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
