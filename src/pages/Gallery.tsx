import React from 'react';
import Layout from '../components/Layout';
import { Camera, MapPin, ZoomIn } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

import { GALLERY_CONFIG } from '../config/gallery';

const Gallery: React.FC = () => {
  const images = GALLERY_CONFIG.images;

  return (
    <Layout>
      {/* FUN GALLERY HEADER */}
      <section className="bg-gradient-to-b from-[#FFF5F8] to-white pt-28 pb-10 text-center relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
        {/* Playful blobs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-5 mt-8">
          <div className="inline-block bg-white px-5 py-1.5 rounded-full shadow-md transform rotate-2 hover:rotate-0 transition-transform">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <span>📸</span> Picture Perfect
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.05] tracking-tighter">
            Our Travel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 relative inline-block">
              Memories!
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-bold leading-relaxed pt-2">
            A collection of smiles, breathtaking views, and unforgettable moments from our recent adventures.
          </p>
        </div>
      </section>

      {/* FUN POLAROID GRID */}
      <section className="pb-32 bg-white px-4 md:px-8 pt-8">
        <div className="max-w-7xl mx-auto">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {images.map((img, i) => {
                // Randomly rotate items slightly
                const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-3', '-rotate-3'];
                const rotation = rotations[i % rotations.length];
                
                return (
                  <div key={i} className={`break-inside-avoid transform ${rotation} hover:rotate-0 hover:z-10 transition-all duration-300 hover:scale-105`}>
                    <div className="bg-white p-4 pb-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 group relative">
                       {/* Tape effect */}
                       <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm transform -rotate-2 z-20 opacity-70"></div>
                       
                       <div className="overflow-hidden rounded-lg relative bg-gray-100">
                         <OptimizedImage 
                           src={img.url} 
                           alt={img.title} 
                           className="w-full h-auto object-cover" 
                         />
                         <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                           <ZoomIn className="text-white w-10 h-10" />
                         </div>
                       </div>
                       
                       <div className="absolute bottom-4 left-0 w-full text-center px-4">
                          <h3 className="text-lg font-black text-navy font-serif italic">{img.title}</h3>
                       </div>
                    </div>
                  </div>
                );
              })}
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
