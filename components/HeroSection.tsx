'use client';
import { useRef, useState, useCallback } from 'react';

type Theme = { parts: [string, string, string]; full: string };

const THEMES: Theme[] = [
  { parts: ['Build a',   'Slack',    'bot'],        full: 'Slack bot' },
  { parts: ['IDE',       'plugin or','extension'],   full: 'IDE extension' },
  { parts: ['Browser',   'ext. for', 'the web'],     full: 'Browser extension' },
  { parts: ['A project', 'built for','Gambit'],      full: 'A project relating to Gambit' },
  { parts: ['An AI that','can beat', 'any game'],    full: 'An AI to beat or solve a game' },
  { parts: ['Make it',   'look',     'terrible'],    full: 'Bad GUI' },
  { parts: ['Terminal',  'only',     'no clicks'],   full: 'Terminal only' },
  { parts: ['No JS',     'HTML &',   'CSS only'],    full: 'No JavaScript - HTML and CSS only' },
];

// Filler words that spin past — purely visual noise
const NOISE: [string[], string[], string[]] = [
  ['Make a', 'Ship a', 'Write a', 'Create a', 'Deploy a', 'Design a', 'Launch a', 'Build a'],
  ['browser', 'terminal', 'AI that', 'tool for', 'plugin or', 'bot that', 'ext. for', 'only'],
  ['no clicks', 'any game', 'CSS only', 'the web', 'extension', 'Gambit', 'terrible', 'no JS'],
];

const ROW_HEIGHT = 140;
const REPEATS = 20;
const LAND_IDX = REPEATS - 4;

function buildStrip(col: HTMLDivElement, noise: string[], landWord: string) {
  while (col.firstChild) col.removeChild(col.firstChild);
  const pool = [...noise];
  for (let j = 0; j < REPEATS; j++) {
    const div = document.createElement('div');
    if (j === LAND_IDX) {
      div.className = 'item accent';
      div.textContent = landWord;
    } else {
      div.className = 'item';
      div.textContent = pool[j % pool.length];
    }
    col.appendChild(div);
  }
}

export default function HeroSection() {
  const stripRefs  = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const historyRef = useRef<number[]>([]);
  const [theme, setTheme]   = useState(THEMES[4].full);
  const [rolling, setRolling] = useState(false);

  const pickNext = useCallback((): Theme => {
    const blocked = new Set(historyRef.current.slice(-4));
    const pool = THEMES.map((_, i) => i).filter(i => !blocked.has(i));
    const idx = pool[Math.floor(Math.random() * pool.length)];
    historyRef.current = [...historyRef.current, idx].slice(-5);
    return THEMES[idx];
  }, []);

  const spin = useCallback(() => {
    if (rolling) return;
    setRolling(true);

    const picked = pickNext();

    picked.parts.forEach((word, i) => {
      const col = stripRefs.current[i];
      if (!col) return;
      buildStrip(col, NOISE[i], word);
      col.style.transition = 'none';
      col.style.transform = 'translateY(0)';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        col.style.transition = `transform ${1.5 + i * 0.2}s cubic-bezier(.18,.7,.18,1)`;
        col.style.transform = `translateY(-${LAND_IDX * ROW_HEIGHT}px)`;
      }));
    });

    setTimeout(() => {
      setTheme(picked.full);
      setRolling(false);
    }, 1900);
  }, [rolling, pickNext]);

  return (
    <section className="hero" id="top">
      <div className="wrap grid">
        <div>
          <span className="eyebrow">a YSWS · ship a thing · get mailed loot</span>
          <h1>
            Build the&nbsp;thing<br />
            the <span className="red">dice</span> told<br />
            you to <span className="ital stroke">build.</span>
          </h1>
          <p className="lede">
            You don&apos;t pick the prompt. It picks you. Get a random theme, build a website or software project around it, ship it, and we mail you a surprise reward. Stickers, mystery loot, micro-grants, scaled by hours, effort, and how much was you vs. the AI.
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="https://gambit.fillout.com/rsvp" style={{ padding: '13px 22px', fontSize: '15px' }}>RSVP &amp; roll your first theme</a>
            <a className="btn btn-ghost" href="#rules" style={{ padding: '13px 18px' }}>How it works ↓</a>
          </div>
        </div>

        <div className="reel-wrap">
          <div className="reel">
            <div className="head">
              <span className="pill"><span className="live"></span>theme reel · live</span>
            </div>
            <div className="slots">
              {([0, 1, 2] as const).map(i => (
                <div className="slot" key={i}>
                  <div className="strip" ref={el => { stripRefs.current[i] = el; }}>
                    <div className="item accent">{THEMES[4].parts[i]}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="out">
              <div>
                <div className="lbl">your assigned theme</div>
                <div className="theme">{theme}</div>
              </div>
            </div>
            <div className="actions">
              <button className="btn" onClick={spin} disabled={rolling}>
                {rolling ? 'rolling…' : '↻ Roll the reel'}
              </button>
              <a className="btn btn-primary" href="https://gambit.fillout.com/rsvp" style={{ fontSize: '14px' }}>Lock it in →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
