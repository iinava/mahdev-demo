import React, { useState, useEffect } from 'react';
import { Bus } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Slightly longer to appreciate the bus journey

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-navy transition-opacity duration-700 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="relative w-full max-w-lg flex flex-col items-center">
        
        {/* Moving Bus Container */}
        <div className="relative w-full h-32 mb-8 overflow-hidden">
          {/* Animated Bus */}
          <div className="absolute bottom-4 animate-[drive_3s_linear_infinite] will-change-transform">
            <div className="relative">
              <Bus 
                size={56} 
                className="text-primary" 
              />
              {/* Exhaust/Speed effect */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 h-1 bg-primary/40 rounded-full animate-ping" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-primary/20 blur-sm rounded-full" />
            </div>
          </div>

          {/* Road Line with faster movement */}
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-white/5">
            <div className="flex w-[200%] animate-[road_0.8s_linear_infinite]">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="h-full w-6 bg-white/10 mr-6" />
              ))}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className={`text-center transition-all duration-1000 px-6 ${loading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-white font-black text-lg sm:text-2xl md:text-3xl tracking-tighter uppercase italic break-words max-w-xs sm:max-w-none">
            {SITE_CONFIG.name}
          </h2>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drive {
          from { left: -100px; }
          to { left: 100%; }
        }
        @keyframes road {
          from { transform: translateX(0); }
          to { transform: translateX(-48px); }
        }
      `}} />
    </div>
  );
};

export default Preloader;
