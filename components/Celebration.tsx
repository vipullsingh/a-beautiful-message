
import React, { useEffect, useState } from 'react';

const Celebration: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 60 }).map((_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center animate-fade-in overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f3] via-white to-[#fff0f3] opacity-60"></div>
      
      <div className="relative z-10 text-center space-y-10 p-8 max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl border border-white shadow-2xl animate-pop-in">
        <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-handwriting text-[#b76e79] drop-shadow-md">
                It's a Yes! ❤️
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-[#5d4037] italic opacity-80">
                Py and Shiddatt... together forever.
            </p>
        </div>

        <div className="relative h-40 flex items-center justify-center">
            <div className="text-8xl md:text-9xl animate-pulse-fast drop-shadow-xl">💍</div>
            <div className="absolute w-32 h-32 border-4 border-[#b76e79]/30 rounded-full animate-ping-slow"></div>
            <div className="absolute w-40 h-40 border-2 border-[#b76e79]/10 rounded-full animate-ping-slower"></div>
        </div>

        <div className="space-y-4">
            <div className="text-xl font-sans text-[#b76e79] uppercase tracking-[0.5em] font-light">Vipul & Chetna Forever</div>
            <p className="font-handwriting text-3xl text-[#5d4037]/70">The most beautiful story has just begun.</p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {petals.map((i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              backgroundColor: ['#ffc1cc', '#b76e79', '#ffffff', '#ffd700', '#f48fb1'][Math.floor(Math.random() * 5)],
              width: `${Math.random() * 15 + 8}px`,
              height: `${Math.random() * 15 + 8}px`,
              borderRadius: Math.random() > 0.5 ? '50% 0 50% 50%' : '50%',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg) translateX(0); }
          25% { transform: translateY(25vh) rotate(90deg) translateX(15px); }
          50% { transform: translateY(50vh) rotate(180deg) translateX(-15px); }
          75% { transform: translateY(75vh) rotate(270deg) translateX(15px); }
          100% { transform: translateY(110vh) rotate(360deg) translateX(0); }
        }
        .animate-fall { animation: fall linear infinite; }

        @keyframes ping-slow {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        @keyframes ping-slower {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slower { animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite; }

        .animate-pulse-fast { animation: pulse 1s infinite; }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in { animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </div>
  );
};

export default Celebration;
