import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onStart }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">Daily Conversation Cards for English Fluency</h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-sm md:text-base">
            Practice speaking every day with short prompts, guiding questions, and vocabulary hints. Build confidence and fluency in a fun, low-pressure way.
          </p>
          <button onClick={onStart} className="mt-6 inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition">
            <Rocket className="h-5 w-5" />
            Start Practicing
          </button>
          <div className="mt-4 text-xs text-gray-600">Or tap the tiles to interact with the background</div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/70" />
    </section>
  );
}
