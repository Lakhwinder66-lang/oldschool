import React, { useState } from 'react';
import { Sparkles, Check, Flame, ShieldCheck, MessageCircle, Phone, ArrowUpRight, Dumbbell, HeartPulse, UserCheck, Star } from 'lucide-react';
import { GYM_PACKAGES, GYM_DETAILS, GYM_OWNERS } from '../data/gymData';

interface MembershipPlansProps {
  onOpenPassModal: (planName?: string) => void;
}

type DurationType = 'monthly' | 'quarterly' | 'annual';

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onOpenPassModal }) => {
  const [selectedDuration, setSelectedDuration] = useState<DurationType>('monthly');

  const durationLabels: Record<DurationType, { label: string; sub: string; discountBadge?: string }> = {
    monthly: { label: '1 Month', sub: 'Monthly flexible membership' },
    quarterly: { label: '3 Months', sub: 'Quarterly commitment', discountBadge: 'Save up to ₹2,000' },
    annual: { label: 'Annual (1 Year)', sub: '365 Days all-inclusive VIP', discountBadge: 'Best Value' },
  };

  const getPriceForDuration = (packageItem: typeof GYM_PACKAGES[0], dur: DurationType) => {
    const rawPrice = packageItem.prices[dur];
    return `₹${rawPrice.toLocaleString('en-IN')}`;
  };

  const getEffectiveMonthlyPrice = (packageItem: typeof GYM_PACKAGES[0], dur: DurationType) => {
    if (dur === 'quarterly') {
      return `₹${Math.round(packageItem.prices.quarterly / 3).toLocaleString('en-IN')}/mo`;
    }
    if (dur === 'annual') {
      return `₹${Math.round(packageItem.prices.annual / 12).toLocaleString('en-IN')}/mo`;
    }
    return null;
  };

  return (
    <section id="memberships" className="py-20 px-4 sm:px-8 md:px-12 relative bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Official Packages & Transparent Rates</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 uppercase tracking-tight font-display">
              Membership Architecture
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light max-w-xl">
              Official rates for Strength, Cardio, Aerobics (Women), and VIP Premium. Zero hidden fees, full facility access.
            </p>
          </div>

          {/* Duration Selector Tabs */}
          <div className="bg-zinc-100 border border-zinc-200 p-1.5 rounded-full flex items-center gap-1 backdrop-blur-xl self-start md:self-auto shadow-sm">
            {(['monthly', 'quarterly', 'annual'] as DurationType[]).map((dur) => (
              <button
                key={dur}
                type="button"
                onClick={() => setSelectedDuration(dur)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedDuration === dur
                    ? 'bg-red-600 text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                <span>{durationLabels[dur].label}</span>
                {dur === 'annual' && (
                  <span className="text-[9px] bg-white text-red-600 px-1.5 py-0.2 rounded-full font-mono font-bold">
                    VIP
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GYM_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const currentPriceFormatted = getPriceForDuration(pkg, selectedDuration);
            const effectiveMonthly = getEffectiveMonthlyPrice(pkg, selectedDuration);

            return (
              <div
                key={pkg.id}
                className={`bg-white border rounded-[32px] p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left ${
                  isPopular 
                    ? 'border-red-500 ring-2 ring-red-500/20 bg-gradient-to-b from-red-50/50 via-white to-transparent' 
                    : 'border-zinc-200 hover:border-red-500/40'
                }`}
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1 ${
                    isPopular ? 'bg-red-600' : 'bg-zinc-900'
                  }`}>
                    {isPopular ? <Flame className="w-3 h-3 fill-white" /> : <Star className="w-3 h-3 text-white" />}
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Category & Name */}
                  <div className="mb-4 mt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-red-600">
                        {pkg.category}
                      </span>
                      {pkg.targetAudience && (
                        <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200 font-bold">
                          {pkg.targetAudience}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-display uppercase tracking-tight mt-1 group-hover:text-red-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-light mt-1.5 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-5 pb-5 border-b border-zinc-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                        {currentPriceFormatted}
                      </span>
                      <span className="text-xs text-zinc-500 uppercase font-mono">
                        / {durationLabels[selectedDuration].label}
                      </span>
                    </div>

                    {effectiveMonthly && (
                      <div className="text-[11px] text-emerald-600 font-mono mt-1 flex items-center gap-1 font-semibold">
                        <span>Equivalent to {effectiveMonthly}</span>
                      </div>
                    )}

                    {/* Quick Duration Comparison Pill Matrix */}
                    <div className="grid grid-cols-3 gap-1.5 mt-3 pt-3 border-t border-zinc-100 text-center">
                      <button
                        type="button"
                        onClick={() => setSelectedDuration('monthly')}
                        className={`p-1.5 rounded-xl text-[10px] font-mono transition-all ${
                          selectedDuration === 'monthly'
                            ? 'bg-red-600 text-white font-bold'
                            : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        <div className="text-[8px] uppercase">1M</div>
                        <div>₹{pkg.prices.monthly}</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedDuration('quarterly')}
                        className={`p-1.5 rounded-xl text-[10px] font-mono transition-all ${
                          selectedDuration === 'quarterly'
                            ? 'bg-red-600 text-white font-bold'
                            : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        <div className="text-[8px] uppercase">3M</div>
                        <div>₹{pkg.prices.quarterly}</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedDuration('annual')}
                        className={`p-1.5 rounded-xl text-[10px] font-mono transition-all ${
                          selectedDuration === 'annual'
                            ? 'bg-red-600 text-white font-bold'
                            : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        <div className="text-[8px] uppercase">Annual</div>
                        <div>₹{pkg.prices.annual}</div>
                      </button>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0"></span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coach attribution */}
                  <div className="mb-6 p-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-[11px]">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 block">Director / Coach:</span>
                    <span className="text-zinc-900 font-semibold block mt-0.5">{pkg.coach}</span>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <a
                    id={`join-package-${pkg.id}`}
                    href={`https://wa.me/91${pkg.contactPhone}?text=Hello!%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(pkg.name)}%20package%20(${encodeURIComponent(durationLabels[selectedDuration].label)}%20-%20${encodeURIComponent(currentPriceFormatted)})%20at%20Old%20Skoool%20Gym.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                      isPopular 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-[0_4px_20px_rgba(220,38,38,0.3)]' 
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Join {durationLabels[selectedDuration].label}</span>
                  </a>

                  <button
                    onClick={() => onOpenPassModal(`${pkg.name} (${durationLabels[selectedDuration].label})`)}
                    className="w-full bg-transparent hover:bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 py-2 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors"
                  >
                    Book Free 1-Day Trial First
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Official Instructors Summary Banner */}
        <div className="mt-12 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-[32px] text-left flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                <span>Official Certification & Direct Ownership</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-zinc-900 uppercase font-display">
                SATNAM SINGH & ANJALI
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-mono">
                Certified Trainer & Nutritionist · Aerobics Certified Instructor
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Call Satnam */}
            <a
              href="tel:+918544834372"
              className="editorial-btn-glass py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-red-600 flex items-center gap-2 flex-1 sm:flex-none justify-center border border-zinc-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Satnam: 8544834372</span>
            </a>

            {/* Call Anjali */}
            <a
              href="tel:+917087285367"
              className="editorial-btn-glass py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-red-600 flex items-center gap-2 flex-1 sm:flex-none justify-center border border-zinc-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Anjali: 70872-85367</span>
            </a>

            {/* Free Trial Button */}
            <button
              onClick={() => onOpenPassModal('General Free Trial')}
              className="bg-red-600 text-white hover:bg-red-700 py-3 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-1.5 flex-1 sm:flex-none justify-center shadow-[0_4px_16px_rgba(220,38,38,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Pass</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
