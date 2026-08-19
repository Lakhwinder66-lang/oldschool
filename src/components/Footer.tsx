import React from 'react';
import { Phone, MapPin, Clock, Star, MessageCircle, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface FooterProps {
  onOpenPassModal: () => void;
  onOpenDirections: () => void;
  onOpenReviewModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPassModal,
  onOpenDirections,
  onOpenReviewModal,
}) => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] relative overflow-hidden py-16 px-4 sm:px-8 md:px-12 text-left">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F27D26] rounded-full opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 bg-[#F27D26] rounded-full"></div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white font-display">
                Old Skoool Gym
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Firozpur's premier fitness house for Strength Training, Cardio, Aerobics, Dance Classes, Certified Dietetics, and Personal Training.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F27D26] font-bold">
              <Star className="w-3.5 h-3.5 fill-[#F27D26]" />
              <span>5.07 Google Rating · 5/5 Justdial Verified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F27D26] font-bold mb-4">
              Explore Old Skoool
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">6 Training Disciplines</a></li>
              <li><a href="#popular-times" className="hover:text-white transition-colors">Popular Times & Floor Rush</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Studio & Strength Gallery</a></li>
              <li><a href="#macro-calc" className="hover:text-white transition-colors">Diet & Macro Calculator</a></li>
              <li><a href="#memberships" className="hover:text-white transition-colors">Membership Architecture</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">5.07 Google Testimonials</a></li>
            </ul>
          </div>

          {/* Timings & Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F27D26] font-bold mb-4">
              Hours & Desk
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F27D26] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Monday – Sunday</span>
                  <span className="text-white/50">5:30 AM – 10:00 PM Daily</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${GYM_DETAILS.phoneRaw}`} className="font-mono text-white hover:text-[#F27D26] font-bold">
                    085448 34372
                  </a>
                  <span className="text-white/40 block text-[10px]">Reception Desk</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${GYM_DETAILS.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F27D26] font-semibold"
                  >
                    WhatsApp (+91 85448 34372)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Rapid Pass */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F27D26] font-bold mb-4">
              Studio Location
            </h4>
            <div className="space-y-3.5 text-xs text-white/70">
              <p className="leading-relaxed text-white/60 font-light">
                {GYM_DETAILS.address}
              </p>
              
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={onOpenDirections}
                  className="editorial-btn-glass py-2.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-wider text-white flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>9-Min Driving Route</span>
                </button>

                <button
                  onClick={onOpenPassModal}
                  className="bg-white text-black hover:bg-[#F27D26] hover:text-white py-2.5 px-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Free 1-Day Pass</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Old Skoool Gym, Firozpur, Punjab. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#F27D26] font-bold tracking-widest uppercase text-[10px]">Maded By - Waris (shxh1jii)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
