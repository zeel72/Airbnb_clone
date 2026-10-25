import React from 'react';
import './ThingsToKnowSection.css';

export const ThingsToKnowSection: React.FC = () => {
  return (
    <section className="things-section" aria-labelledby="things-heading">
      <h2 id="things-heading" className="things-title">
        Things to know
      </h2>

      <div className="things-grid">
        {/* 1. Cancellation Policy */}
        <div className="things-col">
          <svg
            className="things-header-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="10" y1="14" x2="14" y2="18" />
            <line x1="14" y1="14" x2="10" y2="18" />
          </svg>
          <h3 className="things-col-title">Cancellation policy</h3>
          <div className="things-text-group">
            <p className="things-text-p">
              Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
            </p>
            <p className="things-text-p">
              Review this host's full policy for details.
            </p>
          </div>
          <button
            type="button"
            className="things-learn-more-link"
          >
            Learn more
          </button>
        </div>

        {/* 2. House Rules */}
        <div className="things-col">
          <svg
            className="things-header-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="4" />
            <path d="m12 12 7 7v2h-2l-1-1v-2l-1-1" />
          </svg>
          <h3 className="things-col-title">House rules</h3>
          <div className="things-text-group">
            <p className="things-text-p">Check-in after 2:00 pm</p>
            <p className="things-text-p">Checkout before 11:00 am</p>
            <p className="things-text-p">3 guests maximum</p>
          </div>
          <button
            type="button"
            className="things-learn-more-link"
          >
            Learn more
          </button>
        </div>

        {/* 3. Safety & Property */}
        <div className="things-col">
          <svg
            className="things-header-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h3 className="things-col-title">Safety & property</h3>
          <div className="things-text-group">
            <p className="things-text-p">Carbon monoxide alarm not reported</p>
            <p className="things-text-p">Smoke alarm not reported</p>
            <p className="things-text-p">Exterior security cameras on property</p>
          </div>
          <button
            type="button"
            className="things-learn-more-link"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};
