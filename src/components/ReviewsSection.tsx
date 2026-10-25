import React from 'react';
import { SolidStar } from './Icons';
import { LISTING_DATA } from '../data/listingData';
import './ReviewsSection.css';

export const ReviewsSection: React.FC = () => {
  const { ratingBreakdown, reviews, reviewTags } = LISTING_DATA;

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      {/* Giant 4.95 Laurel Wreath Header (Matching Reference Screenshot 5 & media_1792644237019.png) */}
      <div className="reviews-hero-wreath-header">
        <div className="wreath-score-container">
          {/* Authentic Left Laurel Branch */}
          <img
            src="/assets/images/ui/laurel-left.png"
            alt=""
            className="wreath-large-img"
            width="64"
            height="90"
          />

          <span className="giant-rating-num">{LISTING_DATA.rating.toFixed(2)}</span>

          {/* Authentic Right Laurel Branch */}
          <img
            src="/assets/images/ui/laurel-right.png"
            alt=""
            className="wreath-large-img"
            width="64"
            height="90"
          />
        </div>

        <h3 className="reviews-gf-title">Guest favourite</h3>
        <p className="reviews-gf-subtext">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <span className="reviews-how-it-works-link">How reviews work</span>
      </div>

      {/* Horizontal Category Score Columns (Matching Reference Screenshot 5) */}
      <div className="reviews-metrics-horizontal-row">
        {/* Overall rating bar chart */}
        <div className="metric-col-overall">
          <span className="metric-col-title">Overall rating</span>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="overall-bar-row">
              <span>{star}</span>
              <div className="overall-bar-track">
                <div
                  className="overall-bar-fill"
                  style={{ width: star === 5 ? '95%' : star === 4 ? '5%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cleanliness (Spray bottle icon) */}
        <div className="metric-col-item">
          <span className="metric-col-title">Cleanliness</span>
          <span className="metric-item-num">{ratingBreakdown.cleanliness.toFixed(1)}</span>
          <svg className="metric-item-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 11V6h4v5" />
            <path d="M12 11h10l-1.5 16h-7L12 11z" />
            <path d="M15 6h-3c-1.5 0-3 1-3 3v2h2" />
            <path d="M14 11v4" />
            <circle cx="26" cy="6" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="28" cy="11" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>

        {/* Accuracy (Checkmark circle) */}
        <div className="metric-col-item">
          <span className="metric-col-title">Accuracy</span>
          <span className="metric-item-num">{ratingBreakdown.accuracy.toFixed(1)}</span>
          <svg className="metric-item-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="16" cy="16" r="12" />
            <path d="M10 16l4 4 8-8" />
          </svg>
        </div>

        {/* Check-in (Key icon - circle top-left, shaft down-right) */}
        <div className="metric-col-item">
          <span className="metric-col-title">Check-in</span>
          <span className="metric-item-num">{ratingBreakdown.checkIn.toFixed(1)}</span>
          <svg className="metric-item-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="5" />
            <path d="m14.5 14.5 7.5 7.5" />
            <path d="m18.5 18.5-2 2" />
            <path d="m21 21-2 2" />
          </svg>
        </div>

        {/* Communication (Chat bubble icon) */}
        <div className="metric-col-item">
          <span className="metric-col-title">Communication</span>
          <span className="metric-item-num">{ratingBreakdown.communication.toFixed(1)}</span>
          <svg className="metric-item-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M5 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H11l-5 4v-4H8a3 3 0 0 1-3-3V8z" />
          </svg>
        </div>

        {/* Location (Folded map icon) */}
        <div className="metric-col-item">
          <span className="metric-col-title">Location</span>
          <span className="metric-item-num">{ratingBreakdown.location.toFixed(1)}</span>
          <svg className="metric-item-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M5 8l7-4 8 4 7-4v20l-7 4-8-4-7 4V8z" />
            <path d="M12 4v20" />
            <path d="M20 8v20" />
          </svg>
        </div>

        {/* Value (Price tag icon) */}
        {/* Value (Price tag icon) */}
        <div className="metric-col-item">
          <span className="metric-col-title">Value</span>
          <span className="metric-item-num">{ratingBreakdown.value.toFixed(1)}</span>
          <svg className="metric-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
            <circle cx="7.5" cy="7.5" r="1.25" stroke="currentColor" fill="none" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Review Tags Filter Pills (Matching Reference Screenshot 5) */}
      <div className="review-tags-scroll-row" role="region" aria-label="Review rating categories">
        {reviewTags.map((tag) => (
          <button key={tag.name} className="review-tag-pill" aria-label={`${tag.name} rated ${tag.count} times`}>
            {tag.image ? (
              <img src={tag.image} alt="" className="review-tag-chip-img" width="20" height="20" />
            ) : (
              <span>{tag.emoji}</span>
            )}
            <span>{tag.name}</span>
            <span className="count">{tag.count}</span>
          </button>
        ))}
      </div>

      {/* Reviews Cards Grid (Matching Reference Screenshot 5) */}
      <div className="reviews-grid-2col">
        {reviews.map((rev) => (
          <article key={rev.id} className="review-card-item">
            <div className="reviewer-user-row">
              {rev.avatarLetter ? (
                <div
                  className="reviewer-avatar-letter"
                  style={{
                    backgroundColor: rev.avatarBg || '#FBBF24',
                    color: rev.avatarColor || '#78350F',
                  }}
                >
                  {rev.avatarLetter}
                </div>
              ) : (
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="reviewer-avatar-img"
                  loading="lazy"
                />
              )}
              <div>
                <h4 className="reviewer-name-h4">{rev.author}</h4>
                <p className="reviewer-tenure-p">{rev.stayDuration}</p>
              </div>
            </div>

            <div className="review-stars-line">
              <div className="review-stars-group">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <SolidStar key={i} className="review-star-solid" />
                ))}
              </div>
              <span className="review-stars-dot">·</span>
              <span className="review-date-text">{rev.date}</span>
            </div>

            <p className="review-body-text">{rev.content}</p>

            {rev.hasShowMore && (
              <button type="button" className="review-show-more-btn">
                Show more
              </button>
            )}
          </article>
        ))}
      </div>

      {/* Show all 19 reviews button matching reference screenshot */}
      <div className="reviews-footer-actions">
        <button type="button" className="btn-show-all-reviews">
          Show all 19 reviews
        </button>
      </div>
    </section>
  );
};
