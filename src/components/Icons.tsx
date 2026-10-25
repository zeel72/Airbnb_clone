import React from 'react';
import {
  Share,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Grid,
  MapPin,
  Shield,
  Award,
  KeyRound,
  CalendarCheck,
  Laptop,
  Sparkles,
  Bath,
  Wifi,
  Waves,
  Wind,
  Utensils,
  Tv,
  Car,
  Shirt,
  Trees,
  ArrowUpDown,
  Microwave,
  Coffee,
  ShowerHead,
  ShieldCheck,
  Flame,
  Zap,
  Clock,
  Users,
  Ban,
  PawPrint,
  VolumeX,
  Camera,
  AlertCircle,
  CheckCircle,
  Info,
  FileText,
  Search,
  Globe,
  Menu,
  User,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Maximize2,
  Minimize2,
  ExternalLink,
  Layers,
  Server,
  Database,
  Cpu,
  Cloud,
  Flag,
  ShoppingBag,
  DoorOpen
} from 'lucide-react';

export const Cross: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6v12M6 12h12" />
  </svg>
);

export const AirbnbLogo: React.FC<{ className?: string }> = ({ className = 'h-8 text-[#FF385C]' }) => (
  <svg
    viewBox="0 0 1024 1024"
    className={className}
    fill="currentColor"
    width="32"
    height="32"
    aria-hidden="true"
  >
    <path d="M512 0c-154.6 0-280 125.4-280 280 0 181.7 200.7 445.8 259.9 519.8 10.1 12.6 29.9 12.6 40 0C591.3 725.8 792 461.7 792 280 792 125.4 666.6 0 512 0zm0 721.2C437.3 624.4 296 433.8 296 280c0-119.1 96.9-216 216-216s216 96.9 216 216c0 153.8-141.3 344.4-216 441.2z" opacity="0" />
    <path d="M512 928C320.6 928 160 767.4 160 576c0-117.8 59.8-228.6 160-294.6V160c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v121.4c100.2 66 160 176.8 160 294.6 0 191.4-160.6 352-352 352z" opacity="0" />
    {/* Authentic Airbnb Bélo Shape */}
    <path d="M512 879.3c-23.7 0-46.1-9.3-63-26.3-43.2-43.5-73.4-118.8-100.8-197.8-31-89.4-58.8-189.9-93.5-274.6-25.2-61.4-44.5-104.7-64.8-132.8-23.2-32.2-46.4-46.4-71.1-46.4-36.5 0-66.8 27.6-77.2 69.9-15.6 63.7 3.3 145.4 46.1 230 4.1 8 1.1 17.8-6.9 22-8 4.1-17.8 1.1-22-6.9-46.6-92-67.4-182.2-50.1-253.1 14.5-59.5 59.6-99.7 110.1-99.7 36.8 0 71.3 20.3 103 64.3 22.8 31.6 43.4 77.2 69.4 140.5 34.3 83.7 61.8 183.1 92.5 271.7 25.5 73.5 53 142.3 88.4 177.8 11.2 11.3 26 17.5 41.8 17.5 15.8 0 30.6-6.2 41.8-17.5 35.4-35.5 62.9-104.3 88.4-177.8 30.7-88.6 58.2-188 92.5-271.7 26-63.3 46.6-108.9 69.4-140.5 31.7-44 66.2-64.3 103-64.3 50.5 0 95.6 40.2 110.1 99.7 17.3 70.9-3.5 161.1-50.1 253.1-4.1 8-13.9 11-22 6.9-8-4.1-11-13.9-6.9-22 42.8-84.6 61.7-166.3 46.1-230-10.4-42.3-40.7-69.9-77.2-69.9-24.7 0-47.9 14.2-71.1 46.4-20.3 28.1-39.6 71.4-64.8 132.8-34.7 84.7-62.5 185.2-93.5 274.6-27.4 79-57.6 154.3-100.8 197.8-16.9 17-39.3 26.3-63 26.3z" />
    <path d="M512 590c-44.1 0-80-35.9-80-80 0-44.1 35.9-80 80-80s80 35.9 80 80c0 44.1-35.9 80-80 80zm0-128c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
  </svg>
);

export const LaurelWreathLeft: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M12.4 2.8c.4 1-.2 2.2-1.2 2.6-3 1.2-5.4 3.7-6.8 6.7-.4 1-1.6 1.4-2.6 1-.9-.4-1.4-1.6-1-2.6 1.8-3.9 4.9-7 8.8-8.5 1-.4 2.2.2 2.8 1.2zM4.3 16.5c-.3 1.1-1.4 1.7-2.5 1.4-1.1-.3-1.7-1.4-1.4-2.5 1.1-4.2 3.8-7.9 7.4-10.3 1-.6 2.2-.4 2.8.6.6 1 .4 2.2-.6 2.8-2.9 2-5 5-5.7 8.5zM2.8 23.2c.4 1-.1 2.2-1.1 2.7-1 .4-2.2-.1-2.7-1.1-.8-1.9-1.2-4-1.2-6.1 0-1.1.9-2 2-2s2 .9 2 2c0 1.5.3 3 .8 4.5z" />
  </svg>
);

export const LaurelWreathRight: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
    <path d="M12.4 2.8c.4 1-.2 2.2-1.2 2.6-3 1.2-5.4 3.7-6.8 6.7-.4 1-1.6 1.4-2.6 1-.9-.4-1.4-1.6-1-2.6 1.8-3.9 4.9-7 8.8-8.5 1-.4 2.2.2 2.8 1.2zM4.3 16.5c-.3 1.1-1.4 1.7-2.5 1.4-1.1-.3-1.7-1.4-1.4-2.5 1.1-4.2 3.8-7.9 7.4-10.3 1-.6 2.2-.4 2.8.6.6 1 .4 2.2-.6 2.8-2.9 2-5 5-5.7 8.5zM2.8 23.2c.4 1-.1 2.2-1.1 2.7-1 .4-2.2-.1-2.7-1.1-.8-1.9-1.2-4-1.2-6.1 0-1.1.9-2 2-2s2 .9 2 2c0 1.5.3 3 .8 4.5z" />
  </svg>
);

export const BedDoubleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" />
    <path d="M2 8h20v8H2z" />
    <path d="M22 4v16" />
    <path d="M6 8V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3" />
    <path d="M13 8V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3" />
  </svg>
);

export const SofaIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
    <path d="M12 5v9" />
  </svg>
);

export const DotGridIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    <circle cx="2.5" cy="2.5" r="1.5" />
    <circle cx="8" cy="2.5" r="1.5" />
    <circle cx="13.5" cy="2.5" r="1.5" />
    <circle cx="2.5" cy="8" r="1.5" />
    <circle cx="8" cy="8" r="1.5" />
    <circle cx="13.5" cy="8" r="1.5" />
    <circle cx="2.5" cy="13.5" r="1.5" />
    <circle cx="8" cy="13.5" r="1.5" />
    <circle cx="13.5" cy="13.5" r="1.5" />
  </svg>
);

export const BbqGrillIcon: React.FC<{ className?: string }> = ({ className = 'highlight-icon' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 3.5a2 2 0 0 1 4 0" />
    <path d="M5 8.5a7 7 0 0 1 14 0" />
    <path d="M3.5 8.5h17" />
    <path d="M5 8.5a7 7 0 0 0 14 0" />
    <path d="M7 15.5l-2.5 5.5M17 15.5l2.5 5.5" />
    <path d="M6.5 19h11" />
  </svg>
);

export const CeilingFanIcon: React.FC<{ className?: string }> = ({ className = 'highlight-icon' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 9.8C12 5.5 14.5 3 17 3c.2 2-1 6.8-5 6.8" />
    <path d="M14.2 12c4.3 0 6.8 2.5 6.8 5-2 .2-6.8-1-6.8-5" />
    <path d="M12 14.2C12 18.5 9.5 21 7 21c-.2-2 1-6.8 5-6.8" />
    <path d="M9.8 12C5.5 12 3 9.5 3 7c2-.2 6.8 1 6.8 5" />
  </svg>
);

export const BuildingDoorIcon: React.FC<{ className?: string }> = ({ className = 'highlight-icon' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 21V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17" />
    <path d="M2 21h20" />
    <path d="M5 5v16h8V5H5z" />
    <path d="M10 13h2" />
  </svg>
);

export const SolidStar: React.FC<{ className?: string }> = ({ className = 'w-3 h-3' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export {
  Share,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Grid,
  MapPin,
  Shield,
  Award,
  KeyRound,
  CalendarCheck,
  Laptop,
  Sparkles,
  Bath,
  Wifi,
  Waves,
  Wind,
  Utensils,
  Tv,
  Car,
  Shirt,
  Trees,
  ArrowUpDown,
  Microwave,
  Coffee,
  ShowerHead,
  ShieldCheck,
  Flame,
  Zap,
  Clock,
  Users,
  Ban,
  PawPrint,
  VolumeX,
  Camera,
  AlertCircle,
  CheckCircle,
  Info,
  FileText,
  Search,
  Globe,
  Menu,
  User,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Maximize2,
  Minimize2,
  ExternalLink,
  Layers,
  Server,
  Database,
  Cloud,
  Cpu,
  Flag,
  ShoppingBag,
  DoorOpen
};
