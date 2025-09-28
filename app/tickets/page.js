import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Tickets() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cfa-dark-blue via-cfa-bright-blue/20 to-cfa-dark-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Secure Your Place at AfIC 2025">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cfa-dark-blue/95 to-cfa-dark-blue/80" aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="display-headline text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Secure Your Place at Africa's Investment Future
                </h1>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Join 300+ finance professionals, investors, and industry leaders at Africa's premier investment conference. Connect with decision-makers, discover emerging opportunities, and shape the continent's financial landscape.
                  </p>
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Two days of intensive programming, exclusive networking, and insights from Africa's most influential finance leaders. Early bird pricing available for a limited time.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-cfa-bright-blue">$299</div>
                      <div className="text-sm">Early Bird</div>
                    </div>
                    <div className="text-white/60">•</div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">$399</div>
                      <div className="text-sm">Standard</div>
                    </div>
                    <div className="text-white/60">•</div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-cfa-purple">$599</div>
                      <div className="text-sm">VIP</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href="#tickets"
                    className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center border border-white"
                    aria-label="View ticket options and register"
                  >
                    Register Now
                  </a>
                  <a
                    href="#group-rates"
                    className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center"
                    aria-label="Learn about group discount rates"
                  >
                    Group Rates
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[400px]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-cfa-dark-blue font-bold text-lg sm:text-xl">🎟️</span>
                </div>
                <h3 className="section-header text-xl sm:text-2xl text-white mb-3">
                  AfIC 2025 Conference Pass
                </h3>
                <p className="body-copy text-sm sm:text-base text-gray-300 mb-6">
                  Premium Access to Africa's Investment Community
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Full Conference Access</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Networking Sessions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Welcome Reception</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Conference Materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" role="main">
        
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Early Bird */}
            <div className="bg-white border-2 border-cfa-bright-blue rounded-lg p-4 sm:p-6 lg:p-8 text-center shadow-lg">
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Early Bird
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-cfa-bright-blue mb-2">$299</div>
              <p className="body-copy text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Until December 31, 2024
              </p>
              <ul className="body-copy text-sm sm:text-base text-gray-700 space-y-2 mb-6 sm:mb-8 text-left">
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Full conference access</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Networking sessions</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Welcome reception</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Conference materials</li>
              </ul>
              <Link
                href="#"
                className="block bg-cfa-bright-blue text-white px-4 sm:px-6 py-3 sm:py-4 font-bold hover:bg-cfa-dark-blue transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue min-h-[44px] flex items-center justify-center"
                aria-label="Register for Early Bird ticket at $299"
              >
                Register Now
              </Link>
            </div>
            
            {/* Standard */}
            <div className="bg-white border-2 border-cfa-yellow rounded-lg p-4 sm:p-6 lg:p-8 text-center shadow-lg relative md:col-span-2 lg:col-span-1 lg:transform lg:scale-105">
              <div className="bg-cfa-yellow text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded-full inline-block mb-3 sm:mb-4">
                POPULAR
              </div>
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Standard
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-cfa-dark-blue mb-2">$399</div>
              <p className="body-copy text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Regular pricing
              </p>
              <ul className="body-copy text-sm sm:text-base text-gray-700 space-y-2 mb-6 sm:mb-8 text-left">
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Full conference access</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Networking sessions</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Welcome reception</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Conference materials</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Lunch included</li>
              </ul>
              <Link
                href="#"
                className="block bg-cfa-dark-blue text-white px-4 sm:px-6 py-3 sm:py-4 font-bold hover:bg-black transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-dark-blue min-h-[44px] flex items-center justify-center"
                aria-label="Register for Standard ticket at $399 - Most popular option"
              >
                Register Now
              </Link>
            </div>
            
            {/* VIP */}
            <div className="bg-white border-2 border-cfa-purple rounded-lg p-4 sm:p-6 lg:p-8 text-center shadow-lg">
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                VIP Access
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-cfa-purple mb-2">$599</div>
              <p className="body-copy text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Premium experience
              </p>
              <ul className="body-copy text-sm sm:text-base text-gray-700 space-y-2 mb-6 sm:mb-8 text-left">
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> All Standard benefits</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> VIP seating</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Exclusive dinner</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Speaker meet & greet</li>
                <li className="flex items-center"><span className="text-green-600 mr-2" aria-hidden="true">✓</span> Priority networking</li>
              </ul>
              <Link
                href="#"
                className="block bg-cfa-purple text-white px-4 sm:px-6 py-3 sm:py-4 font-bold hover:bg-cfa-dark-blue transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-purple min-h-[44px] flex items-center justify-center"
                aria-label="Register for VIP Access ticket at $599"
              >
                Register Now
              </Link>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="bg-cfa-warm-white p-4 sm:p-6 lg:p-8 rounded-lg max-w-2xl mx-auto">
              <h2 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Group Discounts Available
              </h2>
              <p className="body-copy text-sm sm:text-base text-gray-700 mb-4">
                Register 5 or more colleagues and save 15%. Perfect for investment firms, 
                banks, and financial institutions looking to attend as a team.
              </p>
              <Link
                href="#"
                className="inline-block mt-2 sm:mt-4 text-cfa-bright-blue font-bold hover:text-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue rounded-md px-2 py-1"
                aria-label="Contact us for group discount rates"
              >
                Contact us for group rates →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
