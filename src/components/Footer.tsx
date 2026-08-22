import React from 'react';
import gymLogo from '../assets/images/old_skoool_logo_1787405908983.jpg';
import { Phone, MapPin, Clock, Star, MessageCircle, ArrowUpRight, Instagram, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS, GYM_OWNERS } from '../data/gymData';

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
    <footer className="border-t border-zinc-200 bg-zinc-50 relative overflow-hidden py-16 px-4 sm:px-8 md:px-12 text-left">
      
      {/* Background Subtle Red Tint */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600 rounded-full opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Owners Banner in Footer */}
        <div className="mb-14 p-6 sm:p-8 bg-white border border-zinc-200 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-200">
            <div>
              <div className="inline-flex items-center gap-2 text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Founders & Certified Leadership</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 uppercase font-display">
                Old Skoool Gym Leadership
              </h3>
            </div>
            <div className="text-xs text-zinc-600 max-w-md">
              Connect directly with our gym owners for certified nutrition planning, aerobics schedules, and personal training.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {GYM_OWNERS.map((owner) => (
              <div
                key={owner.id}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-900 uppercase font-display">{owner.name}</span>
                    <span className="text-[9px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold uppercase border border-red-200">
                      {owner.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1 font-mono">{owner.designation}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <a href={`tel:${owner.phoneRaw}`} className="text-zinc-900 hover:text-red-600 font-mono font-bold">
                      {owner.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={owner.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white border border-zinc-200 px-3.5 py-2 rounded-full text-[11px] font-bold text-zinc-800 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>

                  <a
                    href={`https://wa.me/${owner.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-emerald-600 border border-zinc-200 p-2 rounded-full text-zinc-700 hover:text-white transition-all"
                    title={`WhatsApp ${owner.name}`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 hover:text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600/50 shadow-[0_0_20px_rgba(220,38,38,0.2)] flex-shrink-0 bg-white">
                <img
                  src={gymLogo}
                  alt="Old Skoool Gym Official Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-base font-black tracking-[0.15em] uppercase text-zinc-900 font-display block">
                  Old Skoool Gym
                </span>
                <span className="text-[10px] uppercase tracking-widest text-red-600 font-mono font-bold">
                  Gobind Nagri Rd · Firozpur
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed font-light">
              Firozpur's premier fitness house for Strength Training, Cardio, Aerobics, Dance Classes, Certified Dietetics, and Personal Training.
            </p>
            <div className="flex items-center gap-2 text-xs text-red-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-red-600" />
              <span>5.07 Google Rating · 5/5 Justdial Verified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold mb-4">
              Explore Old Skoool
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600 font-medium">
              <li><a href="#trainers" className="hover:text-red-600 transition-colors">Founders & Head Trainers</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">6 Training Disciplines</a></li>
              <li><a href="#popular-times" className="hover:text-red-600 transition-colors">Popular Times & Floor Rush</a></li>
              <li><a href="#macro-calc" className="hover:text-red-600 transition-colors">Diet & Macro Calculator</a></li>
              <li><a href="#memberships" className="hover:text-red-600 transition-colors">Membership Architecture</a></li>
              <li><a href="#reviews" className="hover:text-red-600 transition-colors">5.07 Google Testimonials</a></li>
              <li><a href="#location" className="hover:text-red-600 transition-colors">Studio Location & Map</a></li>
            </ul>
          </div>

          {/* Timings & Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold mb-4">
              Hours & Desk
            </h4>
            <div className="space-y-3 text-xs text-zinc-600">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-zinc-900 block">Monday – Sunday</span>
                  <span className="text-zinc-500">5:30 AM – 10:00 PM Daily</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${GYM_DETAILS.phoneRaw}`} className="font-mono text-zinc-900 hover:text-red-600 font-bold">
                    085448 34372
                  </a>
                  <span className="text-zinc-500 block text-[10px]">Reception Desk</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${GYM_DETAILS.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 hover:text-red-600 font-semibold"
                  >
                    WhatsApp (+91 85448 34372)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Rapid Pass */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold mb-4">
              Studio Location
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-600">
              <p className="leading-relaxed text-zinc-600 font-light">
                {GYM_DETAILS.address}
              </p>
              
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={onOpenDirections}
                  className="editorial-btn-glass py-2.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 hover:text-red-600 flex items-center justify-center gap-1.5 border border-zinc-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>9-Min Driving Route</span>
                </button>

                <button
                  onClick={onOpenPassModal}
                  className="bg-red-600 text-white hover:bg-red-700 py-2.5 px-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(220,38,38,0.25)]"
                >
                  <span>Free 1-Day Pass</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Old Skoool Gym, Firozpur, Punjab. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-bold tracking-widest uppercase text-[10px]">Maded By - Waris (shxh1jii)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
