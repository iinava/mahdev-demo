import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PACKAGES } from '../constants';
import { Clock, ArrowRight } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Packages: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* FUN TRAVEL HEADER */}
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white pt-28 pb-10 text-center relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
        {/* Playful blobs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-5 mt-8">
          <div className="inline-block bg-white px-5 py-1.5 rounded-full shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <span>🚌</span> Choose Your Vibe
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.05] tracking-tighter">
            Find Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400 relative inline-block">
              Dream Getaway!
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-bold leading-relaxed pt-2">
            Unpack your bags and leave the rest to us. It's time to make some unforgettable memories.
          </p>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="py-16 md:py-24 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-[3px] border-gray-50 group flex flex-col h-full relative">
                


                <div className="relative h-72 overflow-hidden m-3 rounded-[2rem]">
                  <OptimizedImage 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" 
                  />

                </div>
                
                <div className="px-8 pb-8 pt-4 flex flex-col flex-grow space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-navy group-hover:text-primary transition-colors leading-tight">{pkg.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        <Clock size={14} className="text-primary" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm font-medium line-clamp-3 leading-relaxed flex-grow">
                    {pkg.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/package-details?id=${pkg.id}`}
                      className="w-full bg-navy text-white px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-primary/30"
                    >
                      <span>Explore</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FUN TRUST BANNER */}
      <section className="py-16 bg-[#F0F7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-10 md:p-16 relative shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white">Why Travel With Us? 🎒</h2>
              <p className="text-blue-100 text-lg font-medium max-w-lg">Because life is short and the world is wide! Join thousands of happy travelers on the journey of a lifetime.</p>
            </div>
            
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
               <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center transform rotate-3 hover:rotate-0 transition-transform w-32 h-32">
                 <span className="text-3xl mb-2">⭐</span>
                 <span className="font-black text-navy text-xl">4.9/5</span>
                 <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Rating</span>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform w-32 h-32">
                 <span className="text-3xl mb-2">🌍</span>
                 <span className="font-black text-navy text-xl">50+</span>
                 <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Locations</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
