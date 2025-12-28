
import React from 'react';
import { Memory } from '../types';

interface MemoryFrameProps {
  memory: Memory;
  index: number;
}

const MemoryFrame: React.FC<MemoryFrameProps> = ({ memory, index }) => {
  // Give each polaroid a slightly unique rotation for a scrapbook feel
  const rotation = (index % 2 === 0 ? -1.5 : 1.5) * (Math.random() * 0.5 + 0.75);

  return (
    <div className="scroll-section w-full">
      <div 
        className="polaroid-frame max-w-[92%] md:max-w-[450px] paper-texture animate-on-scroll relative group"
        style={{ '--rotation': `${rotation}deg` } as any}
      >
        {/* Washi Tape decorative element */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#b76e79]/30 -rotate-2 mix-blend-multiply z-10 rounded-sm"></div>
        
        <div className="w-full aspect-[4/5] overflow-hidden bg-gray-50 border border-gray-100">
          <img 
            src={memory.imageUrl} 
            alt={memory.caption} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            loading="lazy"
          />
        </div>
        <div className="mt-6 space-y-2 text-center">
          <p className="font-handwriting text-xl text-[#b76e79] opacity-80 italic">
            {memory.date}
          </p>
          <p className="font-handwriting text-2xl md:text-3xl text-[#5d4037] leading-tight px-2">
            {memory.caption}
          </p>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-5 md:right-20 opacity-10 pointer-events-none">
        <span className="text-6xl text-[#b76e79]">❤️</span>
      </div>
      <div className="absolute bottom-1/4 left-5 md:left-20 opacity-10 pointer-events-none">
        <span className="text-4xl text-[#b76e79]">✨</span>
      </div>
    </div>
  );
};

export default MemoryFrame;
