import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Plane, Calendar, Users, Wallet, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const CustomTour: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const message = `Hi! I want a custom tour:
- Destination: ${data.destination}
- Date: ${data.date}
- Travelers: ${data.travelers}
- Budget: ${data.budget}
- Notes: ${data.notes}`;
    window.location.href = getWhatsAppLink(message);
  };

  return (
    <Layout>
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block">
                 Bespoke Travel
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.1] tracking-tight">Design Your <br /> <span className="text-primary italic">Dream Trip</span></h1>
              <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                 Every traveler is different. If you don't find what you're looking for, let us build it for you. Your preferences, your pace, your world.
              </p>
              
              <div className="space-y-4 pt-4">
                 {[
                    "Hand-picked accommodations based on your style",
                    "Custom day-wise detailed itineraries",
                    "Dedicated travel specialists for planning",
                    "24/7 on-trip support assistance"
                 ].map((t, i) => (
                    <div key={i} className="flex items-center space-x-3">
                       <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Plane size={14} />
                       </div>
                       <span className="font-semibold text-navy/70">{t}</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-light-bg p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden border border-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-3xl font-bold text-navy mb-10">Trip <span className="text-primary">Planner</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                             <Plane size={14} className="text-primary" />
                             <span>Where to?</span>
                          </label>
                          <input 
                            name="destination"
                            required
                            type="text" 
                            className="w-full bg-white border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" 
                            placeholder="Destination (e.g. Iceland)" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                             <Calendar size={14} className="text-primary" />
                             <span>When?</span>
                          </label>
                          <input 
                            name="date"
                            required
                            type="text" 
                            className="w-full bg-white border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" 
                            placeholder="Date or Month" 
                          />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                             <Users size={14} className="text-primary" />
                             <span>How many?</span>
                          </label>
                          <input 
                            name="travelers"
                            required
                            type="number" 
                            className="w-full bg-white border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" 
                            placeholder="Travellers" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                             <Wallet size={14} className="text-primary" />
                             <span>Budget Approx?</span>
                          </label>
                          <select 
                            name="budget"
                            required
                            className="w-full bg-white border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm appearance-none"
                          >
                             <option value="">Select Range</option>
                             <option value="Economic">Economic (Standard)</option>
                             <option value="Premium">Premium (Upgraded)</option>
                             <option value="Luxury">Luxury (Ultra Premium)</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                          <FileText size={14} className="text-primary" />
                          <span>Special Notes / Preferences</span>
                       </label>
                       <textarea 
                        name="notes"
                        rows={4} 
                        className="w-full bg-white border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" 
                        placeholder="Tell us about your dream experience..." 
                       />
                    </div>
                 </div>

                 <button 
                   type="submit"
                   className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-secondary transition-all shadow-2xl shadow-primary/30 flex items-center justify-center space-x-4 group"
                 >
                    <span>Request Quotation</span>
                    <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                 </button>
                 
                 <p className="text-center text-gray-400 text-xs font-medium">
                    Redirects to WhatsApp for instant verification
                 </p>
              </form>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-navy rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1 space-y-6 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Need expert help?</h2>
                  <p className="text-gray-400 text-lg max-w-lg">Our travel planners are available to discuss your ideas over a call even before you decide to book.</p>
               </div>
               <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full lg:w-auto">
                  <a href="tel:+919876543210" className="bg-white text-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center space-x-3">
                     <Users size={24} className="text-primary" />
                     <span>Call Specialist</span>
                  </a>
                  <Link to="/about" className="text-white font-bold flex items-center justify-center space-x-2 hover:text-primary transition-colors">
                     <span>About Our Process</span>
                     <ArrowRight size={20} />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default CustomTour;
