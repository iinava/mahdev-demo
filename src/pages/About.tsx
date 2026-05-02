import React from 'react';
import Layout from '../components/Layout';
import { Star, ShieldCheck, Users, Globe, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="bg-light-bg py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-32 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] inline-block">
              Our Journey
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-navy leading-[0.95] tracking-tighter">
              The Art of <br /> <span className="text-primary italic">Travel</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-bold max-w-xl mx-auto lg:mx-0">
              For over a decade, we've been crafting experiences that go beyond the ordinary, transforming simple trips into lifelong memories.
            </p>
          </div>
          <div className="relative group">
            <div className="rounded-[48px] overflow-hidden shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" alt="About Us" className="w-full h-[600px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-10 rounded-[40px] shadow-2xl space-y-3 max-w-[320px] z-20 border border-gray-50">
               <p className="text-6xl font-black text-primary leading-none">12+</p>
               <p className="text-navy font-black text-xl tracking-tight">Years of Excellence</p>
               <p className="text-gray-400 text-sm font-medium leading-relaxed">Founded with a vision to redefine luxury and discovery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award className="text-primary" size={40} />, title: "Excellence Driven", desc: "We strive for perfection in every itinerary we create." },
              { icon: <ShieldCheck className="text-primary" size={40} />, title: "Trust & Safety", desc: "Your safety and security are our top priorities." },
              { icon: <Heart className="text-primary" size={40} />, title: "Client First", desc: "We believe in building relationships, not just transactions." },
            ].map((item, i) => (
              <div key={i} className="space-y-6 p-10 rounded-[40px] bg-light-bg border border-white hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Mission & <span className="text-primary">Vision</span></h2>
                  <div className="h-1.5 w-24 bg-primary rounded-full" />
                </div>
                
                <div className="space-y-8">
                   <div className="space-y-2">
                      <h4 className="text-primary font-bold text-xl uppercase tracking-widest">Our Mission</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">To provide world-class travel services that inspire and delight, ensuring every traveler returns with a heart full of memories and a soul recharged.</p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-primary font-bold text-xl uppercase tracking-widest">Our Vision</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">To be India's most preferred choice for premium travel, known for our integrity, innovation, and unparalleled customer service.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="bg-white/5 p-6 rounded-3xl">
                      <p className="text-4xl font-bold text-primary mb-1">50+</p>
                      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Destinations</p>
                   </div>
                   <div className="bg-white/5 p-6 rounded-3xl">
                      <p className="text-4xl font-bold text-primary mb-1">10k+</p>
                      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Happy Clients</p>
                   </div>
                </div>
             </div>
             
             <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-4">
                      <div className="rounded-3xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                      <div className="rounded-3xl overflow-hidden aspect-[3/4]"><img src="https://images.unsplash.com/photo-1544735049-71789c640e2b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                   </div>
                   <div className="space-y-4 pt-12">
                      <div className="rounded-3xl overflow-hidden aspect-[3/4]"><img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                      <div className="rounded-3xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US REPEATED BUT STYLIZED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Meet The <span className="text-primary italic">Founders</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
             <div className="space-y-6 group">
                <div className="aspect-[4/5] bg-light-bg rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-2xl font-bold text-navy">Mahavir Shah</h4>
                   <p className="text-primary font-bold uppercase tracking-widest text-xs">CEO & Founder</p>
                </div>
             </div>
             <div className="space-y-6 group">
                <div className="aspect-[4/5] bg-light-bg rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-2xl font-bold text-navy">Jai Parikh</h4>
                   <p className="text-primary font-bold uppercase tracking-widest text-xs">Managing Director</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
