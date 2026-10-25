import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Photo } from '../data/listingData';
import { ChevronLeft, ChevronRight, X, Share, Heart } from './Icons';
import './LightboxModal.css';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeThumbRef = useRef<HTMLDivElement>(null);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      onNavigate(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
      setIsTransitioning(false);
    }, 150);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      onNavigate(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
      setIsTransitioning(false);
    }, 150);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (activeThumbRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Photo link copied to clipboard!');
    }
  };

  return (
    <div
      className="lightbox-overlay animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Single photo viewer"
    >
      {/* Lightbox Header */}
      <header className="lightbox-header">
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close photo viewer (Esc)"
        >
          <X className="w-4 h-4" />
          <span>Close</span>
        </button>

        <div className="lightbox-counter" aria-live="polite">
          {currentIndex + 1} / {photos.length}
        </div>

        <div className="lightbox-header-actions">
          <button
            className="lightbox-icon-btn"
            onClick={handleShare}
            aria-label="Share photo"
          >
            <Share className="w-4 h-4" />
          </button>

          <button
            className="lightbox-icon-btn"
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#FF385C] text-[#FF385C]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Main Photo Stage */}
      <main className="lightbox-main-stage">
        {/* Previous Button */}
        <button
          className="lightbox-nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous photo (Left arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div
          className="lightbox-image-container"
          style={{
            opacity: isTransitioning ? 0.4 : 1,
            transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
          }}
        >
          <img
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className="lightbox-img"
          />

          <div className="lightbox-caption-box">
            <h3 className="lightbox-caption-title">
              {currentPhoto.title} · <span style={{ color: '#B0B0B0', fontWeight: 400 }}>{currentPhoto.category}</span>
            </h3>
            <p className="lightbox-caption-desc">{currentPhoto.description}</p>
          </div>
        </div>

        {/* Next Button */}
        <button
          className="lightbox-nav-btn next"
          onClick={handleNext}
          aria-label="Next photo (Right arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </main>

      {/* Filmstrip Thumbnails */}
      <nav className="lightbox-thumbnail-bar" aria-label="Photo thumbnails">
        {photos.map((p, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={p.id}
              ref={isActive ? activeThumbRef : null}
              className={`lightbox-thumb-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate(idx);
                }
              }}
              aria-label={`Jump to photo ${idx + 1}`}
              aria-current={isActive ? 'true' : 'false'}
            >
              <img
                src={p.thumbnail}
                alt=""
                className="lightbox-thumb-img"
                loading="lazy"
              />
            </div>
          );
        })}
      </nav>
    </div>
  );
};
