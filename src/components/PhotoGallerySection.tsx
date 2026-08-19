import React, { useState } from 'react';
import { Camera, ExternalLink, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/gymData';
import { GalleryPhoto } from '../types';

interface PhotoGallerySectionProps {
  initialFilter?: 'all' | 'outside';
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({ initialFilter = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialFilter);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Studio Photos' },
    { id: 'interior', label: 'Main Floor' },
    { id: 'strength', label: 'Strength & Iron' },
    { id: 'dance', label: 'Dance & Aerobics' },
    { id: 'outside', label: 'See Outside' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  const openLightbox = (photo: GalleryPhoto) => {
    setActiveLightboxPhoto(photo);
  };

  const nextPhoto = () => {
    if (!activeLightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === activeLightboxPhoto.id);
    const nextIdx = (currentIndex + 1) % filteredPhotos.length;
    setActiveLightboxPhoto(filteredPhotos[nextIdx]);
  };

  const prevPhoto = () => {
    if (!activeLightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === activeLightboxPhoto.id);
    const prevIdx = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActiveLightboxPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
              <span>Visual Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display">
              Studio & Floor Gallery
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-xl">
              High-performance equipment, specialized training stations, energetic aerobics floor, and outside entrance on Gobind Nagri Road.
            </p>
          </div>

          <button
            onClick={() => setActiveCategory('outside')}
            className="editorial-btn-glass py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 self-start sm:self-auto"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Outside & Parking</span>
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-black transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group bg-white/5 border border-white/10 hover:border-[#F27D26]/40 backdrop-blur-xl rounded-[32px] overflow-hidden cursor-pointer transition-all duration-300 relative shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Index Numeral */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#F27D26] border border-white/10">
                  0{idx + 1}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                  <Maximize2 className="w-3.5 h-3.5 text-[#F27D26]" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <h4 className="text-base font-bold text-white uppercase font-display group-hover:text-[#F27D26] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-white/60 line-clamp-1 mt-1 font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Fullscreen Editorial Lightbox */}
        {activeLightboxPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxPhoto(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image Container */}
              <div className="relative w-full max-h-[75vh] rounded-[32px] overflow-hidden border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
                <img
                  src={activeLightboxPhoto.url}
                  alt={activeLightboxPhoto.title}
                  className="w-full max-h-[75vh] object-contain bg-black/70 mx-auto"
                  referrerPolicy="no-referrer"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#F27D26] hover:scale-105 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#F27D26] hover:scale-105 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Caption Bar */}
              <div className="mt-4 bg-[#0c0c0e] border border-white/10 p-5 rounded-2xl w-full flex items-center justify-between gap-4 text-left">
                <div>
                  <h3 className="text-base font-bold text-white uppercase font-display">{activeLightboxPhoto.title}</h3>
                  <p className="text-xs text-white/60 mt-0.5 font-light">{activeLightboxPhoto.caption}</p>
                </div>

                <div className="text-[10px] uppercase tracking-widest font-mono text-[#F27D26] bg-[#F27D26]/10 px-3 py-1.5 rounded-full border border-[#F27D26]/30 whitespace-nowrap">
                  Old Skoool · Firozpur
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
