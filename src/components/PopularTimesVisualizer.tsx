import React, { useState } from 'react';
import { Clock, Users, Activity, Sparkles, TrendingUp, Info } from 'lucide-react';
import { POPULAR_TIMES_DATA } from '../data/gymData';

export const PopularTimesVisualizer: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0); // Monday default
  const [selectedHour, setSelectedHour] = useState(15); // 3 PM default (highlighted in prompt)

  const currentDayData = POPULAR_TIMES_DATA[selectedDayIndex];
  const activeSlot = currentDayData.hourlyData.find(h => h.hour === selectedHour) || currentDayData.hourlyData[9]; // 3 PM

  const getOccupancyColor = (occ: number) => {
    if (occ > 80) return 'bg-[#F27D26] text-white border-[#F27D26]';
    if (occ > 55) return 'bg-white/20 text-white border-white/30';
    return 'bg-white/10 text-white/90 border-white/20';
  };

  const getOccupancyText = (occ: number, note?: string) => {
    if (note) return note;
    if (occ >= 85) return 'Peak Rush (High intensity crowd)';
    if (occ >= 65) return 'Moderately active floor';
    if (occ >= 40) return 'Steady training pace';
    return 'Usually not too busy (Plenty of free racks)';
  };

  return (
    <section id="popular-times" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
            <span>Live Floor Traffic & Analytics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            Popular Times
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-xl">
            Real-time floor occupancy data to optimize your strength routines, supersets, and power rack access.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          
          {/* Top Day Selector Tab Bar */}
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-3 sm:pb-0 mb-8 no-scrollbar">
            {POPULAR_TIMES_DATA.map((dayItem, idx) => {
              const isSelected = idx === selectedDayIndex;
              return (
                <button
                  key={dayItem.day}
                  id={`day-tab-${dayItem.dayShort.toLowerCase()}`}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-black transition-all whitespace-nowrap ${
                    isSelected 
                      ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.2)]' 
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {dayItem.day}
                </button>
              );
            })}
          </div>

          {/* Key Stat Badges as highlighted in prompt */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            
            {/* 3 PM / Highlight Status */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center font-black font-display text-base border border-[#F27D26]/40">
                3 PM
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">Google Data</div>
                <div className="text-sm text-white font-bold">Usually not too busy</div>
              </div>
            </div>

            {/* People Spend Metric */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/15">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Typical Duration</div>
                <div className="text-sm text-white font-bold">1–1.5 hours per session</div>
              </div>
            </div>

            {/* Peak Hours */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/15">
                <Users className="w-5 h-5 text-[#F27D26]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Prime Rush Window</div>
                <div className="text-sm text-white font-bold">{currentDayData.busiestTime}</div>
              </div>
            </div>

          </div>

          {/* Interactive Chart Area */}
          <div className="bg-[#08080a] p-5 sm:p-7 rounded-2xl border border-white/10 relative">
            
            {/* Live Inspection Tooltip for the selected hour */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-base sm:text-lg font-black text-white font-display uppercase tracking-wider">
                  {currentDayData.day} at {activeSlot.label}
                </span>
                <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border ${getOccupancyColor(activeSlot.occupancy)}`}>
                  {activeSlot.occupancy}% Load
                </span>
              </div>
              <div className="text-xs text-white/70 font-light">
                {getOccupancyText(activeSlot.occupancy, activeSlot.note)}
              </div>
            </div>

            {/* Bars */}
            <div className="h-44 sm:h-52 flex items-end justify-between gap-1.5 sm:gap-3 pt-6 pb-2">
              {currentDayData.hourlyData.map((slot) => {
                const isActive = slot.hour === selectedHour;
                const is3pm = slot.hour === 15;
                const heightPercent = Math.max(12, slot.occupancy);

                return (
                  <div
                    key={slot.hour}
                    onClick={() => setSelectedHour(slot.hour)}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                  >
                    {/* 3 PM indicator */}
                    {is3pm && (
                      <div className="mb-1 text-[9px] uppercase tracking-wider font-bold text-[#F27D26] bg-[#F27D26]/20 px-1.5 py-0.5 rounded border border-[#F27D26]/40 hidden sm:block whitespace-nowrap animate-bounce">
                        3 PM Quiet
                      </div>
                    )}

                    {/* Bar Pillar */}
                    <div className="w-full max-w-[26px] h-full flex items-end">
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full rounded-t-md transition-all duration-300 relative ${
                          isActive
                            ? 'bg-[#F27D26] shadow-[0_0_20px_rgba(242,125,38,0.7)]'
                            : is3pm
                            ? 'bg-white/60 border-t-2 border-[#F27D26]'
                            : slot.occupancy > 75
                            ? 'bg-white/30 group-hover:bg-white/50'
                            : 'bg-white/10 group-hover:bg-white/30'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-white bg-[#F27D26] px-1.5 py-0.5 rounded">
                            {slot.occupancy}%
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hour Label */}
                    <span className={`text-[9px] font-mono uppercase mt-2 transition-colors ${
                      isActive ? 'font-bold text-[#F27D26]' : is3pm ? 'font-bold text-white' : 'text-white/40 group-hover:text-white'
                    }`}>
                      {slot.label.replace(' ', '')}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Slider to interact quickly */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Info className="w-4 h-4 text-[#F27D26] flex-shrink-0" />
                <span>Drag slider or click bars to inspect hourly gym floor crowd levels.</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white/40 font-mono text-[10px]">6 AM</span>
                <input
                  type="range"
                  min="6"
                  max="21"
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                  className="w-36 sm:w-48 accent-[#F27D26] bg-white/10 rounded-lg cursor-pointer"
                />
                <span className="text-white/40 font-mono text-[10px]">9 PM</span>
              </div>
            </div>

          </div>

          {/* Coach Recommendation Bar */}
          <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="w-4 h-4 text-[#F27D26]" />
              <span>
                <strong className="text-white uppercase tracking-wider">Coach Insight:</strong> 1:00 PM – 4:00 PM provides optimal station availability for heavy strength supersets.
              </span>
            </div>
            <a
              href={`tel:08544834372`}
              className="editorial-btn-glass px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold text-white flex items-center gap-1.5"
            >
              <span>Call Reception (085448 34372)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
