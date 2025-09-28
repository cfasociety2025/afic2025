import Navbar from '../components/Navbar';

export default function Agenda() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cfa-dark-blue via-cfa-bright-blue/20 to-cfa-dark-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Conference Agenda Overview">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cfa-dark-blue/95 to-cfa-dark-blue/80" aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="display-headline text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Two Days of Transformative Programming
                </h1>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Immerse yourself in comprehensive programming featuring industry leaders, innovative discussions, and strategic insights across Africa's evolving investment landscape. From keynote presentations to interactive workshops, every session is designed to advance your expertise.
                  </p>
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Explore digital transformation, emerging markets, sustainable finance, and the future of African capital markets through expert-led sessions and peer-to-peer learning opportunities.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-cfa-bright-blue mb-1">Day 1</div>
                    <div className="text-sm text-gray-300">March 15, 2025</div>
                    <div className="text-xs text-gray-400 mt-2">Opening & Keynotes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-cfa-bright-blue mb-1">Day 2</div>
                    <div className="text-sm text-gray-300">March 16, 2025</div>
                    <div className="text-xs text-gray-400 mt-2">Workshops & Summit</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href="#schedule"
                    className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center border border-white"
                    aria-label="View detailed schedule"
                  >
                    View Schedule
                  </a>
                  <a
                    href="/speakers"
                    className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center"
                    aria-label="View conference speakers"
                  >
                    Meet Speakers
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[400px]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-cfa-dark-blue font-bold text-lg sm:text-xl">📅</span>
                </div>
                <h3 className="section-header text-xl sm:text-2xl text-white mb-3">
                  AfIC 2025 Program Schedule
                </h3>
                <p className="body-copy text-sm sm:text-base text-gray-300 mb-6">
                  Comprehensive Investment Conference Agenda
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-bright-blue">•</span>
                    <span>15+ Expert Sessions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-bright-blue">•</span>
                    <span>Interactive Workshops</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-bright-blue">•</span>
                    <span>Panel Discussions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-bright-blue">•</span>
                    <span>Networking Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" role="main">
        
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="bg-cfa-warm-white p-4 sm:p-6 lg:p-8 rounded-lg">
              <h2 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Day 1 - March 15, 2025
              </h2>
              <p className="body-copy text-sm sm:text-base text-gray-700">
                Opening ceremony, keynote presentations, and panel discussions on 
                "Digital Transformation in African Finance".
              </p>
            </div>
            
            <div className="bg-cfa-warm-white p-4 sm:p-6 lg:p-8 rounded-lg">
              <h2 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Day 2 - March 16, 2025
              </h2>
              <p className="body-copy text-sm sm:text-base text-gray-700">
                Investment workshops, startup showcases, and the closing 
                "Future of African Capital Markets" summit.
              </p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-white border-2 border-cfa-bright-blue p-4 sm:p-6 lg:p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="section-header text-lg sm:text-xl text-cfa-dark-blue mb-3 sm:mb-4">
                Detailed Schedule
              </h3>
              <p className="body-copy text-sm sm:text-base text-gray-700">
                Complete agenda with session times, speakers, and topics will be released soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
