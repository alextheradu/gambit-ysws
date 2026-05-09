import DiceIcon from './DiceIcon';

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-gambit-gold/20" style={{ background: '#080010' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gambit-gold font-bold uppercase tracking-wider text-sm">
          <DiceIcon size={16} className="text-gambit-gold" />
          Gambit
          <span className="text-gambit-muted font-normal normal-case tracking-normal ml-2">· A Hack Club YSWS</span>
        </div>
        <div className="flex items-center gap-6 text-gambit-muted text-xs uppercase tracking-wider">
          <a href="#" className="hover:text-gambit-gold transition-colors">#gambit</a>
          <a href="#prizes" className="hover:text-gambit-gold transition-colors">Prizes</a>
          <a href="#join" className="hover:text-gambit-gold transition-colors">Join</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-white/5">
        <p className="text-gambit-muted text-xs text-center">Questions? DM us or ask in #gambit. Open to prize suggestions.</p>
      </div>
    </footer>
  );
}
