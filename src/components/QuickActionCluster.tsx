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
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 bg-[#0c0c0e] border border-[#F27D26]/40 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-3.5 h-3.5 text-[#F27D26]" />
          <span>{isSaved ? 'Saved to Your Editorial Gym Bookmarks' : 'Removed from Bookmarks'}</span>
        </div>
      )}

      {/* Primary Editorial Action Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
        {/* Directions Button */}
        <button
          id="action-directions-btn"
          onClick={onOpenDirections}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center"
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#F27D26] group-hover:text-[#F27D26] transition-all mb-1.5">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">Directions</span>
          <span className="text-[9px] text-[#F27D26] font-mono mt-0.5">9 mins</span>
        </button>

        {/* Write a Review Button */}
        <button
          id="action-write-review-btn"
          onClick={onOpenReviewModal}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center"
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 group-hover:border-[#F27D26] transition-all mb-1.5">
            <Star className="w-4 h-4 fill-[#F27D26]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">Review</span>
          <span className="text-[9px] text-white/50 mt-0.5">5.07 ★</span>
        </button>

        {/* Save Button */}
        <button
          id="action-save-btn"
          onClick={handleSaveToggle}
          className={`editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center ${
            isSaved ? 'bg-white/15 border-[#F27D26]/50' : ''
          }`}
        >
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all mb-1.5 ${
            isSaved ? 'bg-[#F27D26]/20 border-[#F27D26] text-[#F27D26]' : 'bg-white/5 border-white/10 text-white'
          }`}>
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#F27D26] text-[#F27D26]' : ''}`} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">{isSaved ? 'Saved' : 'Save'}</span>
          <span className="text-[9px] text-white/50 mt-0.5">Studio</span>
        </button>

        {/* Share Button */}
        <button
          id="action-share-btn"
          onClick={onOpenShareModal}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center"
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#F27D26] group-hover:text-[#F27D26] transition-all mb-1.5">
            <Share2 className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">Share</span>
          <span className="text-[9px] text-white/50 mt-0.5">Profile</span>
        </button>

        {/* Call Button */}
        <a
          id="action-call-btn"
          href={`tel:${GYM_DETAILS.phoneRaw}`}
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center"
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#F27D26] group-hover:text-[#F27D26] transition-all mb-1.5">
            <Phone className="w-4 h-4 text-[#F27D26]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">Call</span>
          <span className="text-[9px] text-[#F27D26] font-mono mt-0.5">085448...</span>
        </a>

        {/* WhatsApp Direct Connect */}
        <a
          id="action-whatsapp-btn"
          href={`https://wa.me/${GYM_DETAILS.whatsapp}?text=Hello%20Old%20Skoool%20Gym%20Firozpur%2C%20I%20want%20to%20inquire%20about%20gym%20admission%2C%20timings%2C%20and%20diet%20consultant.`}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-btn-glass flex flex-col items-center justify-center p-3 rounded-2xl group text-center"
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#F27D26] group-hover:text-[#F27D26] transition-all mb-1.5">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">WhatsApp</span>
          <span className="text-[9px] text-white/50 mt-0.5">Direct</span>
        </a>
      </div>

      {/* Secondary Pill Links: "See photos", "Map of Old Skoool Gym", "See outside" */}
      <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
        <button
          id="pill-see-photos"
          onClick={() => onOpenPhotosModal('all')}
          className="editorial-btn-glass py-1.5 px-3.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-white/80 hover:text-white flex items-center gap-1.5"
        >
          <Camera className="w-3.5 h-3.5 text-[#F27D26]" />
          <span>See photos (Studio & Iron)</span>
        </button>

        <button
          id="pill-see-outside"
          onClick={() => onOpenPhotosModal('outside')}
          className="editorial-btn-glass py-1.5 px-3.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-white/80 hover:text-white flex items-center gap-1.5"
        >
          <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          <span>See outside & Parking</span>
        </button>

        <button
          id="pill-see-map"
          onClick={onOpenDirections}
          className="editorial-btn-glass py-1.5 px-3.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-white/80 hover:text-white flex items-center gap-1.5"
        >
          <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
          <span>Map of Old Skoool Gym</span>
        </button>
      </div>
    </div>
  );
};
