import React, { useState, useEffect } from 'react';
import { TOUR_ROOMS } from '../data/tourRoomsData';
import type { Photo } from '../data/listingData';
import './PhotoTourModal.css';

interface PhotoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  onOpenLightbox: (photoIndex: number) => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  onClose,
  onOpenLightbox,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleScrollToRoom = (roomId: string) => {
    const el = document.getElementById(roomId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`_KpcKWX ${isOpen ? '_PjnNJs' : ''}`}
      id="_KpcKWX"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* 1. Sticky Header Bar */}
      <header className="_TCWfOg" id="tourBar">
        <button
          className="_ffpbhP _bNHEUf"
          type="button"
          aria-label="Back to listing"
          id="tourBack"
          onClick={onClose}
        >
          <span>
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '100%',
                width: '100%',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 2.5,
                overflow: 'visible',
              }}
            >
              <path
                d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <h2 className="_usJUoS">Photo tour</h2>

        <div className="_bLFgMg">
          <button
            className="_bNHEUf"
            type="button"
            aria-label="Share listing"
            onClick={handleShare}
            title={copied ? 'Link copied!' : 'Share listing'}
          >
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'none',
                  stroke: copied ? '#008A05' : 'currentColor',
                  strokeWidth: 2,
                  overflow: 'visible',
                }}
              >
                <path
                  d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                  fill="none"
                />
              </svg>
            </span>
          </button>

          <button
            className="_bNHEUf"
            type="button"
            aria-label={isSaved ? 'Saved to wishlist' : 'Save to wishlist'}
            onClick={() => setIsSaved(!isSaved)}
          >
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: isSaved ? '#FF385C' : 'none',
                  stroke: isSaved ? '#FF385C' : 'currentColor',
                  strokeWidth: 2,
                  overflow: 'visible',
                  transition: 'fill 0.2s ease, stroke 0.2s ease',
                }}
              >
                <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* 2. Scrollable Body Area */}
      <div className="_EpiBQR" id="tourScroll">
        <div className="_hKlfpJ">
          {/* Top Category Navigation Ribbon (8-column grid) */}
          <nav className="_tHVclZ" id="tourNav" aria-label="Photo categories">
            {TOUR_ROOMS.map((room) => (
              <button
                key={room.id}
                className="_gKVFNL"
                type="button"
                aria-label={`Jump to ${room.title}`}
                onClick={() => handleScrollToRoom(room.id)}
              >
                <img
                  loading="lazy"
                  alt=""
                  src={room.thumbnail}
                  aria-hidden="true"
                />
                <span className="_tAbhrW">{room.title}</span>
              </button>
            ))}
          </nav>

          {/* 9 Room Sections */}
          <div className="tour-rooms" id="tourRooms">
            {TOUR_ROOMS.map((room) => (
              <section className="_AWcqip" id={room.id} key={room.id}>
                {/* Sticky Left Column: Title & Features */}
                <div className="_yZYwUW">
                  <div className="_AnkvRF">{room.title}</div>
                  {room.features && (
                    <div className="_hvJgUS">{room.features}</div>
                  )}
                </div>

                {/* Right Column: Stacked 1-col & 2-col image grids */}
                <div className="_MbzoEk">
                  {room.rows.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className={`_wdcjGJ ${
                        row.layout === 'single' ? '_vmCONz' : '_DLVRjk'
                      }`}
                    >
                      {row.imgs.map((photo) => (
                        <button
                          key={photo.globalIndex}
                          className="_GXrMIo"
                          type="button"
                          data-idx={photo.globalIndex}
                          aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${
                            photo.globalIndex + 1
                          }`}
                          onClick={() => onOpenLightbox(photo.globalIndex)}
                        >
                          <img
                            loading="lazy"
                            alt={photo.alt}
                            src={photo.src}
                          />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
