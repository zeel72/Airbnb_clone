import React from 'react';
import { LISTING_DATA } from '../data/listingData';
import './HostSection.css';

export const HostSection: React.FC = () => {
  const { host } = LISTING_DATA;

  return (
    <section className="host-section" aria-labelledby="host-heading">
      <h2 id="host-heading" className="host-section-title">
        Meet your host
      </h2>

      <div className="host-main-layout">
        {/* Left Column: Floating host card + bottom facts */}
        <div className="host-left-col">
          <div className="host-floating-card">
            <div className="host-card-user-info">
              <div className="host-avatar-wrap">
                <img
                  src={host.avatar}
                  alt={host.name}
                  className="host-avatar-img"
                  loading="lazy"
                />
                <div className="host-verified-badge" title="Identity verified">
                  <svg viewBox="0 0 16 16" fill="none" className="host-check-icon">
                    <path
                      d="M3.5 8.5L6.5 11.5L12.5 5.5"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="host-card-name">{host.name}</h3>
              <p className="host-card-role">Host</p>
            </div>

            <div className="host-card-stats-col">
              <div className="host-card-stat-item">
                <span className="host-card-stat-num">{host.reviews.toLocaleString('en-IN')}</span>
                <span className="host-card-stat-lbl">Reviews</span>
              </div>
              <div className="host-card-stat-divider" />
              <div className="host-card-stat-item">
                <span className="host-card-stat-num">{host.rating.toFixed(2)}★</span>
                <span className="host-card-stat-lbl">Rating</span>
              </div>
              <div className="host-card-stat-divider" />
              <div className="host-card-stat-item">
                <span className="host-card-stat-num">{host.yearsHosting}</span>
                <span className="host-card-stat-lbl">Years hosting</span>
              </div>
            </div>
          </div>

          <div className="host-facts-list">
            <div className="host-fact-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="host-fact-icon"
                aria-hidden="true"
              >
                <ellipse cx="12" cy="9" rx="6" ry="7" />
                <path d="M12 16l-1 2h2l-1-2" />
                <path d="M12 18c-1 2 2 3 0 5" />
              </svg>
              <span>Born in the 80s</span>
            </div>
            <div className="host-fact-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="host-fact-icon"
                aria-hidden="true"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
              </svg>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts + Host details */}
        <div className="host-right-col">
          <div className="co-hosts-section">
            <h3 className="co-hosts-heading">Co-Hosts</h3>
            <div className="co-hosts-grid-3col">
              {host.coHosts?.map((co, i) => (
                <div key={i} className="co-host-card">
                  {co.avatar ? (
                    <img src={co.avatar} alt={co.name} className="co-host-avatar" loading="lazy" />
                  ) : (
                    <div
                      className="co-host-avatar-letter"
                      style={{ backgroundColor: co.bg || '#FCE7F3', color: co.color || '#9D174D' }}
                    >
                      {co.letter || co.name.charAt(0)}
                    </div>
                  )}
                  <span className="co-host-name">{co.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="host-details-group">
            <h3 className="host-details-heading">Host details</h3>
            <p className="host-detail-line">Response rate: {host.responseRate}%</p>
            <p className="host-detail-line">Responds {host.responseTime}</p>

            <button
              type="button"
              className="btn-message-host"
            >
              Message host
            </button>

            <div className="host-protection-row">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="host-shield-icon"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
