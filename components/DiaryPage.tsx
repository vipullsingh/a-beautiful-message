
import React from 'react';
import { LovePage } from '../types';

interface DiaryPageProps {
  page: LovePage & { secondaryImages?: string[] };
  isActive: boolean;
  isFlipped: boolean;
  zIndex: number;
  isLast: boolean;
  onProposalAccept?: () => void;
}

const DiaryPage: React.FC<DiaryPageProps> = ({ page, isActive, isFlipped, zIndex, isLast, onProposalAccept }) => {
  return (
    <div 
      className={`absolute inset-0 transition-transform duration-1000 page-flip`}
      style={{ 
        zIndex,
        transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Front Face of Page (Scrapbook Content) */}
      <div className="absolute inset-0 backface-hidden paper-texture rounded-r-lg shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col p-6 md:p-10 border-l border-gray-200">
        
        {/* Main Title with Decorative Scribble */}
        <div className="text-center mb-8 relative">
          <h2 className="text-3xl md:text-5xl font-serif text-[#b76e79] italic z-10 relative">{page.title}</h2>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#b76e79]/20 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Main Photo Area (Polaroid Style) */}
          <div className="w-full md:w-1/2 relative">
             {/* Washi Tape */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#b76e79]/40 rotate-2 z-20 mix-blend-multiply rounded-sm"></div>
             
             <div className={`bg-white p-3 pb-12 shadow-xl transform -rotate-1 transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-95'}`}>
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={page.imageUrl} alt={page.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="mt-4 text-center font-handwriting text-xl text-gray-500 italic opacity-60">
                   Our Moment...
                </div>
             </div>
          </div>

          {/* Message Area */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative p-6 bg-[#fff9f9] border border-[#b76e79]/10 rounded-lg shadow-sm">
               {/* Decorative Quote Mark */}
               <span className="absolute -top-4 -left-2 text-6xl text-[#b76e79]/10 font-serif">“</span>
               <p className="text-xl md:text-2xl font-handwriting text-[#5d4037] leading-relaxed relative z-10">
                 {page.message}
               </p>
            </div>

            {/* Mini Collage for Secondary Images */}
            {page.secondaryImages && page.secondaryImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {page.secondaryImages.slice(0, 6).map((img, i) => (
                  <div key={i} className={`bg-white p-1 shadow-md transform ${i % 2 === 0 ? 'rotate-3' : '-rotate-3'} hover:rotate-0 transition-transform cursor-pointer`}>
                    <img src={img} className="w-full aspect-square object-cover" alt="memory" />
                  </div>
                ))}
                {page.secondaryImages.length > 6 && (
                  <div className="col-span-3 text-center text-xs font-sans text-[#b76e79]/50 uppercase tracking-widest mt-2">
                    + {page.secondaryImages.length - 6} more memories on this page
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Final Proposal Section */}
        {isLast && isActive && (
          <div className="mt-12 mb-8 p-10 border-2 border-dashed border-[#b76e79]/30 rounded-3xl bg-[#fffcfc] text-center space-y-8 animate-fade-in-up">
            <div className="text-4xl md:text-6xl font-handwriting text-[#b76e79] animate-pulse-slow font-bold drop-shadow-sm">
              My darling, will you marry me?
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={onProposalAccept}
                className="group relative px-10 py-4 bg-[#b76e79] text-white rounded-full font-serif text-xl shadow-xl hover:bg-[#a05d68] transition-all transform hover:scale-110 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Yes, Forever ❤️</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={onProposalAccept}
                className="group relative px-10 py-4 border-2 border-[#b76e79] text-[#b76e79] rounded-full font-serif text-xl shadow-lg hover:bg-[#fff0f3] transition-all transform hover:scale-110 active:scale-95"
              >
                Always & Forever 💍
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Back Face of Page */}
      <div 
        className="absolute inset-0 backface-hidden paper-texture rounded-l-lg shadow-inner border-r border-gray-200"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="w-full h-full flex items-center justify-center opacity-10">
           <img src="https://www.transparenttextures.com/patterns/natural-paper.png" className="w-full h-full object-cover" alt="paper" />
        </div>
      </div>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DiaryPage;
