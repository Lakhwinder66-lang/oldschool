import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2, Send, PhoneCall, Dumbbell, Link, Instagram, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS, GYM_OWNERS } from '../data/gymData';

interface ShareSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareSheetModal: React.FC<ShareSheetModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://oldskooolgym.com';
  const shareText = `Check out Old Skoool Gym in Model Town, Firozpur! 5.07★ Rated Strength, Aerobics, Dance & Diet Studio. Call: 085448 34372`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Old Skoool Gym · Firozpur',
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="bg-[#0a0a0c] border border-white/15 max-w-md w-full rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-left">
        
        {/* Share Sheet Header */}
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
              <h3 className="text-sm font-bold text-white uppercase font-display">Old Skoool Gym</h3>
              <p className="text-[10px] text-white/50">Model Town, Firozpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full editorial-btn-glass text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Share Channels */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-4 gap-3 text-center">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white/70 font-medium">WhatsApp</span>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white/70 font-medium">Telegram</span>
            </a>

            {/* SMS */}
            <a
              href={`sms:?&body=${encodeURIComponent(`${shareText} ${currentUrl}`)}`}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white/70 font-medium">SMS</span>
            </a>

            {/* Native Sheet / System */}
            <button
              onClick={handleNativeShare}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white/70 font-medium">Share</span>
            </button>
          </div>

          {/* Copy Link Row */}
          <div>
            <button
              onClick={handleCopyLink}
              className="w-full bg-[#121216] border border-white/15 py-3 px-4 rounded-full flex items-center justify-between text-xs font-semibold text-white hover:border-[#F27D26] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Link className="w-4 h-4 text-[#F27D26]" />
                <span className="text-[11px] uppercase tracking-wider">{copied ? 'Copied to clipboard' : 'Copy Gym Profile Link'}</span>
              </div>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-white/40" />
              )}
            </button>
          </div>

          {/* Owners' Instagram Profiles */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-2.5">
              Follow Gym Owners on Instagram:
            </div>
            <div className="space-y-2">
              {GYM_OWNERS.map((owner) => (
                <a
                  key={owner.id}
                  href={owner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-2xl flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#F27D26] transition-colors">
                        {owner.name} ({owner.role})
                      </div>
                      <div className="text-[10px] text-white/50 font-mono">{owner.instagramHandle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
