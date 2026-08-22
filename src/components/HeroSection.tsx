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
    <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-8 md:px-12 overflow-hidden bg-white">
      
      {/* Ambient Red Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500 rounded-full opacity-[0.07] blur-[120px] -mr-32 -mt-32 pointer-events-none animate-ambient-1" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600 rounded-full opacity-[0.04] blur-[100px] -ml-24 -mb-24 pointer-events-none animate-ambient-2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Editorial Headline & Content) */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            
            {/* Editorial Eyebrow Tag */}
            <div className="mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse"></span>
              <span className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase">
                Premium Fitness Studio · Firozpur
              </span>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[110px] xl:text-[120px] font-black leading-[0.88] tracking-tighter uppercase font-display select-none">
              <span className="block text-zinc-950">Old</span>
              <span className="block text-stroke-accent text-transparent">Skoool</span>
              <span className="block text-zinc-950">Gym</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-600 max-w-xl font-light leading-relaxed">
              Firozpur's elite destination for physical excellence. Strength training, cardio rigs, specialized aerobics, and diet consultancy in a high-performance environment.
            </p>

            {/* Editorial CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                id="hero-start-training-btn"
                onClick={onOpenPassModal}
                className="bg-red-600 text-white hover:bg-red-700 px-8 sm:px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_8px_30px_rgba(220,38,38,0.3)] flex items-center gap-2"
              >
                <span>Start Training</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-free-tour-btn"
                onClick={onOpenDirections}
                className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 px-8 sm:px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <span>Gym Location & Tour</span>
              </button>
            </div>

            {/* Editorial Quick Actions Bar */}
            <div className="mt-8 pt-6 border-t border-zinc-200">
              <QuickActionCluster
                onOpenDirections={onOpenDirections}
                onOpenReviewModal={onOpenReviewModal}
                onOpenShareModal={onOpenShareModal}
                onOpenPhotosModal={onOpenPhotosModal}
              />
            </div>

            {/* Owners Quick Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Owners & Coaches:</span>
              <a
                href="https://www.instagram.com/_getfitwithanjali?igsh=NTNzcWIzMmpsNmh1&igsi=NTNzcWIzMmpsNmh1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-50 hover:bg-red-50 border border-zinc-200 hover:border-red-300 px-3.5 py-1.5 rounded-full text-zinc-800 hover:text-red-600 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span className="font-bold">Anjali</span>
                <span className="text-[10px] text-zinc-500">(Aerobics & Nutrition) · 70872-85367</span>
              </a>

              <a
                href="https://www.instagram.com/satnam_sodhi_oldskooolgym?igsh=MXd2c2lzeHFsZWVmZw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-50 hover:bg-red-50 border border-zinc-200 hover:border-red-300 px-3.5 py-1.5 rounded-full text-zinc-800 hover:text-red-600 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span className="font-bold">Satnam Singh</span>
                <span className="text-[10px] text-zinc-500">(PT & Nutrition) · 8544834372</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Stat & Information Pillars */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-6">
            
            {/* 5.07 Google Reviews Block */}
            <div 
              onClick={onOpenReviewModal}
              className="cursor-pointer group text-left lg:text-right space-y-1 bg-white border border-zinc-200 hover:border-red-500/50 p-6 rounded-3xl w-full sm:w-72 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="text-4xl sm:text-5xl font-black italic tracking-tight text-zinc-900 font-display">
                5.07
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                Google Reviews Verified
              </div>
              <div className="flex items-center lg:justify-end space-x-1 text-red-600 pt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <div className="text-[10px] text-zinc-400 pt-1 font-mono">
                + Justdial 5/5 (18 Votes)
              </div>
            </div>

            {/* Current Status Card */}
            <div className="bg-white border border-zinc-200 p-6 rounded-3xl w-full sm:w-72 text-left shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="text-[10px] uppercase tracking-widest text-red-600 mb-2 font-bold flex items-center justify-between">
                <span>Current Status</span>
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              </div>
              <div className="text-xl font-black text-zinc-900 font-display">Open Now</div>
              <div className="text-xs text-zinc-500 mt-0.5">Closes at 10:00 PM tonight</div>
            </div>

            {/* Location Card */}
            <div 
              onClick={onOpenDirections}
              className="bg-white border border-zinc-200 hover:border-red-500/50 p-6 rounded-3xl w-full sm:w-72 text-left cursor-pointer transition-all shadow-[0_8px_30px_rgba(0,0,0,0.05)] group"
            >
              <div className="text-[10px] uppercase tracking-widest text-red-600 mb-2 font-bold flex items-center justify-between">
                <span>Location</span>
                <Navigation className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="text-xs sm:text-sm text-zinc-700 leading-snug font-medium">
                Gobind Nagri Road,<br/>
                Industrial Area, Model Town,<br/>
                Firozpur, Punjab 152001
              </div>
              <div className="text-[10px] text-red-600 font-mono mt-2 flex items-center gap-1 font-bold">
                <span>9 min drive from City Centre →</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
