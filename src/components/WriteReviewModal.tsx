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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-zinc-200 max-w-md w-full rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.2)] text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 border border-red-200 flex items-center justify-center">
              <Star className="w-5 h-5 fill-red-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 uppercase font-display">Write Google Review</h3>
              <p className="text-[10px] text-red-600 font-mono uppercase tracking-wider font-bold">Old Skoool Gym · 5.07 Rating</p>
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
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 uppercase font-display">Review Published</h4>
              <p className="text-xs text-zinc-600">Thank you for sharing your transformation experience with Old Skoool Gym.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Star Selection */}
              <div className="text-center pb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 mb-2 block">Rating</label>
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
                            ? 'fill-red-600 text-red-600 filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]'
                            : 'text-zinc-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-red-600 font-bold block mt-2">
                  {rating === 5 ? '5.0 ★ Excellent - Highly Recommended' : `${rating}.0 Stars`}
                </span>
              </div>

              {/* Name */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gurpreet Singh"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-4 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600"
                  />
                  <User className="w-4 h-4 text-zinc-400 absolute right-4 top-3.5" />
                </div>
              </div>

              {/* Badge Selection */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Activity Discipline</label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-3 px-4 text-xs text-zinc-900 focus:outline-none focus:border-red-600"
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
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1.5 block">Your Feedback</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details regarding equipment, coaching, hygiene, music, and results..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(220,38,38,0.3)]"
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
