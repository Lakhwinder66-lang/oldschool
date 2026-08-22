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
    <section id="services" className="py-20 px-4 sm:px-8 md:px-12 relative bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Core Programs & Disciplines</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 uppercase tracking-tight font-display">
              Six Elite Pillars
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light max-w-xl">
              Strength biomechanics, high-intensity cardio, group aerobics, dance, certified dietetics, and tailored personal coaching.
            </p>
          </div>

          <button
            onClick={() => onOpenPassModal('General Full Access')}
            className="bg-red-600 text-white hover:bg-red-700 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 self-start md:self-auto flex items-center gap-2 shadow-[0_4px_20px_rgba(220,38,38,0.25)]"
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
                  ? 'bg-red-600 text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]'
                  : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 border border-zinc-200'
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
              className="bg-white border border-zinc-200 hover:border-red-500/50 rounded-[32px] p-7 flex flex-col justify-between group transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:border-red-600 transition-all">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="bg-zinc-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 border border-zinc-200">
                      {service.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-left mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900 font-display uppercase tracking-tight group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed mb-5 text-left">
                  {service.description}
                </p>

                {/* Bullet features */}
                <div className="space-y-2 mb-5 text-left">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Specialist chip */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 mb-5 text-[11px] text-left">
                  <span className="text-zinc-400 uppercase tracking-widest text-[9px] font-bold block mb-0.5">Specialist:</span>
                  <span className="text-zinc-900 font-semibold">{service.trainerSpecialist}</span>
                </div>
              </div>

              {/* Editorial Actions */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-zinc-200">
                <button
                  onClick={() => setSelectedService(service)}
                  className="editorial-btn-glass py-2.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 hover:text-red-600 flex items-center justify-center gap-1 border border-zinc-200"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>

                <button
                  onClick={() => onOpenPassModal(service.title)}
                  className="editorial-btn-accent py-2.5 px-3 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Trial</span>
                  <Sparkles className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Modal for Selected Service */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white max-w-2xl w-full rounded-[36px] overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-zinc-900">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-200 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                      {getServiceIcon(selectedService.id)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                      {selectedService.category} · {selectedService.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase font-display">
                    {selectedService.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 hover:bg-zinc-200 transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="py-6 space-y-6 text-left">
                <p className="text-sm text-zinc-700 leading-relaxed font-light">
                  {selectedService.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-red-600 font-bold mb-3">
                    Training Protocols & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 bg-zinc-50 p-3 rounded-2xl border border-zinc-200 text-xs text-zinc-800">
                        <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Gear */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-2.5">
                    Specialized Equipment
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.equipment.map((eq, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-medium">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mentor / Specialist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">Specialist</span>
                    <span className="text-xs font-bold text-zinc-900 mt-0.5 block">{selectedService.trainerSpecialist}</span>
                  </div>
                  <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">Target Focus</span>
                    <span className="text-xs font-bold text-red-600 mt-0.5 block">{selectedService.idealFor}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-zinc-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="editorial-btn-glass px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 border border-zinc-200"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onOpenPassModal(title);
                    }}
                    className="bg-red-600 text-white hover:bg-red-700 px-7 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 shadow-[0_4px_16px_rgba(220,38,38,0.25)]"
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
