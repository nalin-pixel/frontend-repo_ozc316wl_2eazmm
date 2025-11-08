import { Megaphone, ShoppingBag, Mail } from 'lucide-react';
import { topics } from './data';

const ICONS = { Megaphone, ShoppingBag, Mail };

export default function TopicSelector({ value, onChange }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-3">
      {topics.map(t => {
        const Icon = ICONS[t.icon] || Megaphone;
        const active = value === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition shadow-sm ${active ? 'bg-rose-500 text-white border-rose-600' : 'bg-white/80 text-gray-700 border-gray-200 hover:bg-white'}`}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
