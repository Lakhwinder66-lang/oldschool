import React from 'react';
import { Phone, MessageCircle, Instagram, ShieldCheck, Award, ArrowUpRight, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_OWNERS } from '../data/gymData';

interface OwnersTrainersSectionProps {
  onOpenPassModal: (serviceName?: string) => void;
}

export const OwnersTrainersSection: React.FC<OwnersTrainersSectionProps> = ({ onOpenPassModal }) => {
  return (
    <section id="trainers" className="py-20 px-4 sm:px-8 md:px-12 relative bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Ownership & Master Coaching</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 uppercase tracking-tight font-display">
            Meet the Founders & Head Trainers
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light max-w-2xl">
            Certified fitness & nutrition leadership directly guiding your transformation at Old Skoool Gym, Model Town, Firozpur.
          </p>
        </div>

        {/* 2 Big Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {GYM_OWNERS.map((owner) => {
            return (
              <div
                key={owner.id}
                className="bg-white border border-zinc-200 hover:border-red-500/50 rounded-[36px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden group text-left"
              >
                {/* Ambient glow in card background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full opacity-[0.03] blur-[90px] pointer-events-none group-hover:opacity-[0.06] transition-opacity" />

                <div>
                  {/* Top Badges & Role */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                          {owner.role}
                        </span>
                        <span className="bg-zinc-100 border border-zinc-200 text-zinc-700 text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-red-600" />
                          <span>Certified Master</span>
                        </span>
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase font-display tracking-tight mt-2 group-hover:text-red-600 transition-colors">
                        {owner.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-red-600 mt-1 font-mono uppercase tracking-wider">
                        {owner.designation}
                      </p>
                    </div>

                    {/* Instagram Quick Link Pill Top Right */}
                    <a
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-zinc-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-zinc-200 hover:border-transparent p-3 rounded-2xl text-zinc-800 hover:text-white transition-all duration-300 shadow-sm group/ig flex items-center gap-2"
                      title={`Follow ${owner.name} on Instagram`}
                    >
                      <Instagram className="w-5 h-5 text-red-600 group-hover/ig:text-white transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">
                        {owner.instagramHandle}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/ig:text-white" />
                    </a>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light mb-6">
                    {owner.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mb-8">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2.5">
                      Specializations & Certifications
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {owner.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="bg-zinc-50 border border-zinc-200 text-zinc-800 text-[11px] px-3 py-1.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="pt-6 border-t border-zinc-200 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Direct Contact:</span>
                      <a
                        href={`tel:${owner.phoneRaw}`}
                        className="font-mono text-zinc-900 font-bold hover:text-red-600 transition-colors"
                      >
                        {owner.phone}
                      </a>
                    </div>

                    <a
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-red-600 hover:underline font-mono font-medium"
                    >
                      {owner.instagramHandle}
                    </a>
                  </div>

                  {/* Action Buttons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {/* Call Phone */}
                    <a
                      id={`call-trainer-${owner.id}`}
                      href={`tel:${owner.phoneRaw}`}
                      className="editorial-btn-glass py-3 px-3 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-red-600 flex items-center justify-center gap-1.5 border border-zinc-200"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Call Now</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      id={`whatsapp-trainer-${owner.id}`}
                      href={`https://wa.me/${owner.whatsapp}?text=Hi%20${encodeURIComponent(owner.name)}%2C%20I%20visited%20the%20Old%20Skoool%20Gym%20website%20and%20would%20like%20to%20consult%20regarding%20training%20and%20diet.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 text-emerald-700 hover:text-white py-3 px-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Instagram Button */}
                    <a
                      id={`instagram-trainer-${owner.id}`}
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-50 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] border border-zinc-200 hover:border-transparent text-zinc-800 hover:text-white py-3 px-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <Instagram className="w-3.5 h-3.5 text-red-600" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Consultation Callout */}
        <div className="mt-10 bg-zinc-50 border border-zinc-200 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-200 text-red-600 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 uppercase font-display">
                Personal Consultation with Anjali & Satnam Singh
              </h4>
              <p className="text-xs text-zinc-600 mt-0.5">
                Book a 1-on-1 fitness induction, body fat assessment, and personalized diet outline directly with the gym owners.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenPassModal('Owner 1-on-1 Consultation')}
            className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(220,38,38,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
