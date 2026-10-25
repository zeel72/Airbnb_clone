import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  X,
  Wifi,
  Utensils,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Camera,
  Ban,
  BbqGrillIcon,
  CeilingFanIcon,
  BuildingDoorIcon,
  SolidStar,
} from './Icons';
import { GuestFavouriteLaurelLeft, GuestFavouriteLaurelRight } from './GuestFavouriteWreaths';
import { AmenitiesModal } from './AmenitiesModal';
import { LISTING_DATA } from '../data/listingData';
import './ListingContent.css';

interface ListingContentProps {
  onShowAllPhotos: () => void;
}

export const ListingContent: React.FC<ListingContentProps> = () => {
  const [isDescModalOpen, setIsDescModalOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  const renderAmenityIcon = (name: string) => {
    switch (name) {
      case 'Kitchen': return <Utensils className="w-6 h-6" />;
      case 'Wifi': return <Wifi className="w-6 h-6" />;
      case 'Dedicated workspace': return <Laptop className="w-6 h-6" />;
      case 'Free parking on premises': return <Car className="w-6 h-6" />;
      case 'Pool': return <Waves className="w-6 h-6" />;
      case 'Hot tub': return <Bath className="w-6 h-6" />;
      case 'Pets allowed': return <PawPrint className="w-6 h-6" />;
      case 'Exterior security cameras on property': return <Camera className="w-6 h-6" />;
      case 'Carbon monoxide alarm': return <Ban className="w-6 h-6" />;
      case 'Smoke alarm': return <Ban className="w-6 h-6" />;
      default: return <Utensils className="w-6 h-6" />;
    }
  };

  return (
    <div className="listing-main-content">
      {/* Property Title & Stats (Matching Reference Screenshot 1 & 2) */}
      <div className="property-title-stats-block">
        <h2 className="property-main-type">
          {LISTING_DATA.type}
        </h2>
        <div className="property-specs-line">
          {LISTING_DATA.stats.guests} guests · {LISTING_DATA.stats.bedrooms} bedroom · {LISTING_DATA.stats.beds} bed · {LISTING_DATA.stats.baths} bathroom
        </div>
      </div>

      {/* Guest Favourite Card (Matching Reference Screenshot 2 & media_1792644210895.png) */}
      <div className="guest-favourite-card" role="region" aria-label="Guest favourite rating banner">
        <div className="gf-left-block">
          <div className="gf-wreath-wrapper">
            <GuestFavouriteLaurelLeft className="gf-wreath-icon" />
            <div className="gf-wreath-text">
              <span>Guest</span>
              <span>favourite</span>
            </div>
            <GuestFavouriteLaurelRight className="gf-wreath-icon" />
          </div>

          <div className="gf-desc-text">
            One of the most loved homes on Airbnb, according to guests
          </div>
        </div>

        <div className="gf-right-scores">
          <div className="gf-score-box">
            <div className="gf-score-num">{LISTING_DATA.rating.toFixed(2)}</div>
            <div className="gf-stars-row" aria-label={`Rating: ${LISTING_DATA.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <SolidStar key={i} className="gf-star-filled" />
              ))}
            </div>
          </div>

          <div className="gf-divider-line" aria-hidden="true" />

          <div className="gf-reviews-box">
            <div className="gf-reviews-count">{LISTING_DATA.reviewCount}</div>
            <a href="#reviews" className="gf-reviews-label">Reviews</a>
          </div>
        </div>
      </div>

      {/* Host Row (Matching Reference Screenshot 2) */}
      <div className="host-summary-row">
        <img
          src={LISTING_DATA.host.avatar}
          alt={LISTING_DATA.host.name}
          className="host-avatar-circle-img"
        />
        <div>
          <h3 className="host-name-title">Hosted by {LISTING_DATA.host.name}</h3>
          <p className="host-tenure">{LISTING_DATA.host.yearsHosting} years hosting</p>
        </div>
      </div>

      {/* Highlights List (Matching Reference Screenshot 2 & media_1792644210895.png) */}
      <div className="highlights-container">
        <div className="highlight-item">
          <BbqGrillIcon className="highlight-icon" />
          <div>
            <h4 className="highlight-heading">Outdoor entertainment</h4>
            <p className="highlight-sub">The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>

        <div className="highlight-item">
          <CeilingFanIcon className="highlight-icon" />
          <div>
            <h4 className="highlight-heading">Designed for staying cool</h4>
            <p className="highlight-sub">Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>

        <div className="highlight-item">
          <BuildingDoorIcon className="highlight-icon" />
          <div>
            <h4 className="highlight-heading">Self check-in</h4>
            <p className="highlight-sub">You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      {/* Auto-Translation Banner (Matching Reference Screenshot 2 & 3) */}
      <div className="translation-banner">
        Some info has been automatically translated. <strong>Show original</strong>
      </div>

      {/* Description Snippet (Matching Reference Screenshot 2 & 3) */}
      <p className="description-text-body">
        {LISTING_DATA.description}
      </p>

      <button
        className="btn-show-more-desc"
        onClick={() => setIsDescModalOpen(true)}
      >
        <span>Show more</span>
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Where You'll Sleep (Matching Reference Screenshot 3) */}
      <section className="sleeping-section" aria-labelledby="sleep-heading">
        <h3 id="sleep-heading" className="sleeping-section-title">
          Where you'll sleep
        </h3>
        <div className="sleeping-photo-cards">
          {LISTING_DATA.sleepingArrangements.map((item, idx) => (
            <div key={idx} className="sleep-photo-card">
              <div className="sleep-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.room}
                  className="sleep-card-img"
                  loading="lazy"
                />
              </div>
              <h4 className="sleep-room-title">{item.room}</h4>
              <p className="sleep-room-bed">{item.bedType}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What This Place Offers (Matching Reference Screenshot 4) */}
      <section className="amenities-section" id="amenities" aria-labelledby="amenities-heading">
        <h3 id="amenities-heading" className="sleeping-section-title">
          What this place offers
        </h3>

        <div className="amenities-grid-2col">
          {LISTING_DATA.amenities.map((item, idx) => (
            <div key={idx} className={`amenity-entry ${!item.available ? 'unavailable' : ''}`}>
              {renderAmenityIcon(item.name)}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <button
          className="btn-show-amenities"
          onClick={() => setIsAmenitiesModalOpen(true)}
        >
          Show all 50 amenities
        </button>
      </section>

      {/* Calendar Section (Matching Reference Screenshot 4) */}
      <section className="calendar-section" aria-labelledby="calendar-heading">
        <h3 id="calendar-heading" className="calendar-header-title">
          5 nights in Candolim
        </h3>
        <p className="calendar-header-dates">
          18 Oct 2026 - 23 Oct 2026
        </p>

        <div className="calendar-two-months-wrap">
          {/* October 2026 */}
          <div>
            <div className="cal-month-nav-row">
              <ChevronLeft className="w-4 h-4 cursor-pointer" />
              <span>October 2026</span>
              <span style={{ width: '16px' }} />
            </div>

            <div className="cal-days-row">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>

            <div className="cal-dates-grid">
              <span /><span /><span /><span />
              <span>1</span><span>2</span><span>3</span>
              <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
              <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
              <span className="cal-cell start-date">18</span>
              <span className="cal-cell range-middle">19</span>
              <span className="cal-cell range-middle">20</span>
              <span className="cal-cell range-middle">21</span>
              <span className="cal-cell range-middle">22</span>
              <span className="cal-cell end-date">23</span>
              <span className="cal-cell">24</span>
              <span className="cal-cell">25</span>
              <span className="cal-cell">26</span>
              <span className="cal-cell">27</span>
              <span className="cal-cell">28</span>
              <span className="cal-cell">29</span>
              <span className="cal-cell">30</span>
              <span className="cal-cell">31</span>
            </div>
          </div>

          {/* November 2026 */}
          <div>
            <div className="cal-month-nav-row">
              <span style={{ width: '16px' }} />
              <span>November 2026</span>
              <ChevronRight className="w-4 h-4 cursor-pointer" />
            </div>

            <div className="cal-days-row">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>

            <div className="cal-dates-grid">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
                <span
                  key={d}
                  className={`cal-cell ${d >= 18 && d <= 24 ? 'cal-cell-booked' : ''}`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Footer: Keyboard & Clear Dates (from Reference Screenshot) */}
        <div className="cal-footer-row">
          <button className="cal-keyboard-btn" type="button" aria-label="Keyboard shortcuts">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
            </svg>
          </button>
          <button className="cal-clear-dates-btn" type="button">
            Clear dates
          </button>
        </div>
      </section>

      {/* Description Modal */}
      {isDescModalOpen && (
        <div
          className="airbnb-modal-backdrop animate-fade-in"
          onClick={() => setIsDescModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="airbnb-modal-container animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="airbnb-modal-header">
              <h3 style={{ fontSize: '18px', fontWeight: 700 }}>About this space</h3>
              <button
                className="btn-icon"
                onClick={() => setIsDescModalOpen(false)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="airbnb-modal-body">
              <div style={{ whiteSpace: 'pre-line', lineHeight: 1.7, fontSize: '16px' }}>
                {LISTING_DATA.description}
                {'\n\n'}
                <strong>Other things to note:</strong>
                {'\n'}
                • Power backup is available to ensure uninterrupted Wi-Fi, lights, and fans during electrical outages.
                {'\n'}
                • The private jacuzzi is professionally sanitized and refilled with fresh water prior to each guest check-in.
                {'\n'}
                • High-speed optical fiber Wi-Fi is suitable for multiple HD video conference calls and streaming.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Amenities Modal */}
      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
      />
    </div>
  );
};
