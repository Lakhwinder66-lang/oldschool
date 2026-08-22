import React, { useState } from 'react';
import gymLogo from '../assets/images/old_skoool_logo_1787405908983.jpg';
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
          className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-zinc-200 py-1.5 px-3 sm:py-2 sm:px-4 rounded-full flex items-center gap-3 group shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-red-500/50 transition-all"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-red-600/80 shadow-[0_0_20px_rgba(220,38,38,0.25)] group-hover:scale-105 group-hover:border-red-600 transition-all flex-shrink-0 bg-white">
            <img
              src={gymLogo}
              alt="Old Skoool Gym Official Logo"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-base font-black tracking-[0.15em] uppercase text-zinc-900 font-display leading-tight">
                Old Skoool
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-red-600">
                Gym
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono hidden sm:block">
              Est. Firozpur · Punjab
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 pointer-events-auto bg-white/90 backdrop-blur-xl border border-zinc-200 py-2 px-6 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-600 hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons Cluster */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Quick Call */}
          <a
            id="nav-call-btn"
            href={`tel:${GYM_DETAILS.phoneRaw}`}
            title="Call Old Skoool Gym"
            className="editorial-btn-glass p-2 sm:px-3.5 sm:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-1.5 hover:text-red-600 border border-zinc-200 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span className="hidden sm:inline">085448 34372</span>
          </a>

          {/* Share */}
          <button
            id="nav-share-btn"
            onClick={onOpenShare}
            title="Share Gym Profile"
            className="editorial-btn-glass p-2 rounded-full text-zinc-700 hover:text-red-600 transition-colors hidden sm:flex border border-zinc-200 shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {/* 9 min Route */}
          <button
            id="nav-directions-btn"
            onClick={onOpenDirections}
            className="editorial-btn-glass px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 hidden md:flex items-center gap-1.5 border border-zinc-200 shadow-sm hover:text-red-600"
          >
            <Navigation className="w-3 h-3 text-red-600" />
            <span>9 Mins</span>
          </button>

          {/* Join Member / Pass Button */}
          <button
            id="nav-free-pass-btn"
            onClick={onOpenPassModal}
            className="bg-red-600 text-white border border-red-500 px-5 sm:px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-black hover:bg-red-700 transition-all flex items-center gap-1.5 shadow-[0_4px_16px_rgba(220,38,38,0.3)]"
          >
            <Sparkles className="w-3 h-3 text-white" />
            <span>Join Member</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden editorial-btn-glass p-2 rounded-full text-zinc-800 border border-zinc-200 shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 max-w-sm mx-auto bg-white/98 backdrop-blur-2xl border border-zinc-200 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.15em] font-semibold text-zinc-700 hover:text-red-600 py-2 px-3 rounded-xl hover:bg-zinc-100 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-red-600">→</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-200 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDirections();
              }}
              className="editorial-btn-glass text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-zinc-800 border border-zinc-200"
            >
              <Navigation className="w-3.5 h-3.5 text-red-600" />
              <span>Directions</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReviewModal();
              }}
              className="editorial-btn-glass text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-zinc-800 border border-zinc-200"
            >
              <Star className="w-3.5 h-3.5 fill-red-600 text-red-600" />
              <span>Write Review</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
