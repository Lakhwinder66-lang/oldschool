import React from 'react';
import { X, Navigation, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Old Skoool Gym Gobind Nagri Road Industrial Area Model Town Firozpur Punjab 152001")}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(GYM_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="bg-[#0a0a0c] border border-white/15 max-w-lg w-full rounded-[36px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 flex items-center justify-center">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-display">Directions & Route</h3>
              <p className="text-[10px] text-[#F27D26] font-mono uppercase tracking-wider">9 mins from City Centre · Firozpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full editorial-btn-glass text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Target Destination Card */}
          <div className="bg-[#121216] p-5 rounded-2xl border border-white/10 text-xs">
            <div className="text-[9px] uppercase font-mono text-[#F27D26] font-bold mb-1">
              Destination Location
            </div>
            <div className="font-bold text-white text-base uppercase font-display mb-1">{GYM_DETAILS.name}</div>
            <p className="text-white/70 leading-relaxed font-light">{GYM_DETAILS.address}</p>
            
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider">Open Today · 5:30 AM – 10:00 PM</span>
              <button
                onClick={handleCopy}
                className="text-white hover:text-[#F27D26] flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Turn-by-Turn Route Guidance from Local Landmarks */}
          <div>
            <h4 className="text-[10px] font-mono uppercase text-white/50 font-bold mb-3 tracking-widest">
              Landmark Routes in Ferozepur
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white flex items-center justify-between uppercase">
                  <span>From Model Town Chowk</span>
                  <span className="text-[#F27D26] font-mono text-[11px]">~3 mins (850m)</span>
                </div>
                <p className="text-white/60 text-[11px] mt-1 font-light">
                  Head south towards Gobind Nagri Road. Old Skoool Gym is located right along the Industrial Area corridor.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white flex items-center justify-between uppercase">
                  <span>From Firozpur Cantt Railway Station</span>
                  <span className="text-[#F27D26] font-mono text-[11px]">~9 mins (4.2 km)</span>
                </div>
                <p className="text-white/60 text-[11px] mt-1 font-light">
                  Take Cantt Road towards Model Town Industrial Sector. Ample two-wheeler & car parking available outside entrance.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white flex items-center justify-between uppercase">
                  <span>From Shaheed Bhagat Singh Stadium</span>
                  <span className="text-[#F27D26] font-mono text-[11px]">~7 mins (3.1 km)</span>
                </div>
                <p className="text-white/60 text-[11px] mt-1 font-light">
                  Follow Mall Road directly onto Gobind Nagri Road link.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 grid grid-cols-2 gap-3">
            <a
              id="directions-launch-maps-btn"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-[#F27D26] hover:text-white py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              <span>Live Navigation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="editorial-btn-glass py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Reception</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
