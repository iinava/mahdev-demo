import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

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
      <section className="bg-light-bg py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-24" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-4">
           <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.1] tracking-tight">Let's <span className="text-primary italic">Connect</span></h1>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">Have a question or ready to plan your trip? Reach out to us and we'll get back to you sooner than you think.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Info */}
              <div className="space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-navy">Corporate <span className="text-primary">Office</span></h2>
                    <p className="text-gray-500 max-w-md leading-relaxed">Visit our luxury experience center to discuss your travel plans in person over a cup of premium coffee.</p>
                 </div>

                 <div className="space-y-8">
                    {[
                       { icon: <MapPin className="text-primary" />, title: "Address", content: "123 Travel Plaza, Luxury Sector, Mumbai, India" },
                       { icon: <Phone className="text-primary" />, title: "Call Us", content: "+91 98765 43210" },
                       { icon: <Mail className="text-primary" />, title: "Email", content: "contact@jaimahavirtours.com" },
                       { icon: <Clock className="text-primary" />, title: "Timing", content: "Mon - Sat: 10:00 AM - 7:00 PM" },
                    ].map((item, i) => (
                       <div key={i} className="flex items-start space-x-6">
                          <div className="bg-light-bg p-4 rounded-2xl flex-shrink-0">
                             {item.icon}
                          </div>
                          <div>
                             <h4 className="font-bold text-navy text-sm uppercase tracking-widest text-primary">{item.title}</h4>
                             <p className="text-lg font-medium text-navy mt-1">{item.content}</p>
                          </div>
                       </div>
                    ))}
                 </div>

                 <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 flex items-center justify-between gap-6">
                    <div>
                       <h4 className="font-bold text-navy">Prefer Direct Chat?</h4>
                       <p className="text-sm text-gray-500">Instant response on WhatsApp</p>
                    </div>
                    <a 
                      href={getWhatsAppLink('Hi JAI Mahavir Tours, I want to talk to an expert.')}
                      className="bg-[#25D366] text-white p-4 rounded-2xl shadow-lg hover:bounce transition-all"
                    >
                       <MessageCircle size={32} />
                    </a>
                 </div>
              </div>

              {/* Form */}
              <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50">
                 <h2 className="text-3xl font-bold text-navy mb-8">Quick <span className="text-primary">Enquiry</span></h2>
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                          <input 
                            name="name"
                            required
                            type="text" 
                            className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                            placeholder="John Doe" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                          <input 
                            name="email"
                            required
                            type="email" 
                            className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                            placeholder="john@example.com" 
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                       <input 
                         name="subject"
                         required
                         type="text" 
                         className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                         placeholder="Enquiry for Dubai Tour" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                       <textarea 
                        name="message"
                        required
                        rows={4} 
                        className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        placeholder="Tell us about your travel plans..." 
                       />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/30 flex items-center justify-center space-x-3"
                    >
                       <span>Submit Enquiry</span>
                       <Send size={24} />
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-light-bg py-4 px-4 sm:px-6">
         <div className="max-w-7xl mx-auto h-[400px] rounded-[40px] overflow-hidden grayscale relative border-8 border-white">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
               <div className="bg-white p-6 rounded-3xl shadow-2xl space-y-2 text-center border-4 border-primary">
                  <MapPin className="mx-auto text-primary" size={32} />
                  <p className="font-black text-navy">Visit Our Office</p>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Contact;
