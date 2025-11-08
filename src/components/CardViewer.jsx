import { useMemo, useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Shuffle, Rotate3D, Volume2, Mic, Square, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCardsByTopic } from './data';

export default function CardViewer({ topic }) {
  const list = useMemo(() => getCardsByTopic(topic), [topic]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [soloMode, setSoloMode] = useState('solo'); // 'solo' | 'teach'
  const [recState, setRecState] = useState('idle'); // 'idle'|'rec'|'stopped'
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const audioRef = useRef(null);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [topic]);

  useEffect(() => {
    if (!shuffled) return;
    // Simple shuffle
    list.sort(() => Math.random() - 0.5);
    setIndex(0);
    setShuffled(false);
  }, [shuffled, list]);

  if (!list.length) return null;
  const card = list[index] || list[0];

  const speak = () => {
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(`${card.title}. Questions: ${card.questions.join(', ')}. Vocabulary: ${card.vocab.join(', ')}`);
    u.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  const startRec = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = e => e.data && chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        if (audioRef.current) {
          audioRef.current.src = url;
        }
      };
      mr.start();
      setRecState('rec');
    } catch (e) {
      console.error(e);
      alert('Microphone permission is required for recording.');
    }
  };

  const stopRec = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setRecState('stopped');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs rounded-full border bg-white shadow-sm" onClick={() => setSoloMode('solo')} aria-pressed={soloMode==='solo'}>
            Solo Mode
          </button>
          <button className="px-3 py-1.5 text-xs rounded-full border bg-white shadow-sm" onClick={() => setSoloMode('teach')} aria-pressed={soloMode==='teach'}>
            Teaching Mode
          </button>
        </div>
        <div className="text-sm text-gray-600">Card {index + 1} / {list.length}</div>
      </div>

      <div className="grid md:grid-cols-[1fr,320px] gap-6 items-start">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl aspect-[4/3] cursor-pointer" onClick={() => setFlipped(f => !f)}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={flipped ? 'back' : 'front'}
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                exit={{ rotateY: -180 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 [transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl ring-1 ring-black/5 p-6 md:p-8 flex flex-col justify-between">
                  {!flipped ? (
                    <div className="h-full flex flex-col">
                      <div className="text-xs uppercase tracking-widest text-rose-500 font-semibold">{card.topic}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">{card.title}</h3>
                      <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                        {card.questions.slice(0, 3).map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4 text-sm text-gray-500">
                        Vocabulary: {card.vocab.join(', ')}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col">
                      <div className="text-xs uppercase tracking-widest text-emerald-500 font-semibold">Example</div>
                      <p className="mt-2 text-lg leading-relaxed text-gray-800">{card.example}</p>
                      <div className="mt-auto flex items-center gap-3 text-xs text-gray-500">
                        <span>Tip: practice aloud for 60–90 seconds.</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm" onClick={() => setFlipped(f => !f)}>
              <Rotate3D className="h-4 w-4" /> Flip Card
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm" onClick={() => setIndex(i => Math.max(0, i - 1))}>
              <ArrowLeft className="h-4 w-4" /> Previous
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm" onClick={() => setIndex(i => Math.min(list.length - 1, i + 1))}>
              Next <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm" onClick={() => setShuffled(true)}>
              <Shuffle className="h-4 w-4" /> Shuffle
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm" onClick={speak}>
              <Volume2 className="h-4 w-4" /> Read Aloud
            </button>
          </div>

          {soloMode === 'solo' && (
            <div className="mt-4 flex items-center gap-3">
              {recState !== 'rec' ? (
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500 text-white shadow" onClick={startRec}>
                  <Mic className="h-4 w-4" /> Record
                </button>
              ) : (
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white shadow" onClick={stopRec}>
                  <Square className="h-4 w-4" /> Stop
                </button>
              )}
              <audio ref={audioRef} controls className="h-10" />
            </div>
          )}
        </div>

        <aside className="bg-white/80 rounded-2xl border shadow-sm p-5">
          <h4 className="font-semibold text-gray-800">Quick Tips</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>Speak continuously for 60–90 seconds.</li>
            <li>Focus on fluency and natural expressions.</li>
            <li>Use the vocabulary hints on the card.</li>
            <li>Flip to see an example dialogue.</li>
          </ul>
          <div className="mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-700 text-sm">
            {soloMode === 'solo' ? 'Solo practice: talk to yourself and record your voice.' : 'Teaching mode: set pair roles, time limit, and rotate.'}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
            <Play className="h-4 w-4" /> Try a 1‑minute speed round!
          </div>
        </aside>
      </div>
    </div>
  );
}
