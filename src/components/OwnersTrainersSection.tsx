import React from 'react';
import { Phone, MessageCircle, Instagram, ShieldCheck, Award, ArrowUpRight, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_OWNERS } from '../data/gymData';

interface OwnersTrainersSectionProps {
  onOpenPassModal: (serviceName?: string) => void;
}

export const OwnersTrainersSection: React.FC<OwnersTrainersSectionProps> = ({ onOpenPassModal }) => {
  return (
    <section id="trainers" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
            <span>Ownership & Master Coaching</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display">
            Meet the Founders & Head Trainers
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-2xl">
            Certified fitness & nutrition leadership directly guiding your transformation at Old Skoool Gym, Model Town, Firozpur.
          </p>
        </div>

        {/* 2 Big Editorial Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {GYM_OWNERS.map((owner) => {
            const isAnjali = owner.id === 'anjali';
            return (
              <div
                key={owner.id}
                className="bg-white/5 border border-white/10 hover:border-[#F27D26]/40 backdrop-blur-xl rounded-[36px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group text-left"
              >
                {/* Ambient glow in card background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27D26] rounded-full opacity-5 blur-[90px] pointer-events-none group-hover:opacity-10 transition-opacity" />

                <div>
                  {/* Top Badges & Role */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-[#F27D26] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          {owner.role}
                        </span>
                        <span className="bg-white/5 border border-white/10 text-white/70 text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-[#F27D26]" />
                          <span>Certified Master</span>
                        </span>
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight mt-2 group-hover:text-[#F27D26] transition-colors">
                        {owner.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#F27D26] mt-1 font-mono uppercase tracking-wider">
                        {owner.designation}
                      </p>
                    </div>

                    {/* Instagram Quick Link Pill Top Right */}
                    <a
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10 hover:border-transparent p-3 rounded-2xl text-white transition-all duration-300 shadow-md group/ig flex items-center gap-2"
                      title={`Follow ${owner.name} on Instagram`}
                    >
                      <Instagram className="w-5 h-5 text-[#F27D26] group-hover/ig:text-white transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">
                        {owner.instagramHandle}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover/ig:text-white" />
                    </a>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6">
                    {owner.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mb-8">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-2.5">
                      Specializations & Certifications
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {owner.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="bg-white/5 border border-white/10 text-white/80 text-[11px] px-3 py-1.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Direct Contact:</span>
                      <a
                        href={`tel:${owner.phoneRaw}`}
                        className="font-mono text-white font-bold hover:text-[#F27D26] transition-colors"
                      >
                        {owner.phone}
                      </a>
                    </div>

                    <a
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#F27D26] hover:underline font-mono"
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
                      className="editorial-btn-glass py-3 px-3 rounded-full text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Call Now</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      id={`whatsapp-trainer-${owner.id}`}
                      href={`https://wa.me/${owner.whatsapp}?text=Hi%20${encodeURIComponent(owner.name)}%2C%20I%20visited%20the%20Old%20Skoool%20Gym%20website%20and%20would%20like%20to%20consult%20regarding%20training%20and%20diet.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-300 hover:text-white py-3 px-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Instagram Button */}
                    <a
                      id={`instagram-trainer-${owner.id}`}
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] border border-white/20 text-white py-3 px-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Consultation Callout */}
        <div className="mt-10 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F27D26]/20 border border-[#F27D26]/30 text-[#F27D26] flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase font-display">
                Personal Consultation with Anjali & Satnam Singh
              </h4>
              <p className="text-xs text-white/60 mt-0.5">
                Book a 1-on-1 fitness induction, body fat assessment, and personalized diet outline directly with the gym owners.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenPassModal('Owner 1-on-1 Consultation')}
            className="w-full sm:w-auto bg-white text-black hover:bg-[#F27D26] hover:text-white py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
