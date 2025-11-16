'use client';

export default function MediaContent() {
  // Newsletter data
  const newsletters = [
    {
      id: 1,
      title: 'AfIC 2025 - First Edition Newsletter',
      date: 'October 2025',
      description: 'The inaugural newsletter featuring exciting updates about CFA Society Nigeria and Africa Investment Conference 2025 in Nairobi, Kenya.',
      type: 'Newsletter',
      featured: true,
      link: 'https://drive.google.com/file/d/1wl1L0GAfyWgfeF3eOG_XwO5C2QCir8wy/view?usp=sharing'
    },
    {
      id: 2,
      title: 'AfIC 2025 - Second Edition Newsletter',
      date: 'November 2025',
      description: 'The inaugural newsletter featuring exciting updates about CFA Society South Africa and Africa Investment Conference 2025 in Nairobi, Kenya.',
      type: 'Newsletter',
      featured: true,
      link: 'https://drive.google.com/file/d/1ok1pHNX3AwG9cXAIbmQPzXK2_fpzjQ9A/view?usp=sharing'
    },

    
  ];

  return (
    <>
      {/* Latest Newsletters Section */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Latest Newsletters">
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
              Latest Newsletters
            </h2>
            <div className="w-20 h-1 bg-cfa-bright-blue mx-auto mb-6"></div>
            <p className="body-copy text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest news, event highlights, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter) => (
              <article 
                key={newsletter.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-cfa-bright-blue/10 text-cfa-bright-blue rounded-full">
                      {newsletter.type}
                    </span>
                    {newsletter.featured && (
                      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-cfa-yellow/20 text-cfa-dark-blue rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="display-headline text-xl sm:text-2xl font-bold mb-3 text-cfa-dark-blue">
                    {newsletter.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {newsletter.date}
                  </p>
                  
                  <p className="body-copy text-base leading-relaxed text-gray-700 mb-6">
                    {newsletter.description}
                  </p>
                  
                  {newsletter.link ? (
                    <a
                      href={newsletter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-cfa-bright-blue text-white px-6 py-3 font-medium hover:bg-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue flex items-center justify-center"
                      aria-label={`Read ${newsletter.title}`}
                    >
                      Read Newsletter
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button 
                      className="w-full bg-gray-400 text-white px-6 py-3 font-medium cursor-not-allowed"
                      disabled
                      aria-label="Coming soon"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

       
        </div>
      </section>

      {/* Videos Section */}
      <section className="relative bg-gradient-to-br from-cfa-dark-blue to-cfa-bright-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Featured Videos">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-white/5 transform rotate-12 -translate-x-1/3 geometric-float-2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 transform -rotate-45 translate-x-1/4 translate-y-1/4 geometric-float-1"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cfa-yellow/10 transform rotate-45 geometric-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Featured Videos
            </h2>
            <div className="w-20 h-1 bg-cfa-yellow mx-auto mb-6"></div>
            <p className="body-copy text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Watch highlights and announcements from AfIC 2025 and CFA Society leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* CFA Nigeria President Video */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/Kby1DJHF6K8"
                  title="CFA Nigeria President"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="display-headline text-xl sm:text-2xl font-bold text-cfa-dark-blue mb-2">
                  CFA Nigeria President
                </h3>
                <p className="body-copy text-base text-gray-700 leading-relaxed">
                  Message from the President of CFA Society Nigeria about AfIC 2025.
                </p>
              </div>
            </div>

            {/* Announcements Video */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/itqDDNKXtRU"
                  title="AfIC 2025 Announcements"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="display-headline text-xl sm:text-2xl font-bold text-cfa-dark-blue mb-2">
                  Announcements
                </h3>
                <p className="body-copy text-base text-gray-700 leading-relaxed">
                  Important announcements and updates about the conference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media Inquiries Section */}
      <section className="relative bg-gray-50 py-16 sm:py-20 overflow-hidden" role="region" aria-label="Press Inquiries">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-cfa-dark-blue">
            Press & Media Inquiries
          </h2>
          <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-700 mb-8 max-w-2xl mx-auto">
            For press releases, media partnerships, or interview requests, please contact our media team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="mailto:AFIC2025@eastafrica.cfasociety.org"
              className="bg-cfa-bright-blue text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue min-h-[48px] flex items-center justify-center"
              aria-label="Contact media team"
            >
              Contact Media Team
            </a>
            <a
              href="/sponsorship"
              className="bg-cfa-dark-blue text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-cfa-bright-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-dark-blue min-h-[48px] flex items-center justify-center"
              aria-label="View sponsorship opportunities"
            >
              Sponsorship Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

