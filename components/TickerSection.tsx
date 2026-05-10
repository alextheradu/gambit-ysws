const items = [
  { t: '12m', who: '@archie_l', action: null, theme: '"a tool that\'s only useful at 3am"', tag: 'sticker tier' },
  { t: '38m', who: '@priya_v', action: 're-roll', theme: '"a museum for things that don\'t exist"', tag: null },
  { t: '1h', who: '@marcus_b', action: null, theme: '"a haunted vending machine simulator"', tag: null },
  { t: '3h', who: '@chen_m', action: null, theme: '"a calendar that lies to you"', tag: 'tech gear tier' },
  { t: '5h', who: '@ines_r', action: null, theme: '"a search engine for sounds you can\'t describe"', tag: null },
  { t: '7h', who: '@sam_o', action: null, theme: '"a language with only 12 words"', tag: null },
];

export default function TickerSection() {
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="track">
        {[...items, ...items].map((item, i) => (
          <span className="item" key={i}>
            <span className="dot"></span>
            <span className="t">{item.t}</span>
            {' '}{item.who}{' '}
            {item.action ? <span className="r">{item.action}</span> : null}
            {' '}<span className="v">{item.theme}</span>
            {item.tag ? <>{' · '}<span className="v">{item.tag}</span></> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
