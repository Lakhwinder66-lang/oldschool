import React, { useState } from 'react';
import { Navigation, Star, Bookmark, Share2, Phone, Camera, MapPin, Check, MessageCircle, ExternalLink } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface QuickActionClusterProps {
  onOpenDirections: () => void;
  onOpenReviewModal: () => void;
  onOpenShareModal: () => void;
  onOpenPhotosModal: (category?: 'all' | 'outside') => void;
}

export const QuickActionCluster: React.FC<QuickActionClusterProps> = ({
  onOpenDirections,
  onOpenReviewModal,
  onOpenShareModal,
  onOpenPhotosModal,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="w-full relative">
      {/* Toast Notification */}
      {saveToast && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 bg-white border border-red-500 text-zinc-900 text-xs font-semibold px-5 py-2 rounded-full shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-3.5 h-3.5 text-red-600" />
          <span>{isSaved ? 'Saved to Your Gym Bookmarks' : 'Removed from Bookmarks'}</span>
        </div>
      )}

      {/* Primary Action Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
        {/* Directions Button */}
        <button
          id="action-directions-btn"
          onClick={onOpenDirections}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center border border-zinc-200 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:border-red-600 group-hover:text-red-600 transition-all mb-1.5">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">Directions</span>
          <span className="text-[9px] text-red-600 font-mono mt-0.5">9 mins</span>
        </button>

        {/* Write a Review Button */}
        <button
          id="action-write-review-btn"
          onClick={onOpenReviewModal}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center border border-zinc-200 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:border-red-600 transition-all mb-1.5">
            <Star className="w-4 h-4 fill-red-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">Review</span>
          <span className="text-[9px] text-zinc-500 mt-0.5">5.07 ★</span>
        </button>

        {/* Save Button */}
        <button
          id="action-save-btn"
          onClick={handleSaveToggle}
          className={`editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center border border-zinc-200 shadow-sm ${
            isSaved ? 'bg-red-50 border-red-500' : ''
          }`}
        >
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all mb-1.5 ${
            isSaved ? 'bg-red-100 border-red-500 text-red-600' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
          }`}>
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-red-600 text-red-600' : ''}`} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">{isSaved ? 'Saved' : 'Save'}</span>
          <span className="text-[9px] text-zinc-500 mt-0.5">Studio</span>
        </button>

        {/* Share Button */}
        <button
          id="action-share-btn"
          onClick={onOpenShareModal}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center border border-zinc-200 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:border-red-600 group-hover:text-red-600 transition-all mb-1.5">
            <Share2 className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">Share</span>
          <span className="text-[9px] text-zinc-500 mt-0.5">Profile</span>
        </button>

        {/* Call Button */}
        <a
          id="action-call-btn"
          href={`tel:${GYM_DETAILS.phoneRaw}`}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center border border-zinc-200 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:border-red-600 group-hover:text-red-600 transition-all mb-1.5">
            <Phone className="w-4 h-4 text-red-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">Call</span>
          <span className="text-[9px] text-red-600 font-mono mt-0.5">085448...</span>
        </a>

        {/* WhatsApp Direct Connect */}
        <a
          id="action-whatsapp-btn"
          href={`https://wa.me/${GYM_DETAILS.whatsapp}?text=Hello%20Old%20Skoool%20Gym%20Firozpur%2C%20I%20want%20to%20inquire%20about%20gym%20admission%2C%20timings%2C%20and%20diet%20consultant.`}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center border border-zinc-200 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:border-emerald-600 group-hover:text-emerald-600 transition-all mb-1.5">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">WhatsApp</span>
          <span className="text-[9px] text-zinc-500 mt-0.5">Direct</span>
        </a>
      </div>

      {/* Secondary Pill Links: Map of Old Skoool Gym, 9 Min Route, WhatsApp Inquire */}
      <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
        <button
          id="pill-see-map"
          onClick={onOpenDirections}
          className="editorial-btn-glass py-1.5 px-3.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-zinc-700 hover:text-red-600 flex items-center gap-1.5 border border-zinc-200"
        >
          <MapPin className="w-3.5 h-3.5 text-red-600" />
          <span>Map of Old Skoool Gym</span>
        </button>

        <a
          id="pill-call-studio"
          href={`tel:${GYM_DETAILS.phoneRaw}`}
          className="editorial-btn-glass py-1.5 px-3.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-zinc-700 hover:text-red-600 flex items-center gap-1.5 border border-zinc-200"
        >
          <Phone className="w-3.5 h-3.5 text-red-600" />
          <span>Contact Front Desk</span>
        </a>

        <a
          id="pill-whatsapp-direct"
          href={`https://wa.me/${GYM_DETAILS.whatsapp}?text=Hello%20Old%20Skoool%20Gym%20Firozpur%2C%20I%20want%20to%20inquire%20about%20gym%20admission%20and%20timings.`}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-btn-glass py-1.5 px-3.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-zinc-700 hover:text-emerald-600 flex items-center gap-1.5 border border-zinc-200"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>
    </div>
  );
};
