import React, { useRef, useState, useEffect } from 'react';
import { LISTING_DATA } from '../data/listingData';
import { ChevronLeft, ChevronRight, SolidStar } from './Icons';
import './SimilarStaysSection.css';

export const SimilarStaysSection: React.FC = () => {
  const { similarListings } = LISTING_DATA;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const totalPages = 2;

  if (!similarListings || similarListings.length === 0) return null;

  const updateScrollState = () => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setCurrentPage(scrollLeft > maxScroll / 2 ? 2 : 1);
    }
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handlePrev = () => {
    const el = viewportRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = viewportRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="similar-stays-section" aria-labelledby="similar-stays-heading">
      <div className="similar-stays-header-row">
        <h2 id="similar-stays-heading" className="similar-stays-title">
          More stays nearby
        </h2>

        <div className="similar-carousel-controls">
          <span className="similar-page-indicator">
            {currentPage} / {totalPages}
          </span>
          <div className="similar-arrow-btns">
            <button
              type="button"
              className={`similar-arrow-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous stays"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className={`similar-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next stays"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="similar-carousel-viewport" ref={viewportRef}>
        <div className="similar-carousel-track">
          {similarListings.map((item) => (
            <article key={item.id} className="similar-stay-card" tabIndex={0} role="button">
              <div className="similar-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="similar-card-img"
                  loading="lazy"
                />
              </div>
              <div className="similar-card-content">
                <h3 className="similar-card-title">{item.title}</h3>
                <div className="similar-price-rating-line">
                  <span className="similar-price-val">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="similar-rating-val">
                    <SolidStar className="similar-inline-star" />
                    <span>{item.rating.toFixed(item.rating % 1 === 0 ? 1 : 2)}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
