import { Timer, Users, ThumbsUp } from 'lucide-react';

export default function HowToPlay() {
  return (
    <section id="how-to" className="max-w-5xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">How to Play</h2>
      <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
        Use these cards for quick, daily speaking practice. Keep the atmosphere friendly and focus on fluency over perfection.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
          <Users className="h-8 w-8 mx-auto text-rose-500" />
          <h3 className="mt-3 font-semibold text-gray-800">Pair Work</h3>
          <p className="mt-2 text-sm text-gray-600">In pairs: one asks, one answers. Swap roles after each card.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
          <Timer className="h-8 w-8 mx-auto text-rose-500" />
          <h3 className="mt-3 font-semibold text-gray-800">Time Limit</h3>
          <p className="mt-2 text-sm text-gray-600">Set 1–2 minutes per card. Keep speaking without long pauses.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
          <ThumbsUp className="h-8 w-8 mx-auto text-rose-500" />
          <h3 className="mt-3 font-semibold text-gray-800">Warm‑up</h3>
          <p className="mt-2 text-sm text-gray-600">Use as a daily warm‑up activity. Encourage natural, confident speech.</p>
        </div>
      </div>
    </section>
  );
}
