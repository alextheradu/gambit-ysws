export default function PotSection() {
  const barcodeWidths = [2,1,3,2,1,2,3,1,2,1,3,2,1,2,1,3,2,1,2,3,1,2,1,3,2,1,2,3,1,2,1,2,3,1,2,1,3,2,1,2];

  return (
    <section className="sec" id="pot">
      <div className="wrap">
        <span className="eyebrow" data-reveal="up">we ship · real prizes</span>
        <h2 data-reveal="up" data-delay="1">Real prizes for<br />real <em>projects.</em></h2>
        <p className="lede" data-reveal="up" data-delay="2">Ship your project and we&apos;ll send a surprise physical reward to your door. Effort equals loot, scaled by time spent, quality, and how much was you vs. the AI.</p>

        <div className="pot">
          <div data-reveal="slip">
            <div className="slip">
              <div className="slip-hd">
                <h3>To Ship</h3>
                <span className="stamp">TO SHIP</span>
              </div>
              <div className="slip-from">
                <span><b>FROM</b> Gambit · YSWS</span>
                <span><b>TO</b> @you · 1 reward pending</span>
              </div>
              <table className="slip-table">
                <thead>
                  <tr><th>prize</th><th>eligibility</th><th style={{ textAlign: 'right' }}>loot</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="check x"></span><span className="item-name">Stickers</span><span className="item-req">all shippers</span></td>
                    <td>ship anything · any tier</td>
                    <td className="item-loot">stickers</td>
                  </tr>
                  <tr>
                    <td><span className="check"></span><span className="item-name">Tech Gear</span><span className="item-req">strong effort</span></td>
                    <td>+ solid hours · real polish</td>
                    <td className="item-loot">~ accessories</td>
                  </tr>
                  <tr>
                    <td><span className="check"></span><span className="item-name">Grants</span><span className="item-req">exceptional work</span></td>
                    <td>+ AI credits · hosting</td>
                    <td className="item-loot">~ credits</td>
                  </tr>
                  <tr className="featured">
                    <td><span className="check"></span><span className="item-name">Mystery Box</span><span className="item-req">top tier · ???</span></td>
                    <td>+ contents unknown</td>
                    <td className="item-loot">???</td>
                  </tr>
                  <tr>
                    <td><span className="check"></span><span className="item-name">Micro-grant</span><span className="item-req">outstanding projects</span></td>
                    <td>+ community vote</td>
                    <td className="item-loot">up to $50</td>
                  </tr>
                </tbody>
              </table>
              <div className="slip-foot">
                <span>judged on · <b>time</b> · <b>effort</b> · <b>AI ratio</b></span>
              </div>
              <div className="barcode" aria-hidden="true">
                {barcodeWidths.map((_, i) => <i key={i}></i>)}
              </div>
            </div>
          </div>

          <div className="pot-side" data-reveal="right" data-delay="2">
            <h3>How we judge your <em>loot tier.</em></h3>
            <div className="scoring">
              <div className="score-row">
                <div className="k">T</div>
                <div className="l">Time Spent<span>More hours logged means a better loot tier. We look at commits, not just final output.</span></div>
              </div>
              <div className="score-row">
                <div className="k">E</div>
                <div className="l">Effort Shown<span>Code quality, complexity, polish. Did you push yourself beyond the easy path?</span></div>
              </div>
              <div className="score-row">
                <div className="k">AI</div>
                <div className="l">AI Usage<span>More of you in the project means a higher score. Less AI = better reward. We can tell.</span></div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginTop: '18px', maxWidth: '42ch' }}>
              Have prize ideas? DM us or share in #gambit. Community input shapes the pot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
