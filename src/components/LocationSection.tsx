import React from 'react';
import { LISTING_DATA } from '../data/listingData';
import { ChevronRight } from './Icons';
import './LocationSection.css';

export const LocationSection: React.FC = () => {
  return (
    <section className="location-section" id="location" aria-labelledby="location-heading">
      <h2 className="location-title" id="location-heading">
        Where you’ll be
      </h2>
      <p className="location-subtitle">
        {LISTING_DATA.location.city}, {LISTING_DATA.location.state}, {LISTING_DATA.location.country}
      </p>

      {/* Map Container matching Reference Screenshot */}
      <div className="airbnb-map-canvas" role="region" aria-label="Location map of Candolim, Goa, India">
        <svg
          className="airbnb-map-svg"
          viewBox="0 0 1000 480"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Base Landmass (Soft Sage Green) */}
          <rect width="1000" height="480" fill="#EAF2E6" />

          {/* Sea / Arabian Sea (Soft Pastel Blue on left with diagonal border) */}
          <path d="M 0 0 L 400 0 L 230 480 L 0 480 Z" fill="#9FC7E6" />

          {/* Subtle Map Grid Lines */}
          <g stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1">
            {/* Vertical grid lines */}
            {[60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960].map((x) => (
              <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="480" />
            ))}
            {/* Horizontal grid lines */}
            {[60, 120, 180, 240, 300, 360, 420].map((y) => (
              <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} />
            ))}
          </g>

          {/* Circular green zones matching reference */}
          <circle cx="310" cy="200" r="55" fill="#D3E6CA" opacity="0.85" />
          <circle cx="650" cy="270" r="75" fill="#D3E6CA" opacity="0.85" />
        </svg>

        {/* Top-Left Search Button */}
        <button
          type="button"
          className="map-search-btn"
          aria-label="Search map"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#222222"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        {/* Center Black House Marker */}
        <div className="map-center-marker">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="map-house-icon"
          >
            <path d="M3 10L12 3l9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
            <path d="M9 21V12h6v9" />
          </svg>
        </div>

        {/* Top-Right Zoom Controls */}
        <div className="map-zoom-stack">
          <button type="button" className="map-zoom-btn" aria-label="Zoom in">
            +
          </button>
          <button type="button" className="map-zoom-btn" aria-label="Zoom out">
            −
          </button>
        </div>
      </div>

      {/* Post-Map Information matching Image 1 */}
      <p className="map-exact-location-note">
        Exact location will be provided after booking.
      </p>

      <div className="neighborhood-highlights-block">
        <h3 className="neighborhood-highlights-title">Neighbourhood highlights</h3>
        <p className="neighborhood-highlights-desc">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button type="button" className="neighborhood-show-more-link">
          <span>Show more</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
