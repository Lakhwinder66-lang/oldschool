import React, { useState } from 'react';
import gymLogo from '../assets/images/old_skoool_logo_1787405908983.jpg';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-zinc-200 max-w-md w-full rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.2)] text-left">
        
        {/* Share Sheet Header */}
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
              <h3 className="text-sm font-bold text-zinc-900 uppercase font-display">Old Skoool Gym</h3>
              <p className="text-[10px] text-zinc-500">Model Town, Firozpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 border border-zinc-200 transition-colors"
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
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-zinc-700 font-medium">WhatsApp</span>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 border border-sky-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-zinc-700 font-medium">Telegram</span>
            </a>

            {/* SMS */}
            <a
              href={`sms:?&body=${encodeURIComponent(`${shareText} ${currentUrl}`)}`}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 border border-indigo-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-zinc-700 font-medium">SMS</span>
            </a>

            {/* Native Sheet / System */}
            <button
              onClick={handleNativeShare}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-zinc-700 font-medium">Share</span>
            </button>
          </div>

          {/* Copy Link Row */}
          <div>
            <button
              onClick={handleCopyLink}
              className="w-full bg-zinc-50 border border-zinc-200 py-3 px-4 rounded-full flex items-center justify-between text-xs font-semibold text-zinc-800 hover:border-red-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Link className="w-4 h-4 text-red-600" />
                <span className="text-[11px] uppercase tracking-wider">{copied ? 'Copied to clipboard' : 'Copy Gym Profile Link'}</span>
              </div>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-400" />
              )}
            </button>
          </div>

          {/* Owners' Instagram Profiles */}
          <div className="pt-3 border-t border-zinc-200">
            <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2.5">
              Follow Gym Owners on Instagram:
            </div>
            <div className="space-y-2">
              {GYM_OWNERS.map((owner) => (
                <a
                  key={owner.id}
                  href={owner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 p-3 rounded-2xl flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
                        {owner.name} ({owner.role})
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono">{owner.instagramHandle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
