import React, { useState } from 'react';
import { Sparkles, Phone, Navigation, Menu, X, Star, MessageCircle, Share2, Dumbbell } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface TransparentNavbarProps {
  onOpenPassModal: () => void;
  onOpenDirections: () => void;
  onOpenReviewModal: () => void;
  onOpenPhotos: () => void;
  onOpenShare: () => void;
}

export const TransparentNavbar: React.FC<TransparentNavbarProps> = ({
  onOpenPassModal,
  onOpenDirections,
  onOpenReviewModal,
  onOpenPhotos,
  onOpenShare,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Founders", href: "#trainers" },
    { label: "Programs", href: "#services" },
    { label: "Popular Times", href: "#popular-times" },
    { label: "Studio", href: "#gallery" },
    { label: "Macro Diet", href: "#macro-calc" },
    { label: "Memberships", href: "#memberships" },
    { label: "5.07 Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
  ];

  return (
    <nav className="fixed top-14 sm:top-16 left-0 right-0 z-40 px-3 sm:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Editorial Brand Logo */}
        <a 
          href="#"
          className="pointer-events-auto bg-[#0a0a0d]/90 backdrop-blur-xl border border-white/10 py-1.5 px-3 sm:py-2 sm:px-4 rounded-full flex items-center gap-3 group shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:border-[#F27D26]/50 transition-all"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#F27D26]/60 shadow-[0_0_20px_rgba(242,125,38,0.4)] group-hover:scale-105 group-hover:border-[#F27D26] transition-all flex-shrink-0 bg-black">
            <img
              src="/src/assets/images/gym_official_logo_1787145333528.jpg"
              alt="Old Skoool Gym Official Logo"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-base font-black tracking-[0.15em] uppercase text-white font-display leading-tight">
                Old Skoool
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#F27D26]">
                Gym
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-white/50 font-mono hidden sm:block">
              Est. Firozpur · Punjab
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 py-2 px-6 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Transparent Action Buttons Cluster */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Quick Call */}
          <a
            id="nav-call-btn"
            href={`tel:${GYM_DETAILS.phoneRaw}`}
            title="Call Old Skoool Gym"
            className="editorial-btn-glass p-2 sm:px-3.5 sm:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 hover:text-white"
          >
            <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
            <span className="hidden sm:inline">085448 34372</span>
          </a>

          {/* Share */}
          <button
            id="nav-share-btn"
            onClick={onOpenShare}
            title="Share Gym Profile"
            className="editorial-btn-glass p-2 rounded-full text-white/70 hover:text-white transition-colors hidden sm:flex"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {/* 9 min Route */}
          <button
            id="nav-directions-btn"
            onClick={onOpenDirections}
            className="editorial-btn-glass px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white hidden md:flex items-center gap-1.5"
          >
            <Navigation className="w-3 h-3 text-white" />
            <span>9 Mins</span>
          </button>

          {/* Join Member / Pass Button */}
          <button
            id="nav-free-pass-btn"
            onClick={onOpenPassModal}
            className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 sm:px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white hover:bg-[#F27D26] hover:border-[#F27D26] transition-all flex items-center gap-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
          >
            <Sparkles className="w-3 h-3 text-[#F27D26]" />
            <span>Join Member</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden editorial-btn-glass p-2 rounded-full text-white/80"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 max-w-sm mx-auto bg-[#0a0a0d]/95 backdrop-blur-2xl border border-white/15 p-5 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.15em] font-semibold text-white/70 hover:text-white py-2 px-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#F27D26]">→</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDirections();
              }}
              className="editorial-btn-glass text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-white"
            >
              <Navigation className="w-3.5 h-3.5 text-white" />
              <span>Directions</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReviewModal();
              }}
              className="editorial-btn-glass text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-white"
            >
              <Star className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" />
              <span>Write Review</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
