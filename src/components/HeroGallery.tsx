import React from 'react';
import type { Photo } from '../data/listingData';
import './HeroGallery.css';

interface HeroGalleryProps {
  photos: Photo[];
  onOpenPhotoTour: (initialIndex?: number) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({ photos, onOpenPhotoTour }) => {
  const heroPhotos = photos.slice(0, 5);

  return (
    <section className="_Zndiww" id="hero-gallery" aria-label="Photos of this place">
      <div className="_DPzomV" id="heroGrid">
        {heroPhotos.map((photo, index) => (
          <button
            key={photo.id}
            className="_toiEJx"
            type="button"
            onClick={() => onOpenPhotoTour(index)}
            aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${index + 1}`}
          >
            <img
              src={photo.url}
              alt=""
              decoding="async"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>

      <button
        className="_ujAXFb"
        type="button"
        id="showAllPhotos"
        onClick={() => onOpenPhotoTour(0)}
        aria-label="Show all photos"
      >
        <span className="_Ljuvbv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}
          >
            <path
              fillRule="evenodd"
              d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
            />
          </svg>
        </span>
        Show all photos
      </button>
    </section>
  );
};
