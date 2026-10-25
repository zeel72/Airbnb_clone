import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus, Minus, Flag, CheckCircle } from './Icons';
import { LISTING_DATA } from '../data/listingData';
import './BookingCard.css';

export const BookingCard: React.FC = () => {
  // Guests state
  const [adults, setAdults] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState<boolean>(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState<boolean>(false);
  const [isClaimed, setIsClaimed] = useState<boolean>(false);

  const guestPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (guestPickerRef.current && !guestPickerRef.current.contains(e.target as Node)) {
        setIsGuestPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalGuests = adults + childrenCount;

  return (
    <aside className="booking-column-container" id="booking-card" aria-label="Reservation widget">
      {/* 10% Off Promo Card (from Reference Screenshot 1 & 2) */}
      <div className="promo-discount-card" role="region" aria-label="Special promotion">
        <div className="promo-left">
          {/* Authentic Green Price Tag Icon */}
          <img
            src="/assets/images/ui/discount.svg"
            alt=""
            className="promo-tag-img"
            width="28"
            height="28"
          />
          <div>
            <div className="promo-text-title">Get 10% off your next stay.</div>
            <a href="#terms" className="promo-terms-link" onClick={(e) => { e.preventDefault(); alert('10% promotional discount applied for this stay!'); setIsClaimed(true); }}>
              Terms apply
            </a>
          </div>
        </div>

        <button 
          className="promo-claim-btn"
          onClick={() => {
            setIsClaimed(true);
            alert('Promo discount claimed!');
          }}
        >
          {isClaimed ? 'Claimed' : 'Claim'}
        </button>
      </div>

      {/* Main Reservation Card (Matching Reference Screenshot 2, 3, 4) */}
      <div className="booking-card">
        {/* Price Header */}
        <div className="booking-price-header">
          <span className="booking-total-price">₹{LISTING_DATA.priceTotal.toLocaleString('en-IN')}</span>
          <span className="booking-nights-label">for {LISTING_DATA.totalNights} nights</span>
        </div>

        {/* Inputs Box */}
        <div className="booking-inputs-box">
          {/* Check-in / Checkout Row */}
          <div className="booking-date-row">
            <div className="booking-input-cell">
              <span className="booking-cell-label">Check-in</span>
              <span className="booking-cell-val">{LISTING_DATA.checkInDate}</span>
            </div>

            <div className="booking-input-cell">
              <span className="booking-cell-label">Checkout</span>
              <span className="booking-cell-val">{LISTING_DATA.checkOutDate}</span>
            </div>
          </div>

          {/* Guests Row */}
          <div
            className="booking-guest-cell"
            onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={isGuestPickerOpen}
            aria-label={`Guests: ${totalGuests} guests`}
          >
            <div>
              <span className="booking-cell-label">Guests</span>
              <span className="booking-cell-val">
                {totalGuests} guest{totalGuests > 1 ? 's' : ''}
              </span>
            </div>
            <ChevronDown
              className="w-4 h-4 text-[#222222]"
              style={{
                transform: isGuestPickerOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </div>

          {/* Guest Picker Popover */}
          {isGuestPickerOpen && (
            <div className="guest-picker-dropdown" ref={guestPickerRef} role="dialog" aria-label="Select guest counts">
              <div className="guest-type-row">
                <div>
                  <div className="guest-type-title">Adults</div>
                  <div className="guest-type-subtitle">Age 13+</div>
                </div>
                <div className="guest-counter-controls">
                  <button
                    className="counter-btn"
                    disabled={adults <= 1}
                    onClick={(e) => {
                      e.stopPropagation();
                      setAdults(adults - 1);
                    }}
                    aria-label="Decrease adults"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="counter-count">{adults}</span>
                  <button
                    className="counter-btn"
                    disabled={totalGuests >= 3}
                    onClick={(e) => {
                      e.stopPropagation();
                      setAdults(adults + 1);
                    }}
                    aria-label="Increase adults"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="guest-type-row">
                <div>
                  <div className="guest-type-title">Children</div>
                  <div className="guest-type-subtitle">Ages 2–12</div>
                </div>
                <div className="guest-counter-controls">
                  <button
                    className="counter-btn"
                    disabled={childrenCount <= 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      setChildrenCount(childrenCount - 1);
                    }}
                    aria-label="Decrease children"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="counter-count">{childrenCount}</span>
                  <button
                    className="counter-btn"
                    disabled={totalGuests >= 3}
                    onClick={(e) => {
                      e.stopPropagation();
                      setChildrenCount(childrenCount + 1);
                    }}
                    aria-label="Increase children"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div
                className="guest-dropdown-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGuestPickerOpen(false);
                }}
              >
                Close
              </div>
            </div>
          )}
        </div>

        {/* Free Cancellation Pill Badge (Matching Reference Screenshot 2) */}
        <div className="cancellation-pill-badge">
          Free cancellation before <strong>{LISTING_DATA.cancellationDeadline}</strong>
        </div>

        {/* Reserve Button */}
        <button
          className="btn-reserve-airbnb"
          onClick={() => setIsReserveModalOpen(true)}
          aria-label="Reserve"
        >
          Reserve
        </button>

        <p className="booking-subtext">You won't be charged yet</p>
      </div>

      {/* Report this listing */}
      <div className="report-listing-row" role="button" tabIndex={0}>
        <Flag className="w-4 h-4 text-[#717171]" />
        <span>Report this listing</span>
      </div>

      {/* Reservation Confirmation Modal */}
      {isReserveModalOpen && (
        <div
          className="airbnb-modal-backdrop animate-fade-in"
          onClick={() => setIsReserveModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="airbnb-modal-container animate-scale-in"
            style={{ maxWidth: '440px', padding: '32px', textAlign: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#DCFCE7',
                color: '#16A34A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              Reservation Confirmed!
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
              Your booking for Romantic Jacuzzi 1BHK Candolim is confirmed.
            </p>

            <div
              style={{
                background: '#F7F7F7',
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              <div><strong>Dates:</strong> 18 Oct 2026 – 23 Oct 2026 (5 nights)</div>
              <div><strong>Guests:</strong> {totalGuests} guests</div>
              <div><strong>Total:</strong> ₹{LISTING_DATA.priceTotal.toLocaleString('en-IN')}</div>
              <div><strong>Host:</strong> Mirashya Homes</div>
            </div>

            <button
              className="btn-reserve-airbnb"
              onClick={() => setIsReserveModalOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
