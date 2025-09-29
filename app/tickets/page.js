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
            <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Join 500+ finance professionals, investors, and industry leaders at Africa's premier investment conference. Early bird pricing available for a limited time.
            </p>
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
