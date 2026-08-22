import React, { useState } from 'react';
import { Star, ShieldCheck, ThumbsUp, MessageSquarePlus, Award, ArrowUpRight } from 'lucide-react';
import { REVIEWS_LIST } from '../data/gymData';
import { GymReview } from '../types';

interface ReviewsSectionProps {
  onOpenWriteReview: () => void;
  customReviews: GymReview[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenWriteReview, customReviews }) => {
  const [filterSource, setFilterSource] = useState<'all' | 'Google' | 'Justdial'>('all');
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});

  const allReviews = [...customReviews, ...REVIEWS_LIST];

  const filteredReviews = filterSource === 'all'
    ? allReviews
    : allReviews.filter(r => r.source === filterSource);

  const handleLike = (id: string, initialLikes: number) => {
    setLikesMap(prev => ({
      ...prev,
      [id]: (prev[id] ?? initialLikes) + 1
    }));
  };

  return (
    <section id="reviews" className="py-20 px-4 sm:px-8 md:px-12 relative bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Ratings Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Testimonials & Verified Ratings</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 uppercase tracking-tight font-display">
              5.07 Rated Gym
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light max-w-xl">
              Authentic reviews from athletes, powerlifters, dancers, and transformation members in Firozpur, Punjab.
            </p>
          </div>

          {/* Rating Snapshot & Write Review Action */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Google Rating Card */}
            <div className="bg-zinc-50 border border-zinc-200 p-3.5 rounded-2xl flex items-center gap-3">
              <div className="text-3xl font-black italic text-zinc-900 font-display">5.07</div>
              <div>
                <div className="flex text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-red-600" />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-0.5">7 Google Reviews</div>
              </div>
            </div>

            {/* Justdial Rating Card */}
            <div className="bg-zinc-50 border border-zinc-200 p-3.5 rounded-2xl flex items-center gap-3">
              <div className="text-3xl font-black italic text-emerald-600 font-display">5/5</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-900">Justdial</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">18 Verified Votes</div>
              </div>
            </div>

            {/* Write a Review Button */}
            <button
              id="reviews-write-btn"
              onClick={onOpenWriteReview}
              className="bg-red-600 text-white hover:bg-red-700 py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-[0_4px_16px_rgba(220,38,38,0.25)]"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Source Filter Tabs */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setFilterSource('all')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-black transition-all ${
              filterSource === 'all' 
                ? 'bg-red-600 text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]' 
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
            }`}
          >
            All Reviews ({allReviews.length})
          </button>
          <button
            onClick={() => setFilterSource('Google')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-black transition-all ${
              filterSource === 'Google' 
                ? 'bg-red-600 text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]' 
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
            }`}
          >
            Google (7)
          </button>
          <button
            onClick={() => setFilterSource('Justdial')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-black transition-all ${
              filterSource === 'Justdial' 
                ? 'bg-red-600 text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]' 
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
            }`}
          >
            Justdial (18)
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const currentLikes = likesMap[rev.id] ?? rev.likes;
            return (
              <div
                key={rev.id}
                className="bg-white border border-zinc-200 hover:border-red-600/40 rounded-[32px] p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center font-bold text-red-600 text-sm font-display">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1">
                          <span>{rev.author}</span>
                          {rev.verified && <ShieldCheck className="w-3.5 h-3.5 text-red-600" />}
                        </div>
                        {rev.badge && (
                          <span className="text-[10px] text-zinc-500 font-light block">
                            {rev.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="bg-zinc-100 px-2.5 py-1 rounded-full text-[9px] font-mono text-zinc-600 border border-zinc-200 uppercase font-semibold">
                      {rev.source}
                    </div>
                  </div>

                  {/* Stars and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-red-600">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-red-600" />
                      ))}
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">{rev.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-light">
                    "{rev.content}"
                  </p>
                </div>

                {/* Helpful Like Button */}
                <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
                  <span className="text-[10px] uppercase tracking-wider">Verified Member</span>
                  <button
                    onClick={() => handleLike(rev.id, rev.likes)}
                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors p-1"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-red-600" />
                    <span className="text-[10px] uppercase tracking-wider">Helpful ({currentLikes})</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
