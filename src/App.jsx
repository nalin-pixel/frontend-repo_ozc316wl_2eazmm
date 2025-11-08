import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopicSelector from './components/TopicSelector';
import CardViewer from './components/CardViewer';
import HowToPlay from './components/HowToPlay';
import { topics, getCardsByTopic } from './components/data';

function App() {
  const [started, setStarted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0].key);

  const startRandom = () => {
    const all = getCardsByTopic(selectedTopic);
    const idx = Math.floor(Math.random() * all.length);
    // Trigger viewer to open and start at random card by shuffling in viewer
    setStarted(true);
    // We convey nothing else; viewer includes Shuffle option.
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-rose-50 text-gray-800">
      <Navbar onStartRandom={startRandom} />

      {!started && (
        <>
          <Hero onStart={() => setStarted(true)} />
          <section className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">Choose a Topic</h2>
            <p className="mt-2 text-center text-gray-600">Pick a theme to focus your practice. You can add more topics later.</p>
            <div className="mt-5">
              <TopicSelector value={selectedTopic} onChange={setSelectedTopic} />
            </div>
          </section>
        </>
      )}

      {started && (
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6">
              <TopicSelector value={selectedTopic} onChange={setSelectedTopic} />
            </div>
            <CardViewer topic={selectedTopic} />
          </div>
        </section>
      )}

      <HowToPlay />

      <footer className="py-10 text-center text-sm text-gray-500">
        <div className="max-w-5xl mx-auto px-4">
          This project is inspired by research on improving speaking fluency through daily conversation prompts.
        </div>
      </footer>
    </div>
  );
}

export default App;
