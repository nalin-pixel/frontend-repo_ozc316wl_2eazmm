import { BookOpen, Home, Info, Dice5 } from 'lucide-react';

export default function Navbar({ onStartRandom }) {
  const scrollToHowTo = () => {
    const el = document.getElementById('how-to');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <BookOpen className="h-5 w-5 text-rose-500" />
          Daily Conversation Cards
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm"><Home className="h-4 w-4"/>Home</a>
          <button onClick={scrollToHowTo} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm"><Info className="h-4 w-4"/>How to Play</button>
          <button onClick={onStartRandom} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-rose-500 text-white text-sm shadow hover:bg-rose-600"><Dice5 className="h-4 w-4"/> Today\'s Random</button>
        </div>
      </div>
    </nav>
  );
}
