import React, { useState } from 'react';
import { X, Sparkles, QrCode, User, Phone, Dumbbell, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_DETAILS } from '../data/gymData';
import { VIPPassData } from '../types';

interface VIPPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const VIPPassModal: React.FC<VIPPassModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General 1-Day Floor Access'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterest, setServiceInterest] = useState(defaultService);
  const [visitDate, setVisitDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('Evening (5:00 PM – 8:00 PM)');
  const [generatedPass, setGeneratedPass] = useState<VIPPassData | null>(null);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const pass: VIPPassData = {
      passId: `OSG-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      phone,
      serviceInterest,
      visitDate,
      slot,
      qrCodeSeed: `OLD-SKOOUL-${Date.now()}`
    };

    setGeneratedPass(pass);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="bg-[#0a0a0c] border border-white/15 max-w-lg w-full rounded-[36px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F27D26]/60 shadow-[0_0_15px_rgba(242,125,38,0.4)] flex-shrink-0 bg-black">
              <img
                src="/src/assets/images/gym_official_logo_1787145333528.jpg"
                alt="Old Skoool Gym Official Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-display">VIP Pass Protocol</h3>
              <p className="text-[10px] text-[#F27D26] font-mono uppercase tracking-wider">Old Skoool Gym · Firozpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full editorial-btn-glass text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!generatedPass ? (
            <form onSubmit={handleGenerate} className="space-y-5">
              <div className="text-left mb-2">
                <span className="text-[10px] font-mono uppercase text-[#F27D26] font-bold tracking-widest block">
                  Complimentary 1-Day Trial
                </span>
                <h4 className="text-2xl font-black text-white uppercase font-display mt-1">
                  Access the Floor
                </h4>
                <p className="text-xs text-white/60 mt-1 font-light">
                  Valid for full gym floor, heavy weight racks, cardio machines, and trainer form induction.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaspreet Singh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#F27D26]"
                  />
                  <User className="w-4 h-4 text-white/40 absolute right-4 top-3.5" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Mobile Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 085448 34372"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#F27D26] font-mono"
                  />
                  <Phone className="w-4 h-4 text-white/40 absolute right-4 top-3.5" />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Primary Discipline</label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                >
                  <option value="Strength Only (Heavy Iron)">Strength Only (Heavy Iron - ₹1,500/mo)</option>
                  <option value="Strength + Cardio Zone">Strength + Cardio Zone (₹2,000/mo)</option>
                  <option value="Aerobics (For Women)">Aerobics (For Women - ₹1,000/mo)</option>
                  <option value="Premium (For Women)">Premium - Aerobics + Strength + Diet (₹2,500/mo)</option>
                  <option value="Diet & Nutrition Consultation">Diet & Nutrition Consultation</option>
                  <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                </select>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Visit Date</label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-3.5 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Time Window</label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-2.5 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                  >
                    <option value="Morning (6:00 AM – 9:00 AM)">Morning (6 AM – 9 AM)</option>
                    <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1 PM – 4 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5 PM – 8 PM)</option>
                    <option value="Night (8:00 PM – 10:00 PM)">Night (8 PM – 10 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#F27D26] hover:bg-[#d96816] py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(242,125,38,0.4)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Digital Pass</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 animate-in zoom-in-95 duration-200 text-left">
              
              {/* Digital Pass Card */}
              <div className="bg-[#121216] p-6 rounded-[28px] border-2 border-[#F27D26] shadow-[0_20px_50px_rgba(242,125,38,0.25)] relative overflow-hidden text-white">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#F27D26] text-white flex items-center justify-center font-bold text-xs font-display">
                      OS
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-wider uppercase font-display">Old Skoool Gym</div>
                      <div className="text-[10px] text-white/50">Model Town · Firozpur</div>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono uppercase bg-[#F27D26]/20 text-[#F27D26] px-2.5 py-1 rounded-full border border-[#F27D26]/30 font-bold">
                    VIP 1-DAY PASS
                  </span>
                </div>

                {/* Pass Details */}
                <div className="grid grid-cols-2 gap-4 text-xs mb-5">
                  <div>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest block">Member Name</span>
                    <span className="font-bold text-white text-sm uppercase">{generatedPass.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest block">Pass Number</span>
                    <span className="font-bold text-[#F27D26] font-mono text-sm">{generatedPass.passId}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest block">Valid Date</span>
                    <span className="font-semibold text-white">{generatedPass.visitDate}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest block">Time Slot</span>
                    <span className="font-semibold text-white">{generatedPass.slot}</span>
                  </div>
                </div>

                {/* Specialty */}
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 mb-5 text-xs">
                  <span className="text-[9px] text-[#F27D26] block uppercase tracking-widest font-mono">Discipline Focus</span>
                  <span className="font-bold text-white">{generatedPass.serviceInterest}</span>
                </div>

                {/* QR Code Barcode Representation */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="w-16 h-16 bg-white p-1 rounded-xl flex items-center justify-center shadow-md">
                    <QrCode className="w-full h-full text-black" />
                  </div>
                  <div className="text-right text-[11px] text-white/50">
                    <span className="text-emerald-400 font-bold block uppercase tracking-wider">✓ Verified Pass</span>
                    <span>Present at front desk</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsapp}?text=Hi%20Old%20Skoool%20Gym%2C%20I%20have%20generated%20my%20VIP%20Pass%20${generatedPass.passId}%20for%20${encodeURIComponent(generatedPass.fullName)}%20on%20${generatedPass.visitDate}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F27D26] hover:bg-[#d96816] py-3.5 px-3 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>

                <button
                  onClick={onClose}
                  className="editorial-btn-glass py-3.5 px-3 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                >
                  Dismiss
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
