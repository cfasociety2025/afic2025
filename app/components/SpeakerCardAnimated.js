"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * SpeakerCard - A beautiful, animated speaker card component
 *
 * This is a standalone, exportable component that can be used in any React project.
 *
 * @example
 * ```jsx
 * import { SpeakerCardAnimated } from './components/SpeakerCardAnimated';
 *
 * function App() {
 *   return (
 *     <SpeakerCardAnimated
 *       image="https://example.com/photo.jpg"
 *       name="John Doe"
 *       position="CEO"
 *       company="Tech Corp"
 *       country="USA"
 *     />
 *   );
 * }
 * ```
 */

// Fallback image SVG for when image fails to load
const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

// MapPin Icon component (inline to avoid external dependencies)
const MapPinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    role="img"
    aria-label="Location icon"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export function SpeakerCardAnimated({
  image,
  name,
  position,
  company,
  country,
  onViewProfile,
}) {
  const [imageError, setImageError] = useState(false);
  
  // Check if this is the featured speaker to highlight
  const isFeaturedHighlight = name === "PS. Abubakar Hassan Abubakar, CBS";

  return (
    <div
      className="group relative w-72 h-[480px]"
      style={{ perspective: "1000px" }}
    >
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .group:hover .animate-on-hover-rotate {
          animation: rotate 8s linear infinite;
        }
        .group:hover .animate-on-hover-rotate-reverse {
          animation: rotate-reverse 6s linear infinite;
        }
        .group:hover .pop-out {
          transform: translateZ(40px) scale(1.05);
        }
      `}</style>

      {/* Main card */}
      <div
        className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl h-full flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
          <Image
            src="/cfa-logo.png"
            alt="CFA Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Animated logo on hover - top right */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-90 transition-all duration-500 z-30">
          <Image
            src="/cfa-logo.png"
            alt="CFA Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-purple-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm z-5 pointer-events-none" />

        {/* Profile image section with rotating border */}
        <div className="relative pt-8 pb-4 flex flex-col items-center transition-all duration-500 z-20">
          <div className="relative">
            {/* Rotating arc borders */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="absolute w-[240px] h-[240px] animate-on-hover-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                viewBox="0 0 240 240"
                role="img"
                aria-label="Decorative rotating border"
              >
                <circle
                  cx="120"
                  cy="120"
                  r="114"
                  fill="none"
                  stroke="url(#arc-gradient)"
                  strokeWidth="4"
                  strokeDasharray="180 540"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="arc-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="absolute w-[240px] h-[240px] animate-on-hover-rotate-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                viewBox="0 0 240 240"
                role="img"
                aria-label="Decorative rotating border"
              >
                <circle
                  cx="120"
                  cy="120"
                  r="114"
                  fill="none"
                  stroke="url(#arc-gradient2)"
                  strokeWidth="3"
                  strokeDasharray="120 540"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="arc-gradient2"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Profile image */}
            <div className={`relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl z-10 ${isFeaturedHighlight ? 'ring-4 ring-[#eab308]' : 'ring-4 ring-white'}`}>
              {imageError
                ? <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src={ERROR_IMG_SRC}
                      alt="Fallback avatar"
                      width={200}
                      height={200}
                    />
                  </div>
                : <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />}
            </div>

            {/* Country badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md ring-2 ring-purple-100 z-20">
              <MapPinIcon className="w-3 h-3 text-purple-600" />
              <span className="text-xs text-gray-700">{country}</span>
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="px-6 pb-6 pt-4 text-center relative z-30 flex-1 flex flex-col justify-between">
          <div className="pop-out transition-all duration-500">
            <h3 className="text-gray-900 mb-1 line-clamp-2 min-h-[3.5rem]">{name}</h3>
            <p className="text-purple-600 text-sm mb-1 line-clamp-2 min-h-[2.5rem]">{position}</p>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">{company}</p>
          </div>

          {/* View Profile Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Button clicked!");
              if (onViewProfile) {
                onViewProfile();
              }
            }}
            className="w-32 h-9 bg-[#0066FF] text-white text-sm rounded-full opacity-100 transition-all duration-300 hover:bg-[#0052CC] shadow-md cursor-pointer relative z-50 mx-auto"
          >
            View Profile
          </button>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
      </div>
    </div>
  );
}

export default SpeakerCardAnimated;
