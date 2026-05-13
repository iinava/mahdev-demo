import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, MessageCircle, Clock, Bus, Check } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import { SITE_CONFIG } from '../config/site';
import { VEHICLES } from '../config/vehicles';

const Contact: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const message = `Hi! My name is ${data.name}. I want to enquire about ${data.subject}.${selectedVehicle ? ` Preferred vehicle: ${selectedVehicle}.` : ''} My email is ${data.email}. Message: ${data.message}`;
    window.location.href = getWhatsAppLink(message);
  };

  return (
    <Layout>
      {/* FUN HEADER – matching Gallery style */}
      <section className="bg-gradient-to-b from-[#FFF5F8] to-white pt-28 pb-10 text-center relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
        {/* Playful blobs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-5 mt-8">
          <div className="inline-block bg-white px-5 py-1.5 rounded-full shadow-md transform -rotate-2 hover:rotate-0 transition-transform">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <span>💬</span> Get In Touch
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.05] tracking-tighter">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 relative inline-block">
              Connect!
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-bold leading-relaxed pt-2">
            Have a question or ready to plan your trip? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '📍', title: 'Address', content: SITE_CONFIG.contact.address, icon: <MapPin size={18} /> },
              { emoji: '📞', title: 'Call Us', content: SITE_CONFIG.contact.phone, icon: <Phone size={18} /> },
              { emoji: '✉️', title: 'Email', content: SITE_CONFIG.contact.email, icon: <Mail size={18} /> },
              { emoji: '🕐', title: 'Hours', content: SITE_CONFIG.contact.timing, icon: <Clock size={18} /> },
            ].map((item, i) => {
              const rotations = ['rotate-1', '-rotate-1', 'rotate-1', '-rotate-1'];
              return (
                <div
                  key={i}
                  className={`bg-[#F9FBFF] p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform ${rotations[i]} hover:rotate-0 hover:scale-105 space-y-3`}
                >
                  <span className="text-3xl block">{item.emoji}</span>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">{item.title}</p>
                  <p className="text-sm font-bold text-navy leading-relaxed">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - FORM + WHATSAPP */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-[#F9FBFF] p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-navy flex items-center gap-3">
                  <span className="text-4xl">📝</span> Quick Enquiry
                </h2>
                <p className="text-gray-500 font-bold text-sm">Fill in the form and we'll respond within the day!</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Full Name</label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-5 focus:border-primary outline-none transition-all font-bold shadow-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Email</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-5 focus:border-primary outline-none transition-all font-bold shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary">Subject</label>
                  <input
                    name="subject"
                    required
                    type="text"
                    className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-5 focus:border-primary outline-none transition-all font-bold shadow-sm"
                    placeholder="Enquiry for Goa Package"
                  />
                </div>

                {/* VEHICLE PICKER — Visual Cards */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Bus size={12} />
                    Choose Your Ride (Optional)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {VEHICLES.map((v) => {
                      const isSelected = selectedVehicle === v.name;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVehicle(isSelected ? '' : v.name)}
                          className={`relative rounded-2xl overflow-hidden aspect-square group transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'ring-3 ring-primary ring-offset-2 shadow-lg scale-[1.03]'
                              : 'ring-1 ring-gray-100 hover:ring-primary/30 hover:shadow-md'
                          }`}
                        >
                          <img
                            src={v.image}
                            alt={v.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 transition-all duration-300 ${
                            isSelected
                              ? 'bg-gradient-to-t from-primary/90 via-primary/30 to-transparent'
                              : 'bg-gradient-to-t from-navy/70 via-navy/10 to-transparent'
                          }`} />

                          {/* Selected checkmark */}
                          {isSelected && (
                            <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg">
                              <Check size={12} strokeWidth={3} className="text-white" />
                            </div>
                          )}

                          <div className="absolute bottom-1.5 left-1.5 right-1.5">
                            <p className={`font-black text-[10px] truncate ${isSelected ? 'text-white' : 'text-white/90'}`}>{v.name}</p>
                            <p className="text-white/50 text-[8px] font-bold">{v.capacity}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {selectedVehicle && (
                    <div className="flex items-center justify-between bg-primary/5 border border-primary/10 rounded-xl px-4 py-2">
                      <p className="text-xs font-black text-primary flex items-center gap-2">
                        <Bus size={14} />
                        {selectedVehicle} — {VEHICLES.find(v => v.name === selectedVehicle)?.nickname}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedVehicle('')}
                        className="text-[10px] font-black text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-5 focus:border-primary outline-none transition-all font-bold shadow-sm resize-none"
                    placeholder="Tell us about your dream trip..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95"
                >
                  Send via WhatsApp 🚀
                </button>
              </form>
            </div>

            {/* WhatsApp + Info */}
            <div className="space-y-6 flex flex-col">
              {/* WhatsApp CTA */}
              <div className="bg-navy p-10 rounded-[3rem] space-y-6 transform rotate-1 hover:rotate-0 transition-transform duration-500 flex-1">
                <span className="text-5xl block">💬</span>
                <h3 className="text-3xl font-black text-white">Prefer to Chat?</h3>
                <p className="text-white/60 font-bold leading-relaxed">
                  Skip the form! Drop us a message on WhatsApp and get a response instantly from our travel team.
                </p>
                <a
                  href={getWhatsAppLink(`Hello ${SITE_CONFIG.name}, I would like to plan a trip!`)}
                  className="inline-flex items-center space-x-3 bg-primary text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl active:scale-95"
                >
                  <MessageCircle size={22} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Call card */}
              <div className="bg-yellow-100 p-8 rounded-[2.5rem] space-y-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <span className="text-4xl block">📞</span>
                <h3 className="text-2xl font-black text-navy">Give us a Call!</h3>
                <p className="text-navy/60 font-bold text-sm">Prefer speaking directly? Our team is just a phone call away.</p>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center space-x-3 bg-navy text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95"
                >
                  <Phone size={18} />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
