import React from 'react';
import { Globe } from './Icons';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-nav-grid">
          <div>
            <h4 className="footer-column-title">Support</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#help">Help Center</a></li>
              <li className="footer-link-item"><a href="#aircover">AirCover</a></li>
              <li className="footer-link-item"><a href="#anti-discrimination">Anti-discrimination</a></li>
              <li className="footer-link-item"><a href="#disability">Disability support</a></li>
              <li className="footer-link-item"><a href="#cancellation">Cancellation options</a></li>
              <li className="footer-link-item"><a href="#report-concern">Report neighborhood concern</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Hosting</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#airbnb-your-home">Airbnb your home</a></li>
              <li className="footer-link-item"><a href="#aircover-hosts">AirCover for Hosts</a></li>
              <li className="footer-link-item"><a href="#hosting-resources">Hosting resources</a></li>
              <li className="footer-link-item"><a href="#community-forum">Community forum</a></li>
              <li className="footer-link-item"><a href="#hosting-responsibly">Hosting responsibly</a></li>
              <li className="footer-link-item"><a href="#join-class">Join a free Hosting class</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Airbnb</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#newsroom">Newsroom</a></li>
              <li className="footer-link-item"><a href="#new-features">New features</a></li>
              <li className="footer-link-item"><a href="#careers">Careers</a></li>
              <li className="footer-link-item"><a href="#investors">Investors</a></li>
              <li className="footer-link-item"><a href="#gift-cards">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal-links">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#privacy">Privacy</a>
            <span>·</span>
            <a href="#terms">Terms</a>
            <span>·</span>
            <a href="#sitemap">Sitemap</a>
            <span>·</span>
            <a href="#company-details">Company details</a>
          </div>

          <div className="footer-preferences">
            <button className="pref-btn" aria-label="Language selection">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>
            <button className="pref-btn" aria-label="Currency selection">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
