import React, { useState, useEffect } from 'react';

const PreloaderTwo: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Quick premium loading sequence
    const timer = setTimeout(() => {
      setFade(true);
      // Wait for the slide-up animation to finish before unmounting
      setTimeout(() => setLoading(false), 800);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <>
      <style>
        {`
          @keyframes letterReveal {
            0% { transform: translateY(110%) rotate(5deg); opacity: 0; }
            100% { transform: translateY(0) rotate(0deg); opacity: 1; }
          }
          @keyframes textFadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      
      <div 
        className={`fixed inset-0 z-[99999] bg-navy flex items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
          fade ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Typography Reveal */}
          <div className="flex overflow-hidden px-4 pb-4">
            {'MAHADEVA'.split('').map((char, i) => (
              <span 
                key={i} 
                className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                style={{ 
                  display: 'inline-block',
                  animation: `letterReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s forwards`,
                  transform: 'translateY(110%) rotate(5deg)',
                  opacity: 0,
                  textShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Subtitle Reveal */}
          <div 
            className="w-full flex items-center justify-center mt-2 space-x-6" 
            style={{ 
              animation: 'textFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards',
              opacity: 0 
            }}
          >
            <div className="h-[2px] bg-primary/50 w-12 sm:w-24 rounded-full"></div>
            <span className="text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.5em]">
              Signature Fleet
            </span>
            <div className="h-[2px] bg-primary/50 w-12 sm:w-24 rounded-full"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PreloaderTwo;
