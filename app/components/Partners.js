'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Partners() {
  const hostingPartners = [
    {
      type: "Hosted by",
      name: "CFA Society East Africa",
      logo: "/Society_East-Africa_RGB.png",
      url: "https://www.cfasociety.org/eastafrica"
    },
    {
      type: "Powered by", 
      name: "CFA Institute",
      logo: "/CFA Institute.png",
      url: "https://www.cfainstitute.org"
    }
  ];

  const cfaPartners = [
    { 
      name: "CFA Society Nigeria", 
      logo: "/ngncfa.png", 
      url: "https://www.cfasociety.org/nigeria"
    },
    { 
      name: "CFA Society South Africa", 
      logo: "/cfasa.png", 
      url: "https://www.cfasociety.org/southafrica" 
    },
    { 
      name: "CFA Society Mauritius", 
      logo: "/cfamau.png", 
      url: "https://www.cfasociety.org/mauritius" 
    },
    { 
      name: "CFA Society Egypt", 
      logo: "/cfaegy.png", 
      url: "https://www.cfasociety.org/egypt" 
    },
    { 
      name: "CFA Society Ghana", 
      logo: "/cfagn.png", 
      url: "https://www.cfasociety.org/ghana" 
    }
  ];

  // Diamond Sponsor - Featured prominently
  const diamondSponsor = {
    name: "Africa Finance Corporation",
    logo: "/sponsors/afc.svg",
    url: "https://www.africafc.org/"
  };

  // Silver Sponsors
  const silverSponsors = [
    { name: "TDB Group", logo: "/sponsors/tdb.png", url: "https://www.tdbgroup.org/" },
    { name: "NSSF", logo: "/sponsors/nssf.PNG", url: "https://www.nssfug.org/" },
  ];

  // Other Sponsors
  const sponsors = [
    { name: "Capital Savvy", logo: "/sponsors/capitalsavvy.png", url: "https://capitalsavvy.pro/" },
    { name: "Mwango Capital", logo: "/sponsors/mwango.png", url: "https://mwangocapital.com/" },
    { name: "African Allocator", logo: "/sponsors/african-allocator.PNG", url: "#" },
    { name: "Sun La Vie", logo: "/sponsors/sunlavie.PNG", url: "https://sunlavie.co.ke/" },
    { name: "TASK", logo: "/sponsors/task.png", url: "https://www.actuarieskenya.or.ke/" },
    { name: "Turelabs", logo: "/sponsors/ture.png", url: "https://turelabs.com/" },
    { name: "EAVCA", logo: "/sponsors/eavca.png", url: "https://www.eavca.org/" }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    let isPaused = false;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          
          // Reset to start when reaching the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScrolling();

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const HostingPartnerCard = ({ partner }) => (
    <div className="text-center">
      <p className="text-sm sm:text-base text-gray-600 uppercase tracking-wider mb-4 sm:mb-6 font-medium">
        {partner.type}
      </p>
      <Link 
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-lg"
        aria-label={`Visit ${partner.name} website`}
      >
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={200}
            height={80}
            className="w-full h-14 sm:h-18 lg:h-18 object-contain mx-auto"
            priority
          />
        </div>
      </Link>
    </div>
  );

  const PartnershipCard = ({ partner }) => (
    <Link 
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-lg"
      aria-label={`Visit ${partner.name} website`}
    >
      <div className="bg-white p-6 sm:p-4 lg:p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={200}
          height={80}
          className="w-full h-14 sm:h-16 lg:h-18 object-contain mx-auto"
        />
      </div>
    </Link>
  );


  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cfa-warm-white" role="region" aria-label="Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-dark-blue mb-4 sm:mb-6">
            Partners
          </h2>
          {/* <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            AfIC 2025 is proudly hosted by CFA Society East Africa in collaboration with 
            CFA Institute and CFA societies across the continent.
          </p> */}
        </div>

        {/* Hosting Partners */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto">
            {hostingPartners.map((partner, index) => (
              <HostingPartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* CFA Society Partners */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="section-header text-xl sm:text-2xl lg:text-3xl text-cfa-dark-blue mb-2 sm:mb-3">
              In Partnership With
            </h3>
            {/* <p className="body-copy text-sm sm:text-base text-gray-600">
              CFA Societies across Africa
            </p> */}
          </div>
          
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {cfaPartners.map((partner, index) => (
              <PartnershipCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="section-header text-xl sm:text-2xl lg:text-3xl text-cfa-dark-blue mb-2 sm:mb-3">
              Our Sponsors
            </h3>
            <p className="body-copy text-sm sm:text-base text-gray-600">
              Thank you to our sponsors for making AfIC 2025 possible
            </p>
          </div>

          {/* Diamond Sponsor - Featured Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 rounded-full mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Diamond Sponsor</span>
              </div>
            </div>

            <Link
              href={diamondSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-2xl mx-auto group"
              aria-label={`Visit ${diamondSponsor.name} website`}
            >
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-blue-200">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-400/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-400/30 rounded-br-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-full h-16 sm:h-20 lg:h-24 relative">
                    <Image
                      src={diamondSponsor.logo}
                      alt={diamondSponsor.name}
                      fill
                      className="object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-200/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          </div>

          {/* Silver Sponsors Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 rounded-full mb-4">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Silver Sponsors</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {silverSponsors.map((sponsor, index) => (
                <Link
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label={`Visit ${sponsor.name} website`}
                >
                  <div className="relative bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:border-gray-300">
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="w-full h-16 sm:h-20 relative">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Other Sponsors Label */}
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 uppercase tracking-wide">
              Supporting Sponsors
            </h4>
          </div>

          {/* Auto-scrolling Sponsor Carousel */}
          <div className="relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white py-8 rounded-2xl">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div 
              ref={scrollRef}
              className="flex gap-8 sm:gap-12 lg:gap-16 overflow-x-auto scrollbar-hide px-8"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Duplicate sponsors for seamless loop */}
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <Link
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-32 sm:w-40 lg:w-48 h-20 sm:h-24 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 group"
                  aria-label={`Visit ${sponsor.name} website`}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Optional: Static Grid for smaller screens */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 max-w-3xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Link
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-20 bg-white rounded-lg border border-gray-100 p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                aria-label={`Visit ${sponsor.name} website`}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
