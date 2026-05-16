import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import OptimizedImage from '../components/OptimizedImage';
import CoolShape from '../components/CoolShape';
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
        <CoolShape className="absolute top-1/4 -right-10 w-40 h-40 opacity-40 blur-[1px] animate-float pointer-events-none" />

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

      {/* OUR STORY & STATS - Match Home Layout */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block bg-[#F0F7FF] text-primary px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-primary/10">
                Our Roots
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tight">
                Proudly based in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00A3FF]">Calicut, Kerala.</span>
              </h2>
              
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                We are a passionate team of travel experts dedicated to curating the perfect journeys for you. From serene hill stations to vibrant beaches, our deep-rooted local expertise and vast network allow us to provide experiences that go beyond the ordinary.
              </p>
              
              {/* Feature List */}
              <div className="space-y-6 pt-4">
                {[
                  { title: "Comprehensive Tours", desc: "Domestic and international destinations perfectly tailored." },
                  { title: "Premium Fleet Services", desc: "Custom-engineered luxury vehicles for unmatched comfort." },
                  { title: "End-to-End Planning", desc: "From resorts and camping to sightseeing and tickets." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F7FF] group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                      <span className="font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="text-navy font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-[85%] md:w-[65%] lg:w-[70%] relative mt-8 lg:mt-0">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1691582583603-409757653634?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Journey"
                  className="rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] aspect-[4/5] w-full object-cover transform hover:scale-[1.02] transition-transform duration-700 relative z-10"
                />
                <CoolShape className="absolute -bottom-16 -left-16 w-48 h-48 opacity-90 -z-0 animate-[float_5s_ease-in-out_infinite] rotate-12 pointer-events-none" />
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-[radial-gradient(circle,#0057D91A_0%,transparent_70%)] pointer-events-none -z-10" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[radial-gradient(circle,#3B82F61A_0%,transparent_70%)] pointer-events-none -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE - Matching Home's bg-light-bg */}
      <section className="py-20 md:py-32 bg-light-bg relative overflow-hidden">
        <CoolShape className="absolute top-10 -right-10 w-64 h-64 opacity-20 -z-0 animate-[float_6s_ease-in-out_infinite] rotate-45 pointer-events-none" />
        <CoolShape className="absolute bottom-20 -left-10 w-48 h-48 opacity-20 -z-0 animate-float pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">
              What We <span className="text-primary">Provide</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto text-lg">The core pillars of our premium travel experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🏅', ...ABOUT_CONFIG.values[0] },
              { emoji: '🛡️', ...ABOUT_CONFIG.values[1] },
              { emoji: '🧭', ...ABOUT_CONFIG.values[2] },
            ].map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#F0F7FF] group-hover:bg-primary transition-colors duration-500 flex items-center justify-center text-3xl mb-8">
                    <span className="group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A3FF]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                Ready for your next <span className="text-primary italic font-serif">adventure?</span> 🚀
              </h2>
              <p className="text-white/60 font-medium text-lg max-w-xl">Let's plan something extraordinary, just for you. Get in touch to customize your journey.</p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={getWhatsAppLink(`Hello ${SITE_CONFIG.name}, I'd like to plan a trip!`)}
                className="bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center space-x-3 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>Chat with Us</span>
              </a>
              <Link
                to="/packages"
                className="bg-white/5 text-white border border-white/20 backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center"
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
