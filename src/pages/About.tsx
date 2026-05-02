import React from 'react';
import Layout from '../components/Layout';
import { Star, ShieldCheck, Users, Globe, Award, Heart } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

import { ABOUT_CONFIG } from '../config/about';

import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <Layout>
      {/* MINIMAL HERO */}
      <section className="bg-white pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">{ABOUT_CONFIG.journey.badge}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tight">
              {ABOUT_CONFIG.journey.title} <span className="text-primary italic font-serif">{ABOUT_CONFIG.journey.titleAccent}</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {ABOUT_CONFIG.journey.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES - CLEAN GRID */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Award className="text-primary" size={24} />, ...ABOUT_CONFIG.values[0] },
              { icon: <ShieldCheck className="text-primary" size={24} />, ...ABOUT_CONFIG.values[1] },
              { icon: <Heart className="text-primary" size={24} />, ...ABOUT_CONFIG.values[2] },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION - RESTRAINED SPLIT */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-24">
            <div className="space-y-6 text-center">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">{ABOUT_CONFIG.missionVision.mission.title}</h4>
              <p className="text-2xl md:text-3xl font-medium text-navy leading-relaxed">
                {ABOUT_CONFIG.missionVision.mission.content}
              </p>
            </div>
            <div className="space-y-6 text-center">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">{ABOUT_CONFIG.missionVision.vision.title}</h4>
              <p className="text-2xl md:text-3xl font-medium text-navy leading-relaxed">
                {ABOUT_CONFIG.missionVision.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS - QUIET ROW */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-12">
            {[
              { value: ABOUT_CONFIG.journey.stats.years, label: ABOUT_CONFIG.journey.stats.label },
              ...ABOUT_CONFIG.missionVision.stats
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-4xl font-bold text-navy">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS - MINIMAL CARDS */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl font-bold text-navy">{ABOUT_CONFIG.founders.title} <span className="text-primary italic font-serif">{ABOUT_CONFIG.founders.titleAccent}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {ABOUT_CONFIG.founders.list.map((founder, i) => (
              <div key={i} className="group space-y-6">
                <OptimizedImage 
                  src={founder.image} 
                  alt={founder.name} 
                  aspectRatio="aspect-[4/5]" 
                  className="rounded-2xl shadow-sm transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-navy">{founder.name}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINIMAL CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl font-bold text-navy leading-tight">
            Interested in planning your next trip with Jai Mahavir?
          </h2>
          <a 
            href="/contact.html" 
            className="inline-block px-10 py-4 border-2 border-navy text-navy font-bold text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-all rounded-full"
          >
            Get in touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
