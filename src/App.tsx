import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { StickyNav } from './components/StickyNav';
import { ListingHeader } from './components/ListingHeader';
import { HeroGallery } from './components/HeroGallery';
import { ListingContent } from './components/ListingContent';
import { BookingCard } from './components/BookingCard';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { HostSection } from './components/HostSection';
import { ThingsToKnowSection } from './components/ThingsToKnowSection';
import { SimilarStaysSection } from './components/SimilarStaysSection';
import { PhotoTourModal } from './components/PhotoTourModal';
import { LightboxModal } from './components/LightboxModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { LISTING_DATA, LISTING_PHOTOS } from './data/listingData';
import './App.css';

export function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(0);
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);

  // Sync state with ?modal=PHOTO_TOUR_SCROLLABLE URL param
  useEffect(() => {
    const checkModalParam = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('modal') === 'PHOTO_TOUR_SCROLLABLE') {
        setIsPhotoTourOpen(true);
      } else {
        setIsPhotoTourOpen(false);
      }
    };

    checkModalParam();
    window.addEventListener('popstate', checkModalParam);
    return () => window.removeEventListener('popstate', checkModalParam);
  }, []);

  const handleOpenPhotoTour = useCallback((_initialIndex: number = 0) => {
    setIsPhotoTourOpen(true);
    const url = new URL(window.location.href);
    url.searchParams.set('modal', 'PHOTO_TOUR_SCROLLABLE');
    window.history.pushState({}, '', url.toString());
  }, []);

  const handleClosePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('modal');
    const newUrl = url.pathname + (url.search ? url.search : '');
    window.history.pushState({}, '', newUrl);
  }, []);

  const handleOpenLightbox = useCallback((index: number) => {
    setLightboxPhotoIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const handleReserveScroll = () => {
    const el = document.getElementById('booking-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="airbnb-app">
      {/* 1. Global Navigation Header */}
      <Header
        onSearchClick={() => {
          const el = document.getElementById('booking-card');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Sticky Subnav on scroll */}
      <StickyNav onReserveClick={handleReserveScroll} />

      {/* 3. Main Property Page Container */}
      <main className="listing-page-main">
        <div className="container">
          {/* Listing Title & Actions */}
          <ListingHeader title={LISTING_DATA.title} />

          {/* Hero 5-Photo Collage with floating Show All Photos button */}
          <HeroGallery
            photos={LISTING_PHOTOS}
            onOpenPhotoTour={handleOpenPhotoTour}
          />

          {/* 2-Column Content Grid: Left details + Right sticky booking card */}
          <div className="listing-content-grid">
            <div className="listing-left-col">
              <ListingContent
                onShowAllPhotos={() => handleOpenPhotoTour(0)}
              />
            </div>

            <div className="listing-right-col">
              <BookingCard />
            </div>
          </div>

          <div className="section-divider" />

          {/* Reviews Section with Metrics and Real Chips */}
          <ReviewsSection />

          <div className="section-divider" />

          {/* Location / Interactive Map */}
          <LocationSection />

          <div className="section-divider" />

          {/* Host Profile Section */}
          <HostSection />

          <div className="section-divider" />

          {/* Things to Know Section */}
          <ThingsToKnowSection />

          <div className="section-divider" />

          {/* More Stays Nearby */}
          <SimilarStaysSection />
        </div>
      </main>

      {/* View 2: Full-screen Photo Tour Modal (?modal=PHOTO_TOUR_SCROLLABLE) */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        onClose={handleClosePhotoTour}
        photos={LISTING_PHOTOS}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* View 3: Single-Photo Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        photos={LISTING_PHOTOS}
        currentIndex={lightboxPhotoIndex}
        onNavigate={(newIdx) => setLightboxPhotoIndex(newIdx)}
      />

      {/* Architecture Scaling Strategy Modal */}
      <ArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />
    </div>
  );
}

export default App;
