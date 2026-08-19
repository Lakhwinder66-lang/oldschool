import React, { useState } from 'react';
import { Sparkles, Phone, Navigation, Clock, Activity, X } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface DynamicIslandProps {
  onOpenPassModal: () => void;
  onOpenDirections: () => void;
}

export const DynamicIslandStatus: React.FC<DynamicIslandProps> = ({
  onOpenPassModal,
  onOpenDirections
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 pointer-events-auto transition-all duration-300">
      <div 
        id="dynamic-island-pill"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-[#08080a]/95 backdrop-blur-2xl border border-white/15 text-[#F5F5F5] rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 select-none ${
          isExpanded ? 'w-[92vw] max-w-md p-5 rounded-3xl border-white/20' : 'px-4 py-2 flex items-center gap-3 hover:border-[#F27D26]/50'
        }`}
      >
        {!isExpanded ? (
          <div className="flex items-center justify-between w-full gap-3 text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27D26]"></span>
              </span>
              <span className="font-bold text-[10px] uppercase tracking-widest text-[#F27D26]">Open Now</span>
              <span className="text-white/50 text-[11px]">· Closes 10 PM</span>
            </div>

            <div className="h-3 w-[1px] bg-white/10 mx-1 hidden xs:block"></div>

            <div className="hidden xs:flex items-center gap-1.5 text-white/70 text-xs font-light">
              <Activity className="w-3.5 h-3.5 text-[#F27D26]" />
              <span>Optimal (~32% Rush)</span>
            </div>

            <div className="flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold text-white">
              <span>Firozpur</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-left" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F27D26]"></div>
                <span className="font-black text-xs uppercase tracking-[0.2em] text-white">Old Skoool Live Status</span>
              </div>
              <button 
                id="close-dynamic-island"
                onClick={() => setIsExpanded(false)}
                className="text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-1">
                  <Clock className="w-3 h-3" />
                  <span>Hours Today</span>
                </div>
                <div className="font-bold text-white text-sm">5:30 AM – 10 PM</div>
                <div className="text-[10px] text-white/50 mt-0.5">Closes 10:00 PM</div>
              </div>

              <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">
                  <Activity className="w-3 h-3 text-[#F27D26]" />
                  <span>Live Floor Traffic</span>
                </div>
                <div className="font-bold text-white text-sm">Quiet (32%)</div>
                <div className="text-[10px] text-[#F27D26] mt-0.5">3 PM is low rush</div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                id="island-call-btn"
                href={`tel:${GYM_DETAILS.phoneRaw}`}
                className="flex-1 editorial-btn-glass text-[10px] font-bold py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Call Desk</span>
              </a>

              <button
                id="island-directions-btn"
                onClick={() => {
                  setIsExpanded(false);
                  onOpenDirections();
                }}
                className="flex-1 editorial-btn-glass text-[10px] font-bold py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-white"
              >
                <Navigation className="w-3.5 h-3.5 text-white" />
                <span>9 min Route</span>
              </button>

              <button
                id="island-pass-btn"
                onClick={() => {
                  setIsExpanded(false);
                  onOpenPassModal();
                }}
                className="flex-1 editorial-btn-accent text-[10px] font-black py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free Pass</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

