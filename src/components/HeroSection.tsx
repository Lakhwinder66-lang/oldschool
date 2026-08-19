import React from 'react';
import { Star, MapPin, Clock, ShieldCheck, Sparkles, Navigation, Phone, Award, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { QuickActionCluster } from './QuickActionCluster';

interface HeroSectionProps {
  onOpenPassModal: () => void;
  onOpenDirections: () => void;
  onOpenReviewModal: () => void;
  onOpenShareModal: () => void;
  onOpenPhotosModal: (category?: 'all' | 'outside') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPassModal,
  onOpenDirections,
  onOpenReviewModal,
  onOpenShareModal,
  onOpenPhotosModal,
}) => {
  return (
    <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-8 md:px-12 overflow-hidden">
      
      {/* Editorial Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F27D26] rounded-full opacity-10 blur-[120px] -mr-32 -mt-32 pointer-events-none animate-ambient-1" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full opacity-5 blur-[100px] -ml-24 -mb-24 pointer-events-none animate-ambient-2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Editorial Headline & Content) */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            
            {/* Editorial Eyebrow Tag */}
            <div className="mb-6 flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#F27D26] shadow-[0_0_25px_rgba(242,125,38,0.5)] flex-shrink-0 bg-black">
                <img
                  src="/src/assets/images/gym_official_logo_1787145333528.jpg"
                  alt="Old Skoool Gym Official Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F27D26] inline-block animate-pulse"></span>
                  <span className="text-[#F27D26] text-xs font-black tracking-[0.35em] uppercase">
                    Official Fitness Studio · Firozpur
                  </span>
                </div>
                <div className="text-[11px] text-white/50 font-mono mt-0.5">
                  Gobind Nagri Road, Model Town
                </div>
              </div>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[110px] xl:text-[120px] font-black leading-[0.88] tracking-tighter uppercase font-display select-none">
              <span className="block text-white">Old</span>
              <span className="block text-stroke-editorial text-transparent">Skoool</span>
              <span className="block text-white">Gym</span>
            </h1>

            {/* Editorial High-Fashion Subtitle */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#F5F5F5]/70 max-w-xl font-light leading-relaxed">
              Firozpur's elite destination for physical excellence. Strength training, cardio rigs, specialized aerobics, and diet consultancy in a high-performance environment.
            </p>

            {/* Editorial CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                id="hero-start-training-btn"
                onClick={onOpenPassModal}
                className="bg-white text-black hover:bg-[#F27D26] hover:text-white px-8 sm:px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.15)] flex items-center gap-2"
              >
                <span>Start Training</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-free-tour-btn"
                onClick={() => onOpenPhotosModal('all')}
                className="bg-white/5 hover:bg-white/15 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white px-8 sm:px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2"
              >
                <span>Free Tour</span>
              </button>
            </div>

            {/* Editorial Quick Actions Bar */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <QuickActionCluster
                onOpenDirections={onOpenDirections}
                onOpenReviewModal={onOpenReviewModal}
                onOpenShareModal={onOpenShareModal}
                onOpenPhotosModal={onOpenPhotosModal}
              />
            </div>

            {/* Owners Quick Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Owners & Coaches:</span>
              <a
                href="https://www.instagram.com/_getfitwithanjali?igsh=NTNzcWIzMmpsNmh1&igsi=NTNzcWIzMmpsNmh1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#F27D26]/20 border border-white/10 hover:border-[#F27D26]/40 px-3.5 py-1.5 rounded-full text-white/90 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></span>
                <span className="font-bold">Anjali</span>
                <span className="text-[10px] text-white/50">(Aerobics & Nutrition) · 70872-85367</span>
              </a>

              <a
                href="https://www.instagram.com/satnam_sodhi_oldskooolgym?igsh=MXd2c2lzeHFsZWVmZw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#F27D26]/20 border border-white/10 hover:border-[#F27D26]/40 px-3.5 py-1.5 rounded-full text-white/90 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></span>
                <span className="font-bold">Satnam Singh</span>
                <span className="text-[10px] text-white/50">(PT & Nutrition) · 8544834372</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Stat & Information Pillars */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-6">
            
            {/* 5.07 Google Reviews Block */}
            <div 
              onClick={onOpenReviewModal}
              className="cursor-pointer group text-left lg:text-right space-y-1 bg-white/5 border border-white/10 hover:border-[#F27D26]/40 backdrop-blur-xl p-6 rounded-3xl w-full sm:w-72 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="text-4xl sm:text-5xl font-black italic tracking-tight text-white font-display">
                5.07
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
                Google Reviews Verified
              </div>
              <div className="flex items-center lg:justify-end space-x-1 text-[#F27D26] pt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <div className="text-[10px] text-white/40 pt-1 font-mono">
                + Justdial 5/5 (18 Votes)
              </div>
            </div>

            {/* Current Status Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl w-full sm:w-72 text-left shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="text-[10px] uppercase tracking-widest text-[#F27D26] mb-2 font-bold flex items-center justify-between">
                <span>Current Status</span>
                <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-ping"></span>
              </div>
              <div className="text-xl font-black text-white font-display">Open Now</div>
              <div className="text-xs text-white/50 mt-0.5">Closes at 10:00 PM tonight</div>
            </div>

            {/* Location Card */}
            <div 
              onClick={onOpenDirections}
              className="bg-white/5 border border-white/10 hover:border-[#F27D26]/40 backdrop-blur-xl p-6 rounded-3xl w-full sm:w-72 text-left cursor-pointer transition-all shadow-[0_15px_40px_rgba(0,0,0,0.6)] group"
            >
              <div className="text-[10px] uppercase tracking-widest text-[#F27D26] mb-2 font-bold flex items-center justify-between">
                <span>Location</span>
                <Navigation className="w-3.5 h-3.5 text-white/60 group-hover:text-[#F27D26] transition-colors" />
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-snug font-medium">
                Gobind Nagri Road,<br/>
                Industrial Area, Model Town,<br/>
                Firozpur, Punjab 152001
              </div>
              <div className="text-[10px] text-[#F27D26] font-mono mt-2 flex items-center gap-1 font-bold">
                <span>9 min drive from City Centre →</span>
              </div>
            </div>

          </div>

        </div>

        {/* Editorial Photo Showcase Strip */}
        <div className="mt-14 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-44 rounded-2xl overflow-hidden group border border-white/10">
            <img
              src="/src/assets/images/gym_interior_hero_1787135615190.jpg"
              alt="Main Strength Floor"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold block">01 / Strength</span>
              <span className="text-xs font-bold text-white">Heavy Iron Racks</span>
            </div>
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden group border border-white/10">
            <img
              src="/src/assets/images/dance_aerobics_studio_1787135655760.jpg"
              alt="Aerobics & Dance Floor"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold block">02 / Aerobics</span>
              <span className="text-xs font-bold text-white">Dance & Cardio Movement</span>
            </div>
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden group border border-white/10">
            <img
              src="/src/assets/images/gym_outside_entrance_1787135697669.jpg"
              alt="Gym Outside Entrance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold block">03 / Model Town</span>
              <span className="text-xs font-bold text-white">Gobind Nagri Road Entrance</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
