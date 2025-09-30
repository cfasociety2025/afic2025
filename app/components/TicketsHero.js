'use client';

import Image from 'next/image';

export default function TicketsHero() {
  return (
    <section className="relative bg-gradient-to-l from-blue-600 via-blue-800 to-blue-900/90 py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Secure Your Place at AfIC 2025">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-800/40 to-blue-900/60" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Tickets
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-white mb-6 sm:mb-8"></div>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                  Secure your place at Africa's investment future. Join 500+ finance professionals, investors, and industry leaders at Africa's premier investment conference.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full max-w-2xl mx-auto">
              <Image
                src="/afic7.png"
                alt="Africa Investment Conference Tickets"
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


