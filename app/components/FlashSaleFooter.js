'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Local Icon Components (replacing lucide-react) ---
const ArrowRightIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TimerIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="13"
      r="7"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 10v4l2 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 3h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Internal Button Component ---
// Included here to make FlashSaleFooter a single, self-contained exportable file.
const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]",
    secondary: "bg-transparent text-white border border-white/20 hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-black/10 to-transparent z-0" />
      {children}
    </button>
  );
};

// --- Helper: Calculate Seconds Until Next Saturday 12:00 Noon ---
const getSecondsUntilSaturdayMidnight = () => {
  const now = new Date();
  const target = new Date();
  
  // Calculate days until next Saturday (Saturday is day 6)
  // If today is Saturday (6), diff is 0. If Sunday (0), diff is 6.
  const day = now.getDay();
  const daysUntilSat = (6 - day + 7) % 7; 
  
  target.setDate(now.getDate() + daysUntilSat);
  target.setHours(12, 0, 0, 0); // Set to 12:00:00 PM (noon)
  
  // If today is Saturday and we are past 12:00 noon, target next week's Saturday
  if (target.getTime() < now.getTime()) {
    target.setDate(target.getDate() + 7);
  }
  
  const diff = Math.floor((target.getTime() - now.getTime()) / 1000);
  return diff > 0 ? diff : 0;
};

// --- Helper: Breakdown Seconds into Units ---
const getTimeUnits = (totalSeconds) => {
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

// --- Sub-component: Creative Timer Display ---
const TimerDisplay = ({ seconds, isMobile = false }) => {
  const units = getTimeUnits(seconds);
  
  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className={`font-mono font-black text-white leading-none tabular-nums tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${isMobile ? 'text-lg' : 'text-3xl'}`}>
        {value.toString().padStart(2, '0')}
      </div>
      <div className={`font-bold text-[#2b69f8] uppercase leading-none ${isMobile ? 'text-[8px] mt-[2px]' : 'text-[10px] mt-1.5 tracking-[0.2em]'}`}>
        {label}
      </div>
    </div>
  );

  const Separator = () => (
    <div className={`font-black text-white/10 leading-none pb-2 select-none ${isMobile ? 'text-sm mx-1' : 'text-2xl mx-3'}`}>:</div>
  );

  return (
    <div className="flex items-end justify-center">
      <TimeUnit value={units.days} label={isMobile ? "D" : "DAYS"} />
      <Separator />
      <TimeUnit value={units.hours} label={isMobile ? "H" : "HRS"} />
      <Separator />
      <TimeUnit value={units.minutes} label={isMobile ? "M" : "MINS"} />
      <Separator />
      <TimeUnit value={units.seconds} label={isMobile ? "S" : "SECS"} />
    </div>
  );
};

// --- Main Flash Sale Footer Component ---

export const FlashSaleFooter = ({
  eventName = "AFIC 2025",
  originalPrice = 250,
  salePrice = 100,
  currencySymbol = "$",
  onBuy,
  offerEndsInSeconds, 
  registrationUrl = "https://app.glueup.com/event/156136/register/",
}) => {
  const handleBuy = onBuy || (() => window.open(registrationUrl, '_blank', 'noopener,noreferrer'));
  const [isVisible, setIsVisible] = useState(true);
  
  // Initialize timer: use prop if provided, otherwise calculate time until Saturday 12:00 noon
  const [timeLeft, setTimeLeft] = useState(() => {
    return offerEndsInSeconds !== undefined ? offerEndsInSeconds : getSecondsUntilSaturdayMidnight();
  });

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes flip {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
        `}
      </style>
      
      {/* Spacer to prevent content from being hidden behind the fixed footer */}
      <div className="h-[120px] md:h-[100px] w-full" aria-hidden="true" />
      
      {/* Main Footer Container - Full Width */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] font-sans">
        
        {/* Background & Effects Wrapper */}
        <div className="relative w-full bg-black border-t border-white/10 shadow-[0_0_50px_-12px_rgba(43,105,248,0.6)] overflow-hidden group">
          
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2b69f8] to-transparent opacity-60"></div>
          <div className="absolute left-0 bottom-0 w-1/4 h-32 bg-[#2b69f8]/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute right-0 bottom-0 w-1/4 h-32 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
          
          {/* Subtle moving sheen on background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2b69f8]/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none"></div>

          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-1 text-neutral-600 hover:text-white transition-colors z-20"
            aria-label="Close offer"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          {/* Content Container - Constrained Width for better readability on large screens */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10 pr-8 md:pr-0">
              
              {/* Left Section: Event & Pricing */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/10 shrink-0 shadow-[0_0_15px_rgba(43,105,248,0.15)] [perspective:1000px]">
                    <div className="w-6 h-6 relative animate-[flip_3s_linear_infinite]" style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(87%) saturate(2773%) hue-rotate(211deg) brightness(101%) contrast(96%)' }}>
                      <Image 
                        src="/ticket.svg" 
                        alt="Ticket" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-black text-white text-sm md:text-base tracking-wide uppercase leading-none mb-1">
                      {eventName}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-neutral-500 line-through decoration-[#2b69f8]/50 decoration-2 relative top-[-2px]">
                        {currencySymbol}{originalPrice}
                      </span>
                      <span className="text-3xl font-black text-white tracking-tighter drop-shadow-[0_0_8px_rgba(43,105,248,0.4)]">
                         <span className="text-[#2b69f8]">{currencySymbol}</span>{salePrice}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Only Timer */}
                <div className="md:hidden">
                  <div className="flex items-center justify-end gap-1.5 mb-1.5">
                     <TimerIcon className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                     <span className="text-xs uppercase font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">Ends in</span>
                  </div>
                  <TimerDisplay seconds={timeLeft} isMobile={true} />
                </div>
              </div>

              {/* Center Section: Timer & Urgency (Desktop) */}
              <div className="hidden md:flex flex-col items-center justify-center flex-1 border-x border-white/5 px-6 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.6)]"></div>
                  <span className="text-base font-black uppercase tracking-[0.15em] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse">
                    Flash Sale Ends In
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.6)]"></div>
                </div>
                
                <TimerDisplay seconds={timeLeft} isMobile={false} />
              </div>

              {/* Right Section: CTA */}
              <div className="w-full md:w-auto flex justify-end">
                 <Button onClick={handleBuy} className="w-full md:w-auto whitespace-nowrap group hover:shadow-[0_0_30px_rgba(43,105,248,0.3)]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      GRAB TICKETS
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                 </Button>
              </div>

            </div>
          </div>
          
          {/* Static Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2b69f8] shadow-[0_0_10px_#2b69f8]" />
        </div>
      </div>
    </>
  );
};