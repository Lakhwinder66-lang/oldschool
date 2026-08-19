import React, { useState } from 'react';
import { X, Star, ShieldCheck, User } from 'lucide-react';
import { GymReview } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: GymReview) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [badge, setBadge] = useState('Strength & Transformation Member');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !content) return;

    const newRev: GymReview = {
      id: `custom-rev-${Date.now()}`,
      author,
      rating,
      date: 'Just now',
      source: 'Google',
      verified: true,
      badge,
      content,
      likes: 1,
    };

    onSubmitReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="bg-[#0a0a0c] border border-white/15 max-w-md w-full rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 flex items-center justify-center">
              <Star className="w-5 h-5 fill-[#F27D26]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-display">Write Google Review</h3>
              <p className="text-[10px] text-white/50 font-mono uppercase tracking-wider">Old Skoool Gym · 5.07 Rating</p>
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
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase font-display">Review Published</h4>
              <p className="text-xs text-white/60">Thank you for sharing your transformation experience with Old Skoool Gym.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Star Selection */}
              <div className="text-center pb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/60 mb-2 block">Rating</label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1.5 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? 'fill-[#F27D26] text-[#F27D26] filter drop-shadow-[0_0_8px_rgba(242,125,38,0.6)]'
                            : 'text-white/20'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#F27D26] font-bold block mt-2">
                  {rating === 5 ? '5.0 ★ Excellent - Highly Recommended' : `${rating}.0 Stars`}
                </span>
              </div>

              {/* Name */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gurpreet Singh"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#F27D26]"
                  />
                  <User className="w-4 h-4 text-white/40 absolute right-4 top-3.5" />
                </div>
              </div>

              {/* Badge Selection */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Activity Discipline</label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  className="w-full bg-[#121216] border border-white/15 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                >
                  <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                  <option value="Aerobics & Dance Member">Aerobics & Dance Member</option>
                  <option value="Cardio & Weight Loss">Cardio & Weight Loss</option>
                  <option value="Diet & Transformation">Diet & Transformation</option>
                  <option value="Personal Training Mentee">Personal Training Mentee</option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5 block">Your Feedback</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details regarding equipment, coaching, hygiene, music, and results..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-[#121216] border border-white/15 rounded-2xl p-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#F27D26] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F27D26] hover:bg-[#d96816] py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(242,125,38,0.4)]"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span>Submit Verified Review</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
