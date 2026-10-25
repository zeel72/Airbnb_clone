import React, { useState, useEffect } from 'react';
import { SolidStar } from './Icons';
import { LISTING_DATA } from '../data/listingData';
import './StickyNav.css';

interface StickyNavProps {
  onReserveClick: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({ onReserveClick }) => {
  const [activeSection, setActiveSection] = useState<'photos' | 'amenities' | 'reviews' | 'location'>('photos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero-gallery') || document.getElementById('_Zndiww') || document.getElementById('photos');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Become visible as soon as hero photos scroll past header / top
        setIsVisible(rect.bottom <= 80 || window.scrollY > 420);
      } else {
        setIsVisible(window.scrollY > 420);
      }

      const sections: Array<'photos' | 'amenities' | 'reviews' | 'location'> = [
        'location',
        'reviews',
        'amenities',
        'photos',
      ];

      for (const section of sections) {
        const el = document.getElementById(section) || (section === 'photos' ? document.getElementById('_Zndiww') : null);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 130;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="sticky-subnav" aria-label="Listing navigation tabs">
      <div className="container sticky-subnav-container">
        <div className="subnav-links">
          <a
            href="#photos"
            className={`subnav-link ${activeSection === 'photos' ? 'active' : ''}`}
            onClick={(e) => scrollToSection('photos', e)}
          >
            Photos
          </a>
          <a
            href="#amenities"
            className={`subnav-link ${activeSection === 'amenities' ? 'active' : ''}`}
            onClick={(e) => scrollToSection('amenities', e)}
          >
            Amenities
          </a>
          <a
            href="#reviews"
            className={`subnav-link ${activeSection === 'reviews' ? 'active' : ''}`}
            onClick={(e) => scrollToSection('reviews', e)}
          >
            Reviews
          </a>
          <a
            href="#location"
            className={`subnav-link ${activeSection === 'location' ? 'active' : ''}`}
            onClick={(e) => scrollToSection('location', e)}
          >
            Location
          </a>
        </div>

        <div className="subnav-booking-summary">
          <div className="subnav-price-block">
            <span className="subnav-price">₹{LISTING_DATA.priceTotal.toLocaleString('en-IN')}</span>
            <span className="subnav-unit"> for {LISTING_DATA.totalNights} nights</span>
            <div className="subnav-rating">
              <SolidStar className="subnav-star" />
              <span>{LISTING_DATA.rating.toFixed(2)}</span>
              <span style={{ color: 'var(--color-text-secondary)', marginLeft: '4px' }}>
                · {LISTING_DATA.reviewCount} reviews
              </span>
            </div>
          </div>

          <button 
            className="subnav-reserve-btn"
            style={{ backgroundColor: '#E61E4D', background: '#E61E4D' }}
            onClick={onReserveClick}
            aria-label="Reserve this property"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
};
