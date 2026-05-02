import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

import { SITE_CONFIG } from '../config/site';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const message = `Hi! My name is ${data.name}. I want to enquire about ${data.subject}. My email is ${data.email}. Message: ${data.message}`;
    window.location.href = getWhatsAppLink(message);
  };

  return (
    <Layout>
      <section className="bg-white pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
           <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tight">Let's <span className="text-primary italic font-serif">Connect</span></h1>
           <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">Have a question or ready to plan your trip? Reach out to us and we'll get back to you sooner than you think.</p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Contact Info */}
              <div className="space-y-16">
                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-navy uppercase tracking-tight">Corporate Office</h2>
                    <p className="text-gray-500 max-w-md leading-relaxed">Visit our experience center to discuss your travel plans in person.</p>
                 </div>

                 <div className="space-y-10">
                    {[
                       { icon: <MapPin className="text-primary" size={20} />, title: "Address", content: SITE_CONFIG.contact.address },
                       { icon: <Phone className="text-primary" size={20} />, title: "Call Us", content: SITE_CONFIG.contact.phone },
                       { icon: <Mail className="text-primary" size={20} />, title: "Email", content: SITE_CONFIG.contact.email },
                       { icon: <Clock className="text-primary" size={20} />, title: "Timing", content: SITE_CONFIG.contact.timing },
                    ].map((item, i) => (
                       <div key={i} className="flex items-start space-x-6">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                             {item.icon}
                          </div>
                          <div>
                             <h4 className="font-bold text-navy text-[10px] uppercase tracking-widest text-primary">{item.title}</h4>
                             <p className="text-lg font-medium text-navy mt-1">{item.content}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>


              {/* Form */}
              <div className="space-y-10">
                 <h2 className="text-2xl font-bold text-navy uppercase tracking-tight">Quick Enquiry</h2>
                 <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                          <input 
                            name="name"
                            required
                            type="text" 
                            className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-primary outline-none transition-all font-medium" 
                            placeholder="John Doe" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                          <input 
                            name="email"
                            required
                            type="email" 
                            className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-primary outline-none transition-all font-medium" 
                            placeholder="john@example.com" 
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                       <input 
                         name="subject"
                         required
                         type="text" 
                         className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-primary outline-none transition-all font-medium" 
                         placeholder="Enquiry for Dubai Tour" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                       <textarea 
                        name="message"
                        required
                        rows={4} 
                        className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-primary outline-none transition-all font-medium resize-none" 
                        placeholder="Tell us about your travel plans..." 
                       />
                    </div>
                    <button 
                      type="submit"
                      className="inline-block px-12 py-4 bg-navy text-white font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all rounded-full shadow-lg"
                    >
                       Send Message
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-24 px-6 bg-white">
         <div className="max-w-7xl mx-auto h-[400px] rounded-[32px] overflow-hidden grayscale relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Map Placeholder" />
            <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
               <div className="bg-white p-8 rounded-3xl shadow-xl space-y-2 text-center border border-gray-100">
                  <MapPin className="mx-auto text-primary" size={24} />
                  <p className="font-bold text-navy">Visit Our Office</p>
                  <p className="text-xs text-gray-400">{SITE_CONFIG.contact.address}</p>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Contact;
