'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutAfIC() {
  return (
    <section className="relative bg-[#06005A] py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="About AfIC">
      <div className="absolute inset-0 bg-[#08024a]" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                About Africa Investment Conference
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-white mb-6 sm:mb-8"></div>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                  The <strong>Africa Investment Conference (AfIC)</strong> is a flagship event bringing together global investors, policymakers, business leaders, and finance professionals to unlock Africa's investment potential and shape the continent's economic future.
                </p>
                
                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                  Powered by <strong>CFA Institute</strong> and hosted by leading CFA Societies across Africa, AfIC serves as a premier platform for exploring investment opportunities, fostering cross-border collaboration, and driving sustainable economic growth across the continent.
                </p>

                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                  Following the tremendous success of the inaugural <strong>AfIC 2023</strong> in Lagos, Nigeria, we are excited to announce that <strong>AfIC 2025</strong> will take place in <strong>Nairobi, Kenya</strong>, hosted by <strong>CFA Society East Africa</strong>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/tickets"
                  className="cta-primary px-8 py-4 font-bold uppercase tracking-wider text-sm text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center"
                  aria-label="Register for AfIC 2025"
                >
                  Register for AfIC 2025
                </Link>
                <Link
                  href="/agenda"
                  className="cta-secondary px-8 py-4 font-bold uppercase tracking-wider text-sm text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center"
                  aria-label="View Event Agenda"
                >
                  View Agenda
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full max-w-2xl mx-auto">
              <Image
                src="/afic23.png"
                alt="Africa Investment Conference Event"
                width={700}
                height={525}
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Additional Background Accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-800/15 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
