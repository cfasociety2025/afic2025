import Navbar from '../components/Navbar';

export default function Sponsorship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cfa-dark-blue via-cfa-bright-blue/20 to-cfa-dark-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Sponsorship Opportunities">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cfa-dark-blue/95 to-cfa-dark-blue/80" aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="display-headline text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Partner with Africa's Premier Investment Conference
                </h1>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Join leading global institutions in supporting Africa's financial transformation. Position your brand alongside 300+ finance leaders, investors, and innovators shaping the continent's economic future.
                  </p>
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    From thought leadership platforms to executive networking opportunities, our sponsorship packages offer unparalleled access to Africa's most influential investment community.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href="#packages"
                    className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center border border-white"
                    aria-label="View sponsorship packages"
                  >
                    View Packages
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center"
                    aria-label="Contact for custom sponsorship"
                  >
                    Custom Package
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[400px]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-cfa-dark-blue font-bold text-lg sm:text-xl">AfIC</span>
                </div>
                <h3 className="section-header text-xl sm:text-2xl text-white mb-3">
                  Africa Investment Conference 2025
                </h3>
                <p className="body-copy text-sm sm:text-base text-gray-300 mb-4">
                  Premier Sponsorship Opportunity
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>300+ Finance Leaders</p>
                  <p>15+ African Countries</p>
                  <p>2 Days of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" role="main">
        
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-cfa-warm-white p-4 sm:p-6 lg:p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
              Coming Soon
            </h2>
            <p className="body-copy text-sm sm:text-base text-gray-700">
              Detailed sponsorship packages and partnership opportunities will be available shortly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
