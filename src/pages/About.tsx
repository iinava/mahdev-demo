import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import OptimizedImage from '../components/OptimizedImage';
import { MessageCircle } from 'lucide-react';
import { ABOUT_CONFIG } from '../config/about';
import { getWhatsAppLink } from '../constants';
import { SITE_CONFIG } from '../config/site';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* FUN HEADER – matching Gallery style */}
      <section className="bg-gradient-to-b from-[#FFF5F8] to-white pt-28 pb-10 text-center relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
        {/* Playful blobs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-5 mt-8">
          <div className="inline-block bg-white px-5 py-1.5 rounded-full shadow-md transform rotate-2 hover:rotate-0 transition-transform">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <span>✈️</span> {ABOUT_CONFIG.journey.badge}
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.05] tracking-tighter">
            {ABOUT_CONFIG.journey.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 relative inline-block">
              {ABOUT_CONFIG.journey.titleAccent}!
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-bold leading-relaxed pt-2">
            {ABOUT_CONFIG.journey.description}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { value: ABOUT_CONFIG.journey.stats.years, label: ABOUT_CONFIG.journey.stats.label, emoji: '🏆' },
              { value: ABOUT_CONFIG.missionVision.stats[0].value, label: ABOUT_CONFIG.missionVision.stats[0].label, emoji: '🗺️' },
              { value: ABOUT_CONFIG.missionVision.stats[1].value, label: ABOUT_CONFIG.missionVision.stats[1].label, emoji: '😊' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#F9FBFF] rounded-[2rem] p-6 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <span className="text-3xl md:text-4xl block mb-3">{stat.emoji}</span>
                <p className="text-4xl md:text-6xl font-black text-navy">{stat.value}</p>
                <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">
              What We <span className="text-primary italic font-serif">Stand For</span> 💪
            </h2>
            <p className="text-gray-500 font-bold max-w-xl mx-auto">The principles guiding every trip we craft.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🏅', ...ABOUT_CONFIG.values[0] },
              { emoji: '🛡️', ...ABOUT_CONFIG.values[1] },
              { emoji: '🧭', ...ABOUT_CONFIG.values[2] },
            ].map((item, i) => {
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-1'];
              return (
                <div
                  key={i}
                  className={`bg-[#F9FBFF] p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform ${rotations[i]} hover:rotate-0 hover:scale-105 text-center space-y-5`}
                >
                  <span className="text-5xl block">{item.emoji}</span>
                  <h3 className="text-xl font-black text-navy">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy p-10 md:p-12 rounded-[3rem] space-y-5 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="text-xl">🎯</span> {ABOUT_CONFIG.missionVision.mission.title}
              </h4>
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif">
                "{ABOUT_CONFIG.missionVision.mission.content}"
              </p>
            </div>
            <div className="bg-[#F0F7FF] p-10 md:p-12 rounded-[3rem] space-y-5 border border-primary/10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="text-xl">🌟</span> {ABOUT_CONFIG.missionVision.vision.title}
              </h4>
              <p className="text-2xl md:text-3xl font-bold text-navy leading-relaxed font-serif">
                "{ABOUT_CONFIG.missionVision.vision.content}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-[#F9FBFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">
              {ABOUT_CONFIG.founders.title}{' '}
              <span className="text-primary italic font-serif">{ABOUT_CONFIG.founders.titleAccent}</span> 👋
            </h2>
            <p className="text-gray-500 font-bold max-w-md mx-auto">The people behind your perfect trip.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {ABOUT_CONFIG.founders.list.map((founder, i) => {
              const rotations = ['rotate-2', '-rotate-2'];
              return (
                <div key={i} className={`flex flex-col items-center space-y-4 transform ${rotations[i]} hover:rotate-0 transition-all duration-300 hover:scale-105`}>
                  <div className="bg-white p-3 pb-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm -rotate-2 z-20 opacity-70" />
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <OptimizedImage
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-3 left-0 w-full text-center px-3">
                      <h4 className="font-black text-navy text-sm font-serif italic">{founder.name}</h4>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em]">{founder.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Ready for your next <span className="text-primary italic font-serif">adventure?</span> 🚀
              </h2>
              <p className="text-white/60 font-bold text-lg max-w-xl">Let's plan something extraordinary, just for you.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppLink(`Hello ${SITE_CONFIG.name}, I'd like to plan a trip!`)}
                className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Chat with Us</span>
              </a>
              <Link
                to="/packages"
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
