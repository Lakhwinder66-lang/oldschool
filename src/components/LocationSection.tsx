import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Copy, Check, Car, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface LocationSectionProps {
  onOpenDirections: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenDirections }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Old Skoool Gym Gobind Nagri Road Industrial Area Model Town Firozpur Punjab 152001")}`;

  return (
    <section id="location" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
            <span>Spatial Location & Directions</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display">
            Find the Studio
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-xl">
            Centrally positioned on Gobind Nagri Road in Industrial Area, Model Town, Firozpur.
          </p>
        </div>

        {/* Grid: Map Visualizer & Location Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Address Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#F27D26]/20 border border-[#F27D26]/30 text-[#F27D26] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="bg-[#0c0c0e] px-3 py-1 rounded-full text-[10px] uppercase font-mono text-white border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Open · Closes 10 PM</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white uppercase font-display mb-2">
                  Old Skoool Gym
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-6">
                  {GYM_DETAILS.address}
                </p>

                <div className="space-y-3 text-xs text-white/70">
                  <div className="flex items-center gap-2.5">
                    <Car className="w-4 h-4 text-[#F27D26] flex-shrink-0" />
                    <span><strong className="text-white">9 mins</strong> from Firozpur City Centre / Cantt</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-white/50 flex-shrink-0" />
                    <span>Daily Timing: <strong className="text-white">5:30 AM – 10:00 PM</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Reception: <strong className="text-white">085448 34372</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="editorial-btn-glass py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/60" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  id="launch-google-maps-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-[#F27D26] hover:text-white py-3 px-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Landmarks Card */}
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-5 text-xs text-left">
              <div className="font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Transit Access</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-white/70">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <div className="text-[10px] text-white/40 uppercase">Model Town Chowk</div>
                  <div className="font-bold text-white mt-0.5 font-display">~3 mins (850m)</div>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <div className="text-[10px] text-white/40 uppercase">Firozpur Cantt Stn</div>
                  <div className="font-bold text-white mt-0.5 font-display">~9 mins (4.2 km)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map Visualizer */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Interactive Map Visual Mockup */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#070709] border border-white/10 flex flex-col items-center justify-center p-6 text-center group">
              
              {/* Stylized Minimal Grid */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F27D26_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {/* Map Road SVG Overlay Mockup */}
              <svg className="absolute inset-0 w-full h-full stroke-white/10" fill="none" viewBox="0 0 400 300">
                <path d="M 50 50 Q 150 120 200 150 T 350 250" strokeWidth="6" />
                <path d="M 30 250 Q 120 200 200 150 T 370 70" strokeWidth="3" strokeDasharray="6,6" stroke="#F27D26" strokeOpacity="0.4" />
                <circle cx="200" cy="150" r="16" fill="#F27D26" fillOpacity="0.2" className="animate-ping" />
              </svg>

              {/* Pin Marker on Gym */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="w-14 h-14 rounded-full bg-[#F27D26] border-2 border-white flex items-center justify-center text-white shadow-[0_0_40px_rgba(242,125,38,0.7)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-3 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/20 shadow-2xl whitespace-nowrap font-display">
                  Old Skoool Gym
                </div>
              </div>

              {/* Get There Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="text-left">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="uppercase tracking-wider">Gobind Nagri Road</span>
                    <span className="text-[9px] font-mono bg-[#F27D26] text-white px-2 py-0.5 rounded-full font-bold">9 mins</span>
                  </div>
                  <div className="text-[11px] text-white/50">Industrial Area, Model Town, Firozpur</div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-[#F27D26] hover:text-white py-2 px-4 rounded-full text-[10px] uppercase tracking-widest font-black flex items-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
