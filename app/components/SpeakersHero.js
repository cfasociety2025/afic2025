'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SpeakersHero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('December 10, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#06005A] py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="About CFA Society East Africa">
    {/* Background overlay for depth */}
    <div className="absolute inset-0 bg-[#08024a]" aria-hidden="true"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        
        {/* Left Column - Content */}
        <div className="text-white order-2 lg:order-1">
          <div className="max-w-xl">
            <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Speakers
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-white mb-6 sm:mb-8"></div>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {/* <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
              


              </p> */}
              
            
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="/tickets"
                className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center border border-white"
                aria-label="Register for AfIC 2025"
              >
                Register Now
              </a>
            </div> */}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-2">
          <div className="w-full max-w-2xl mx-auto">
            <Image
              src="/afic14.png"
              alt="Africa Investment Conference East Africa Event"
              width={700}
              height={525}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>

      </div>
    </div>

    {/* Additional Background Accents */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Radial highlight for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-800/15 rounded-full blur-3xl"></div>
    </div>
  </section>
  );
}
