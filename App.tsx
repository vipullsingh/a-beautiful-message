
import React, { useState, useRef } from 'react';
import { AppState } from './types';
import { MEMORIES } from './constants';
import FloatingHearts from './components/FloatingHearts';
import Celebration from './components/Celebration';
import MemoryFrame from './components/MemoryFrame';
import ProposalSection from './components/ProposalSection';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.VIEWING);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioFileLocation = "public\audio\Suniyan_Suniyan.mp3"

  const startJourney = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked or failed", err));
    }
  };

  const handleProposalAccept = () => {
    setAppState(AppState.PROPOSAL_ACCEPTED);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!hasStarted) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#fce4ec] p-8 text-center space-y-8 paper-texture">
        <FloatingHearts />
        <div className="space-y-4 animate-fade-in relative z-10">
          <div className="text-6xl md:text-9xl mb-4 animate-bounce">💌</div>
          <h1 className="text-5xl md:text-8xl font-serif text-[#b76e79] italic drop-shadow-sm">For My Shiddatt</h1>
          <p className="text-xl md:text-2xl font-handwriting text-[#5d4037]">A collection of moments that Py will cherish forever...</p>
        </div>
        
        <button 
          onClick={startJourney}
          className="group relative px-12 py-5 bg-[#b76e79] text-white rounded-full font-serif text-2xl shadow-2xl hover:bg-[#a05d68] transition-all transform hover:scale-110 active:scale-95 overflow-hidden z-10"
        >
          <span className="relative z-10">Open Our Story Shiddatt ❤️</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        <audio 
          ref={audioRef}
          src={audioFileLocation}
          loop
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-[#fce4ec]">
      <FloatingHearts />
      
      <audio 
        ref={audioRef}
        src={audioFileLocation}
        autoPlay
        loop
      />

      {appState === AppState.VIEWING ? (
        <div className="scroll-container">
          <div className="scroll-section text-center p-8">
            <div className="max-w-xl space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-handwriting text-[#b76e79]">My Shiddatt,</h2>
              <p className="text-xl md:text-2xl font-serif italic text-[#5d4037] leading-relaxed">
                Py wants you to know that every single second we've shared is a treasure I promise to protect for a lifetime.
              </p>
              <div className="pt-10 animate-bounce text-[#b76e79] opacity-40">
                <p className="text-xs uppercase tracking-widest mb-2 font-sans">Scroll through our magic together</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {MEMORIES.map((memory, index) => (
            <MemoryFrame key={memory.id} memory={memory} index={index} />
          ))}

          <ProposalSection onAccept={handleProposalAccept} />
        </div>
      ) : (
        <Celebration />
      )}

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-30">
        <span className="text-[10px] uppercase tracking-[0.5em] font-sans text-[#b76e79]">Py & Shiddatt Forever</span>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
