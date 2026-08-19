import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2, Send, PhoneCall, Dumbbell, Link } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

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
      <div className="bg-[#0a0a0c] border border-white/15 max-w-sm w-full rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-left">
        
        {/* Share Sheet Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 flex items-center justify-center">
              <Dumbbell className="w-5 h-5" />
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
          <div className="pt-2">
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
        </div>

      </div>
    </div>
  );
};
