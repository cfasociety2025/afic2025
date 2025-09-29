import Navbar from '../components/Navbar';
import TicketsHero from '../components/TicketsHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Tickets() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <TicketsHero />

      {/* Tickets Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Conference Tickets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-bright-blue mb-4 sm:mb-6">
              Conference Tickets
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-cfa-dark-blue mx-auto mb-4 sm:mb-6"></div>
            <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Join 300+ finance professionals, investors, and industry leaders at Africa's premier investment conference. Early bird pricing available for a limited time.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {/* Early Bird */}
            <div className="bg-white border-2 border-cfa-bright-blue rounded-lg p-6 sm:p-8 text-center shadow-lg">
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
            <div className="bg-white border-2 border-cfa-yellow rounded-lg p-6 sm:p-8 text-center shadow-lg relative md:col-span-2 lg:col-span-1 lg:transform lg:scale-105">
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
            <div className="bg-white border-2 border-cfa-purple rounded-lg p-6 sm:p-8 text-center shadow-lg">
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
          
          <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Group Discounts Available
              </h3>
              <p className="body-copy text-sm sm:text-base text-gray-700 mb-4">
                Register 5 or more colleagues and save 15%. Perfect for investment firms, 
                banks, and financial institutions looking to attend as a team.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-2 sm:mt-4 text-cfa-bright-blue font-bold hover:text-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue rounded-md px-2 py-1"
                aria-label="Contact us for group discount rates"
              >
                Contact us for group rates →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
