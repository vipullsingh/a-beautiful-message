
import React from 'react';

interface DiaryCoverProps {
  onOpen: () => void;
  isOpening: boolean;
}

const DiaryCover: React.FC<DiaryCoverProps> = ({ onOpen, isOpening }) => {
  return (
    <div 
      onClick={onOpen}
      className={`absolute inset-0 z-50 cursor-pointer transition-transform duration-1000 page-flip ${isOpening ? 'flipped' : ''}`}
      style={{ 
        transform: isOpening ? 'rotateY(-180deg)' : 'rotateY(0deg)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Cover Front */}
      <div className="absolute inset-0 backface-hidden rounded-r-2xl bg-[#b76e79] shadow-2xl flex flex-col items-center justify-center p-8 border-r-8 border-[#a05d68]">
        <div className="w-full h-full border-4 border-white/30 rounded-xl flex flex-col items-center justify-center space-y-6">
          <div className="text-white text-5xl md:text-7xl font-serif italic text-center px-4">Our Love Story</div>
          <div className="w-24 h-1 bg-white/40"></div>
          <div className="text-white/80 text-xl font-handwriting">Chapter Forever</div>
          <div className="mt-12 text-white/90 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 21l-12-18h24z" transform="rotate(-90 12 12)"/>
            </svg>
            <span className="block mt-2 font-sans text-xs uppercase tracking-widest text-center">Click to Open</span>
          </div>
        </div>
      </div>

      {/* Cover Back (Inside of Cover) */}
      <div 
        className="absolute inset-0 backface-hidden rounded-l-2xl paper-texture shadow-inner border-r border-gray-300"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="w-full h-full p-12 flex flex-col items-center justify-center space-y-4">
          <div className="text-3xl font-serif text-[#b76e79] italic">For You, My Love</div>
          <p className="text-center font-handwriting text-2xl text-[#5d4037]">
            Every page in this book is a piece of my heart, dedicated to the beautiful journey we've shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiaryCover;
