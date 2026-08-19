import React from 'react';
import { Sparkles, Check, Flame, ShieldCheck, MessageCircle, ArrowUpRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DETAILS } from '../data/gymData';

interface MembershipPlansProps {
  onOpenPassModal: (planName?: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onOpenPassModal }) => {
  return (
    <section id="memberships" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
            <span>Investment & Rates</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display">
            Membership Plans
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-xl">
            Zero admission fees, unlimited floor access, cardio equipment, and expert coach induction.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`bg-white/5 border backdrop-blur-xl rounded-[32px] p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                  isPopular 
                    ? 'border-[#F27D26] ring-1 ring-[#F27D26]/30 bg-gradient-to-b from-[#F27D26]/10 to-transparent' 
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F27D26] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="text-left">
                  {/* Plan Name & Duration */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#F27D26] block mb-1">
                      {plan.duration}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display uppercase group-hover:text-[#F27D26] transition-colors">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-xs text-white/40 line-through font-mono">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-white/50 block mt-1 uppercase tracking-wider">All-inclusive floor rate</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-1.5 flex-shrink-0"></span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <div>
                  {plan.id === 'pass' ? (
                    <button
                      id="card-claim-pass-btn"
                      onClick={() => onOpenPassModal('1-Day VIP Pass')}
                      className="w-full bg-white text-black hover:bg-[#F27D26] hover:text-white py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Free Day Pass</span>
                    </button>
                  ) : (
                    <a
                      id={`card-plan-${plan.id}-btn`}
                      href={`https://wa.me/${GYM_DETAILS.whatsapp}?text=Hi%20Old%20Skoool%20Gym%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(plan.price)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                        isPopular 
                          ? 'bg-[#F27D26] hover:bg-[#d96816] text-white' 
                          : 'editorial-btn-glass text-white hover:text-white'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Join Plan</span>
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center flex-shrink-0 border border-[#F27D26]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Induction & Safety Protocol</div>
              <div className="text-[11px] text-white/50">All memberships include coach form review & gym etiquette briefing on day one.</div>
            </div>
          </div>

          <a
            href={`tel:${GYM_DETAILS.phoneRaw}`}
            className="editorial-btn-glass px-5 py-2.5 rounded-full text-[10px] uppercase tracking-wider font-bold text-white whitespace-nowrap"
          >
            Custom Student / Corporate Packages
          </a>
        </div>

      </div>
    </section>
  );
};
