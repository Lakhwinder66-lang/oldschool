/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DynamicIslandStatus } from './components/DynamicIslandStatus';
import { TransparentNavbar } from './components/TransparentNavbar';
import { HeroSection } from './components/HeroSection';
import { PopularTimesVisualizer } from './components/PopularTimesVisualizer';
import { ServicesShowcase } from './components/ServicesShowcase';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { FitnessCalculator } from './components/FitnessCalculator';
import { MembershipPlans } from './components/MembershipPlans';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

// Modals
import { VIPPassModal } from './components/VIPPassModal';
import { DirectionsModal } from './components/DirectionsModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { ShareSheetModal } from './components/ShareSheetModal';
import { GymReview } from './types';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedServiceForPass, setSelectedServiceForPass] = useState<string | undefined>(undefined);
  const [isDirectionsModalOpen, setIsDirectionsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'outside'>('all');
  const [customReviews, setCustomReviews] = useState<GymReview[]>([]);

  const handleOpenPassModal = (serviceName?: string) => {
    setSelectedServiceForPass(serviceName);
    setIsPassModalOpen(true);
  };

  const handleOpenPhotos = (category: 'all' | 'outside' = 'all') => {
    setGalleryFilter(category);
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddReview = (newRev: GymReview) => {
    setCustomReviews((prev) => [newRev, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] relative overflow-x-hidden selection:bg-[#F27D26] selection:text-white font-sans">
      
      {/* Background Spatial Grid and Glow Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#F27D26_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Dynamic Island Live Status Pill */}
      <DynamicIslandStatus
        onOpenPassModal={() => handleOpenPassModal('General Full Access')}
        onOpenDirections={() => setIsDirectionsModalOpen(true)}
      />

      {/* Transparent Editorial Header Navbar */}
      <TransparentNavbar
        onOpenPassModal={() => handleOpenPassModal('General Full Access')}
        onOpenDirections={() => setIsDirectionsModalOpen(true)}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
        onOpenPhotos={() => handleOpenPhotos('all')}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* 1. Hero Section & Quick Actions Cluster */}
        <HeroSection
          onOpenPassModal={() => handleOpenPassModal('General Full Access')}
          onOpenDirections={() => setIsDirectionsModalOpen(true)}
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
          onOpenShareModal={() => setIsShareModalOpen(true)}
          onOpenPhotosModal={handleOpenPhotos}
        />

        {/* 2. Popular Times Visualizer (Google Maps replica with 3 PM highlight) */}
        <PopularTimesVisualizer />

        {/* 3. 6 Core Pillars Showcase */}
        <ServicesShowcase onOpenPassModal={handleOpenPassModal} />

        {/* 4. Photo Gallery & Studio Visual Tour (See photos & See outside) */}
        <PhotoGallerySection initialFilter={galleryFilter} />

        {/* 5. iOS Macro & Diet Calculator */}
        <FitnessCalculator onOpenPassModal={handleOpenPassModal} />

        {/* 6. Membership Architecture Plans */}
        <MembershipPlans onOpenPassModal={handleOpenPassModal} />

        {/* 7. Community & Google Reviews */}
        <ReviewsSection
          onOpenWriteReview={() => setIsReviewModalOpen(true)}
          customReviews={customReviews}
        />

        {/* 8. Location, Maps & Directions */}
        <LocationSection onOpenDirections={() => setIsDirectionsModalOpen(true)} />

      </main>

      {/* Footer */}
      <Footer
        onOpenPassModal={() => handleOpenPassModal('General Full Access')}
        onOpenDirections={() => setIsDirectionsModalOpen(true)}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VIPPassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        defaultService={selectedServiceForPass}
      />

      <DirectionsModal
        isOpen={isDirectionsModalOpen}
        onClose={() => setIsDirectionsModalOpen(false)}
      />

      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />

      <ShareSheetModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

    </div>
  );
}
