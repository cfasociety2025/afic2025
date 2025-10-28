import Navbar from '../components/Navbar';
import TicketsHero from '../components/TicketsHero';
import Contact from '../components/Contact';
import TicketsList from '../components/TicketsList';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Tickets() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
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
            <div className="body-copy text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
              <p className="mb-8 text-lg sm:text-xl leading-relaxed">
                Secure your place at the Africa investment Conference.
                Join 500+ finance professionals, investors, and industry leaders at Africa's premier investment conference.
              </p>
              
              {/* Immersion Experiences Callout */}
              <div className="bg-gray-50 border-l-4 border-cfa-bright-blue rounded-lg p-6 sm:p-8 my-8">
                <p className="text-gray-800 font-medium mb-4 text-base sm:text-lg">
                  Remember to register for the Immersion Experiences on 11th December 2025 to enhance your conference and networking experience:
                </p>
                <ul className="space-y-3 ml-2">
                  <li className="flex items-start">
                    <span className="text-cfa-bright-blue mr-3 mt-1 text-xl">•</span>
                    <span className="text-gray-700">Golf Networking Experience (Pre-Registered)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cfa-bright-blue mr-3 mt-1 text-xl">•</span>
                    <span className="text-gray-700">Nairobi Cultural Heritage Tour (Pre-Registered)</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Make the most of AfIC 2025 by connecting, learning, and experiencing the best of Nairobi before the main conference begins.
              </p>
            </div>
          </div>

          <TicketsList />

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
