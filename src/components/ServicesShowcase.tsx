import React, { useState } from 'react';
import { Dumbbell, HeartPulse, Sparkles, Music2, Apple, UserCheck, Check, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/gymData';
import { ServiceItem } from '../types';

interface ServicesShowcaseProps {
  onOpenPassModal: (serviceName?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenPassModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 6 Pillars' },
    { id: 'strength', label: 'Strength' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'aerobics', label: 'Aerobics' },
    { id: 'dance', label: 'Dance Classes' },
    { id: 'diet', label: 'Diet Consultant' },
    { id: 'pt', label: 'Personal Training' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.id === activeCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'strength': return <Dumbbell className="w-4 h-4" />;
      case 'cardio': return <HeartPulse className="w-4 h-4" />;
      case 'aerobics': return <Sparkles className="w-4 h-4" />;
      case 'dance': return <Music2 className="w-4 h-4" />;
      case 'diet': return <Apple className="w-4 h-4" />;
      case 'pt': return <UserCheck className="w-4 h-4" />;
      default: return <Dumbbell className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
              <span>Core Programs & Disciplines</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display">
              Six Elite Pillars
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-xl">
              Strength biomechanics, high-intensity cardio, group aerobics, dance, certified dietetics, and tailored personal coaching.
            </p>
          </div>

          <button
            onClick={() => onOpenPassModal('General Full Access')}
            className="bg-white text-black hover:bg-[#F27D26] hover:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 self-start md:self-auto flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            <span>Book Free Trial</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-black transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Services Grid with Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white/5 border border-white/10 hover:border-[#F27D26]/40 backdrop-blur-xl rounded-[32px] overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-black/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 border border-white/15">
                    {getServiceIcon(service.id)}
                    <span>{service.tag}</span>
                  </span>
                </div>

                {/* Index Numeral */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#F27D26] border border-white/10">
                  0{idx + 1}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-3.5 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#F27D26] font-bold block mb-0.5">
                    {service.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specialist chip */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mb-5 text-[11px]">
                    <span className="text-white/40 uppercase tracking-widest text-[9px] font-bold block mb-0.5">Specialist:</span>
                    <span className="text-white font-semibold">{service.trainerSpecialist}</span>
                  </div>
                </div>

                {/* Editorial Actions */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="editorial-btn-glass py-2.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider text-white hover:text-white flex items-center justify-center gap-1"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                  </button>

                  <button
                    onClick={() => onOpenPassModal(service.title)}
                    className="editorial-btn-accent py-2.5 px-3 rounded-full text-[10px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-1"
                  >
                    <span>Trial</span>
                    <Sparkles className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Modal for Selected Service */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
            <div className="bg-[#0c0c0e] max-w-2xl w-full rounded-[36px] overflow-hidden border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto">
              
              {/* Modal Image Banner */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-5 left-6 right-6 text-left">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F27D26] block mb-1">
                    {selectedService.category} · {selectedService.tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  {selectedService.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#F27D26] font-bold mb-3">
                    Training Protocols & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white/5 p-3 rounded-2xl border border-white/5 text-xs text-white">
                        <Check className="w-4 h-4 text-[#F27D26] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Gear */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-2.5">
                    Specialized Equipment
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.equipment.map((eq, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mentor / Specialist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold">Specialist</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{selectedService.trainerSpecialist}</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold">Target Focus</span>
                    <span className="text-xs font-bold text-[#F27D26] mt-0.5 block">{selectedService.idealFor}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="editorial-btn-glass px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onOpenPassModal(title);
                    }}
                    className="bg-white text-black hover:bg-[#F27D26] hover:text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Claim Free Pass</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
