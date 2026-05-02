import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { PACKAGES, getWhatsAppLink } from '../constants';
import { Search, Filter, Clock, ArrowRight, X } from 'lucide-react';

const Packages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredPackages, setFilteredPackages] = useState(PACKAGES);

  const categories = ['All', 'Domestic', 'International', 'Honeymoon', 'Family', 'Group', 'Pilgrimage'];

  useEffect(() => {
    // Check URL params for initial category or search
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    const search = params.get('search');
    if (cat && categories.includes(cat)) setActiveCategory(cat);
    if (search) setSearchTerm(search);
  }, []);

  useEffect(() => {
    let result = PACKAGES;
    
    if (activeCategory !== 'All') {
      result = result.filter(pkg => pkg.category === activeCategory);
    }
    
    if (searchTerm) {
      result = result.filter(pkg => 
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pkg.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPackages(result);
  }, [activeCategory, searchTerm]);

  return (
    <Layout>
      <section className="bg-white pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 border border-navy rounded-full translate-x-[-50%] translate-y-[-50%]" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] border border-navy rounded-full translate-x-[50%] translate-y-[50%]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-6">
          <div className="inline-block bg-primary/5 px-4 py-1.5 rounded-lg border border-primary/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Explore Our World</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-navy tracking-tight">Luxury <span className="text-primary italic font-serif">Escapes</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From hidden domestic gems to world-renowned international landmarks, discover journeys curated for the soul.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white sticky top-[68px] z-30 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-xs group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-xl text-navy text-sm font-semibold focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto w-full lg:w-auto space-x-2 pb-2 lg:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-navy text-white border-navy shadow-lg shadow-navy/10'
                      : 'bg-white text-gray-400 border-gray-100 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9FBFF] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 border border-gray-50 group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-lg text-[9px] font-bold text-primary shadow-sm uppercase tracking-widest">
                      {pkg.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors leading-tight">{pkg.title}</h3>
                      <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <div className="flex items-center space-x-1.5">
                          <Clock size={14} className="text-primary" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-xs font-medium line-clamp-2 leading-relaxed flex-grow">
                      {pkg.description}
                    </p>

                    <div className="pt-6 flex items-center justify-between border-t border-gray-50">
                      <div>
                        <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold mb-0.5">Starting At</p>
                        <p className="text-2xl font-bold text-navy">{pkg.price}</p>
                      </div>
                      <a
                        href={`/package-details.html?id=${pkg.id}`}
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-navy transition-all shadow-lg shadow-primary/10 active:scale-95 flex items-center space-x-2"
                      >
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 space-y-4">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-navy">No packages found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
                className="text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* WHY CHOOSE US - MINIMAL */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center text-primary font-bold">10+</div>
             <span className="font-bold text-navy">Years Exp</span>
          </div>
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center text-primary font-bold">24/7</div>
             <span className="font-bold text-navy">Support</span>
          </div>
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center text-primary font-bold">5k+</div>
             <span className="font-bold text-navy">Happy Souls</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
