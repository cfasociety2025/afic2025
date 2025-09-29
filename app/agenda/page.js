import Navbar from '../components/Navbar';
import AgendaHero from '../components/AgendaHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Agenda() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />
      
      {/* Hero Section */}
      <AgendaHero />

      {/* Agenda Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Conference Agenda Details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-bright-blue mb-4 sm:mb-6">
              Conference Schedule
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-cfa-dark-blue mx-auto mb-4 sm:mb-6"></div>
            <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Two days of transformative programming featuring industry leaders, innovative discussions, and strategic insights across Africa's evolving investment landscape.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white border border-gray-200 shadow-md p-6 sm:p-8 rounded-lg">
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Day 1 - December 10, 2025
              </h3>
              <p className="body-copy text-sm sm:text-base text-gray-700 mb-4">
                Opening ceremony, keynote presentations, and panel discussions on 
                "Digital Transformation in African Finance".
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-cfa-bright-blue mr-2">•</span>
                  <span>Opening Keynote</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cfa-bright-blue mr-2">•</span>
                  <span>Panel Discussions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cfa-bright-blue mr-2">•</span>
                  <span>Networking Lunch</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 shadow-md p-6 sm:p-8 rounded-lg">
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-3 sm:mb-4">
                Day 2 - December 11, 2025
              </h3>
              <p className="body-copy text-sm sm:text-base text-gray-700 mb-4">
                Investment workshops, startup showcases, and the closing 
                "Future of African Capital Markets" summit.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-cfa-bright-blue mr-2">•</span>
                  <span>Interactive Workshops</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cfa-bright-blue mr-2">•</span>
                  <span>Startup Showcases</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cfa-bright-blue mr-2">•</span>
                  <span>Closing Summit</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="section-header text-lg sm:text-xl text-cfa-dark-blue mb-3 sm:mb-4">
                Detailed Schedule
              </h3>
              <p className="body-copy text-sm sm:text-base text-gray-700">
                Complete agenda with session times, speakers, and topics will be released soon. 
                Stay tuned for updates!
              </p>
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
