import React, { useEffect } from 'react';
import { X } from './Icons';
import { ALL_AMENITIES_DATA } from '../data/allAmenitiesData';
import { getAmenityIcon } from './AmenitiesIcons';
import './AmenitiesModal.css';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="amenities-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="What this place offers"
    >
      <div
        className="amenities-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="amenities-modal-header">
          <button
            className="amenities-modal-close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <h2 className="amenities-modal-title">What this place offers</h2>
        </div>

        <div className="amenities-modal-body">
          {ALL_AMENITIES_DATA.map((group, groupIdx) => (
            <div key={groupIdx} className="amenity-category-group">
              <h3 className="amenity-category-heading">{group.category}</h3>
              {group.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`amenity-modal-row ${!item.available ? 'unavailable' : ''}`}
                >
                  <div className="amenity-modal-icon">
                    {getAmenityIcon(item.icon, 'w-6 h-6')}
                  </div>
                  <div className="amenity-modal-info">
                    <span className="amenity-modal-name">{item.name}</span>
                    {item.description && (
                      <span className="amenity-modal-desc">{item.description}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
