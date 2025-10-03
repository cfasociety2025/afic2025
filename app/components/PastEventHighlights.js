import Image from 'next/image';

export default function PastEventHighlights() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Past Event Highlights">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Large geometric shape - top left */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cfa-bright-blue/10 transform rotate-45 -translate-x-1/2 -translate-y-1/2 geometric-float-1"></div>
        
        {/* Medium geometric shape - bottom left */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cfa-bright-blue/15 transform -rotate-12 translate-y-1/3 geometric-float-2"></div>
        
        {/* Small accent shape - middle right */}
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-cfa-bright-blue/8 transform rotate-45 translate-x-1/2 geometric-float-1"></div>
        
        {/* Gradient overlay shapes */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-cfa-bright-blue/5 to-transparent rounded-full blur-3xl geometric-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-tr from-cfa-purple/5 to-transparent rounded-full blur-2xl geometric-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-cfa-dark-blue">
            AfIC 2023 Highlights
          </h2>
          <div className="w-20 h-1 bg-cfa-bright-blue mx-auto mb-6"></div>
          <p className="body-copy text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Africa Investment Conference, hosted by CFA Society Nigeria in Lagos, powered by CFA Institute was a resounding success.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="display-headline text-2xl sm:text-3xl font-bold text-cfa-dark-blue mb-6">
                A Landmark Event for African Finance
              </h3>
              
              <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-700">
                The event brought together thought leaders, policymakers, and investors to explore Africa's immense potential as a premier investment destination.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-cfa-dark-blue mb-4">Key Highlights Included:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cfa-bright-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>A landmark visit from <strong>Marg Franklin, CFA</strong>, President and CEO of CFA Institute, marking her first official trip to Africa.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cfa-bright-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>The signing of strategic Memoranda of Understanding between the CFA Institute and key regulators like the <strong>Central Bank of Nigeria (CBN)</strong> and the <strong>Securities and Exchange Commission (SEC Nigeria)</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cfa-bright-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Insightful discussions under the theme <strong>"The Emergence of Africa: A Rethink or a Re-Strategizing?"</strong>, which challenged attendees to forge new pathways for African finance.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cfa-bright-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>A vibrant <strong>Career Fair and Student Conference</strong>, connecting the next generation of financial leaders with industry veterans.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full max-w-2xl mx-auto">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/DND_0734.JPG"
                alt="AfIC 2023 Conference Highlights"
                width={700}
                height={525}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="display-headline text-2xl sm:text-3xl font-bold text-cfa-dark-blue mb-4">
              Relive the Moments
            </h3>
            <p className="body-copy text-lg text-gray-700">
              Watch highlights from the inaugural Africa Investment Conference 2023
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/9] w-full bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cH8ZTCw4_gM?start=1"
                title="AfIC 2023 Highlights - YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="display-headline text-2xl sm:text-3xl font-bold text-cfa-dark-blue mb-4">
              Event Gallery
            </h3>
            <p className="body-copy text-lg text-gray-700">
              Capturing the energy and engagement of AfIC 2023
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/DND_0638.JPG"
                alt="AfIC 2023 - Conference Session"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/DND_9999(399).JPG"
                alt="AfIC 2023 - Networking Session"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/DND_9999(384).JPG"
                alt="AfIC 2023 - Panel Discussion"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/DND_1029.JPG"
                alt="AfIC 2023 - Conference Session"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/WVS_7425.JPG"
                alt="AfIC 2023 - Networking Session"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://afic2025.s3.us-east-1.amazonaws.com/DND_1017.JPG"
                alt="AfIC 2023 - Panel Discussion"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Key Themes for AfIC 2025 */}
        <div className="bg-gradient-to-br from-cfa-dark-blue to-cfa-bright-blue text-white p-8 sm:p-12 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="display-headline text-2xl sm:text-3xl font-bold mb-8 text-center">
              Building on Success: Key Themes for AfIC 2025
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-3">Regulatory Harmonisation</h4>
                <p className="text-sm leading-relaxed text-white/90">
                  Building on the MoUs signed in 2023, we'll focus on Pan-African regulatory collaboration and trust-building.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-3">Human Capital Development</h4>
                <p className="text-sm leading-relaxed text-white/90">
                  Continuing our focus on building a pipeline of skilled, ethical professionals through dedicated talent development sessions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-3">Financial Literacy</h4>
                <p className="text-sm leading-relaxed text-white/90">
                  Expanding accessible financial education, building on the success of initiatives like "Money Talks" radio show.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}