
import React from 'react';

interface ProposalSectionProps {
  onAccept: () => void;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({ onAccept }) => {
  return (
    <div className="scroll-section w-full bg-[#fffcfc]">
      <div className="max-w-2xl text-center space-y-12 p-8 border-4 border-double border-[#b76e79]/30 rounded-[50px] shadow-2xl relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-5xl">💍</div>
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-[#b76e79] italic">Shiddatt, My Love</h2>
          <p className="text-2xl md:text-3xl font-handwriting text-[#5d4037]">
            We have walked through these months of magic, but Py wants to walk a thousand years more with you by his side.
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-3xl md:text-5xl font-handwriting text-[#b76e79] font-bold animate-pulse-slow px-4">
            Shiddatt, will you marry your Py?
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={onAccept}
              className="px-12 py-4 bg-[#b76e79] text-white rounded-full font-serif text-2xl shadow-xl hover:bg-[#a05d68] transition-all transform hover:scale-110 active:scale-95"
            >
              Yes, Py! Always ❤️
            </button>
            <button 
              onClick={onAccept}
              className="px-12 py-4 border-2 border-[#b76e79] text-[#b76e79] rounded-full font-serif text-2xl shadow-lg hover:bg-[#fff0f3] transition-all transform hover:scale-110 active:scale-95"
            >
              For All Eternity 💍
            </button>
          </div>
        </div>

        <p className="text-sm font-sans uppercase tracking-[0.3em] text-[#b76e79]/40">
          Scroll back to relive our magic
        </p>
      </div>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ProposalSection;
