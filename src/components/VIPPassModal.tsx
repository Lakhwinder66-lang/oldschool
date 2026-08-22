import React, { useState } from 'react';
import gymLogo from '../assets/images/old_skoool_logo_1787405908983.jpg';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-zinc-200 max-w-lg w-full rounded-[36px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.25)] max-h-[92vh] overflow-y-auto text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600/80 shadow-[0_0_15px_rgba(220,38,38,0.25)] flex-shrink-0 bg-white">
              <img
                src={gymLogo}
                alt="Old Skoool Gym Official Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 uppercase font-display">VIP Pass Protocol</h3>
              <p className="text-[10px] text-red-600 font-mono uppercase tracking-wider font-bold">Old Skoool Gym · Firozpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 border border-zinc-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!generatedPass ? (
            <form onSubmit={handleGenerate} className="space-y-5">
              <div className="text-left mb-2">
                <span className="text-[10px] font-mono uppercase text-red-600 font-bold tracking-widest block">
                  Complimentary 1-Day Trial
                </span>
                <h4 className="text-2xl font-black text-zinc-900 uppercase font-display mt-1">
                  Access the Floor
                </h4>
                <p className="text-xs text-zinc-600 mt-1 font-light">
                  Valid for full gym floor, heavy weight racks, cardio machines, and trainer form induction.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaspreet Singh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-4 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600"
                  />
                  <User className="w-4 h-4 text-zinc-400 absolute right-4 top-3.5" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Mobile Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 085448 34372"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-4 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 font-mono"
                  />
                  <Phone className="w-4 h-4 text-zinc-400 absolute right-4 top-3.5" />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Primary Discipline</label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-4 text-xs text-zinc-900 focus:outline-none focus:border-red-600"
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
                  <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Visit Date</label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-3.5 text-xs text-zinc-900 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Time Window</label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-2.5 text-xs text-zinc-900 focus:outline-none focus:border-red-600"
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
                  className="w-full bg-red-600 hover:bg-red-700 py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(220,38,38,0.3)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Digital Pass</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 animate-in zoom-in-95 duration-200 text-left">
              
              {/* Digital Pass Card */}
              <div className="bg-zinc-50 p-6 rounded-[28px] border-2 border-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.15)] relative overflow-hidden text-zinc-900">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-5 border-b border-zinc-200 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs font-display">
                      OS
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-wider uppercase font-display text-zinc-900">Old Skoool Gym</div>
                      <div className="text-[10px] text-zinc-500">Model Town · Firozpur</div>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono uppercase bg-red-100 text-red-600 px-2.5 py-1 rounded-full border border-red-200 font-bold">
                    VIP 1-DAY PASS
                  </span>
                </div>

                {/* Pass Details */}
                <div className="grid grid-cols-2 gap-4 text-xs mb-5">
                  <div>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest block font-bold">Member Name</span>
                    <span className="font-bold text-zinc-900 text-sm uppercase">{generatedPass.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest block font-bold">Pass Number</span>
                    <span className="font-bold text-red-600 font-mono text-sm">{generatedPass.passId}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest block font-bold">Valid Date</span>
                    <span className="font-semibold text-zinc-900">{generatedPass.visitDate}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest block font-bold">Time Slot</span>
                    <span className="font-semibold text-zinc-900">{generatedPass.slot}</span>
                  </div>
                </div>

                {/* Specialty */}
                <div className="bg-white p-3 rounded-2xl border border-zinc-200 mb-5 text-xs">
                  <span className="text-[9px] text-red-600 block uppercase tracking-widest font-mono font-bold">Discipline Focus</span>
                  <span className="font-bold text-zinc-900">{generatedPass.serviceInterest}</span>
                </div>

                {/* QR Code Barcode Representation */}
                <div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
                  <div className="w-16 h-16 bg-white p-1 rounded-xl flex items-center justify-center shadow-sm border border-zinc-200">
                    <QrCode className="w-full h-full text-zinc-900" />
                  </div>
                  <div className="text-right text-[11px] text-zinc-500">
                    <span className="text-emerald-600 font-bold block uppercase tracking-wider">✓ Verified Pass</span>
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
                  className="bg-red-600 hover:bg-red-700 py-3.5 px-3 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_16px_rgba(220,38,38,0.25)]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>

                <button
                  onClick={onClose}
                  className="editorial-btn-glass py-3.5 px-3 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-red-600 border border-zinc-200"
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
