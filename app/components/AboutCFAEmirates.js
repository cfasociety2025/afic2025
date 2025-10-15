'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutCFAEmirates() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#06005A] py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="About CFA Society East Africa">
        <div className="absolute inset-0 bg-[#08024a]" aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-white order-2 lg:order-1">
              <div className="max-w-xl">
                <h1 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                  About CFA Society East Africa
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-white mb-6 sm:mb-8"></div>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    <strong>CFA Society East Africa</strong> is an association of investment professionals affiliated with CFA Institute. The Society is governed by the fundamental values of professional excellence, integrity, cooperation, and volunteer service.
                  </p>
                  
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Chartered in March 2014, CFA Society East Africa serves CFA Institute members across the East Africa region, including Kenya, Uganda, Tanzania, Rwanda, and Ethiopia.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="w-full max-w-2xl mx-auto">
                <Image
                  src="/afic29.png"
                  alt="CFA Society East Africa Event"
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

      {/* Mission & Vision Section */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Mission and Vision">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cfa-bright-blue/10 transform rotate-45 -translate-x-1/2 -translate-y-1/2 geometric-float-1"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cfa-bright-blue/15 transform -rotate-12 translate-y-1/3 geometric-float-2"></div>
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-cfa-bright-blue/8 transform rotate-45 translate-x-1/2 geometric-float-1"></div>
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-cfa-bright-blue/5 to-transparent rounded-full blur-3xl geometric-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-cfa-dark-blue">
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-cfa-bright-blue mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cfa-bright-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="display-headline text-2xl font-bold text-cfa-dark-blue">Our Mission</h3>
              </div>
              <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-700">
                To promote the highest standards of ethical and professional conduct, enhance financial and investment knowledge amongst members, heighten financial literacy amongst investors, and drive financial market development within the East Africa region.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cfa-bright-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="display-headline text-2xl font-bold text-cfa-dark-blue">Our Vision</h3>
              </div>
              <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-700">
                To be the leading investment professional society in East Africa, championing excellence in the investment industry through professional development, advocacy, and ethical leadership.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="display-headline text-2xl sm:text-3xl font-bold mb-8 text-center text-cfa-dark-blue">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-cfa-bright-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cfa-bright-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-cfa-dark-blue">Professional Excellence</h4>
                <p className="text-sm text-gray-600">Commitment to the highest standards of professionalism</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-cfa-bright-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cfa-bright-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-cfa-dark-blue">Integrity</h4>
                <p className="text-sm text-gray-600">Upholding ethical conduct in all endeavors</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-cfa-bright-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cfa-bright-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-cfa-dark-blue">Cooperation</h4>
                <p className="text-sm text-gray-600">Building partnerships and collaborative networks</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-cfa-bright-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cfa-bright-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-cfa-dark-blue">Volunteer Service</h4>
                <p className="text-sm text-gray-600">Giving back to the community and profession</p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-gradient-to-br from-cfa-dark-blue to-cfa-bright-blue text-white p-8 sm:p-12 rounded-lg">
            <h3 className="display-headline text-2xl sm:text-3xl font-bold mb-8 text-center">
              What We Do
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Professional Development</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Continuing education programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Networking events and forums</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Industry conferences and seminars</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Advocacy & Standards</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Promoting ethical standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Regulatory engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Market development initiatives</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Financial Literacy</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Public education campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Investor awareness programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Student outreach initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="display-headline text-2xl sm:text-3xl font-bold mb-6 text-cfa-dark-blue">
              Learn More About CFA Society East Africa
            </h3>
            <p className="body-copy text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Visit our official website to discover more about our programs, membership, and how we're shaping the future of investment in East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.cfasociety.org/eastafrica/about-us/who-we-are"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cfa-bright-blue text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue min-h-[48px] flex items-center justify-center inline-flex"
                aria-label="Visit CFA Society East Africa Website"
              >
                Visit Our Website
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/tickets"
                className="bg-cfa-dark-blue text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-cfa-bright-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-dark-blue min-h-[48px] flex items-center justify-center inline-flex"
                aria-label="Register for AfIC 2025"
              >
                Register for AfIC 2025
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
