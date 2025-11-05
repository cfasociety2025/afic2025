import Navbar from '../components/Navbar';
import TravelHero from '../components/TravelHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Travel & Venue - AfIC 2025',
  description: 'Plan your visit to AfIC 2025 in Nairobi, Kenya. Find information about the venue, visa requirements, and explore Kenya\'s attractions.',
};

export default function Travel() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />
      
      {/* Hero Section */}
      <TravelHero />

      {/* Venue Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Event Venue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black mb-4 sm:mb-6">
              Mövenpick Hotel & Residences, Nairobi
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-black mx-auto mb-6"></div>
          </div>

          {/* Venue Details */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div>
              <p className="body-copy text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
                Experience world-class hospitality at the Mövenpick Hotel & Residences, Nairobi. Located in the heart of Westlands, one of Nairobi's most vibrant business and entertainment districts, this luxurious 5-star hotel offers the perfect setting for AfIC 2025.
              </p>
              <p className="body-copy text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
                The hotel features contemporary design, state-of-the-art conference facilities, and exceptional amenities that blend Swiss hospitality with authentic Kenyan warmth. Attendees will enjoy spacious accommodations, world-class dining options, and easy access to Nairobi's business district and major attractions.
              </p>
              
              <div className="bg-gray-50 p-6 border-l-4 border-cfa-bright-blue">
                <h3 className="section-header text-xl text-black mb-4">Address and Contact</h3>
                <p className="body-copy text-gray-800 mb-2">
                  <strong>Mövenpick Hotel & Residences</strong><br />
                  General Mathenge Drive, Westlands<br />
                  Nairobi, Kenya
                </p>
                <p className="body-copy text-gray-800 mt-4">
                  <strong>Phone:</strong> +254 709 961 000<br />
                  <strong>Email:</strong> hotel.nairobi@movenpick.com
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/movenpick1.png"
                alt="Mövenpick Hotel Nairobi - Exterior View"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <Image
                src="/movenpick2.png"
                alt="Mövenpick Hotel Nairobi - Interior"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Visa Information Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white" role="region" aria-label="Visa Information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl text-black mb-4 sm:mb-6">
              Visa Information
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg border-t-4 border-cfa-bright-blue">
              
              <div className="mb-8">
                <h3 className="section-header text-xl sm:text-2xl text-black mb-4">
                  Who Needs a Visa?
                </h3>
                <p className="body-copy text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                  Effective January 1, 2024, all foreign nationals can visit Kenya without a visa for up to 90 days for tourism or business purposes.
                </p>
                <p className="body-copy text-base sm:text-lg text-gray-800 leading-relaxed">
                  As part of this policy, the Government of Kenya introduced a new <strong>Electronic Travel Authorization (eTA) system</strong>, which replaces the previous eVisa system.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="section-header text-xl sm:text-2xl text-black mb-4">
                  How to Apply for eTA
                </h3>
                <p className="body-copy text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                  Travelers, including those from visa-exempt countries, must apply for an eTA online before traveling. The application process is simple and requires basic information such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 body-copy text-gray-800 mb-4">
                  <li>Your full name</li>
                  <li>Passport number</li>
                  <li>Intended travel dates</li>
                  <li>Purpose of visit</li>
                </ul>
                <p className="body-copy text-base sm:text-lg text-gray-800 leading-relaxed">
                  Approval is typically granted within <strong>three (3) business days</strong>, and applicants can track their status online. Once approved, you will receive the confirmation via email.
                </p>
              </div>

              <div className="bg-cfa-bright-blue/10 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-lg text-cfa-dark-blue mb-3">Important Note:</h4>
                <ul className="space-y-2 body-copy text-gray-800">
                  <li className="flex items-start">
                    <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                    <span>Ensure your passport is valid for at least 6 months from your date of arrival</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                    <span>Your passport should have at least two blank pages for immigration stamps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                    <span>Print a copy of your eTA approval to present upon arrival</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://www.kenyaimmigration.org/apply-visa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cfa-bright-blue text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue"
                >
                  Apply for Kenya eTA
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Tourist Attractions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Discover Kenya">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl text-black mb-4 sm:mb-6">
              Discover Kenya
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="body-copy text-base sm:text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Kenya offers a unique blend of wildlife, culture, and natural beauty. Extend your stay and explore some of Africa's most iconic destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Nairobi City */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/nairobi-city.jpg"
                  alt="Nairobi City Skyline"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="section-header text-xl text-black mb-3">Nairobi City</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Discover Kenya's vibrant capital, a bustling metropolis blending modern skyscrapers with rich history. Explore world-class museums, vibrant markets, contemporary art galleries, and diverse cuisine in the "Green City in the Sun."
                </p>
              </div>
            </div>
            
            {/* Nairobi National Park */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/nairobi-national-park.jpg"
                  alt="Nairobi National Park Wildlife"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="section-header text-xl text-black mb-3">Nairobi National Park</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Experience Africa's wildlife just 7km from the city center. This unique park is home to lions, black rhinos, leopards, cheetahs, and over 400 bird species, all set against the dramatic backdrop of Nairobi's skyline.
                </p>
              </div>
            </div>

            {/* Giraffe Centre */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/giraffe-center.jpg"
                  alt="Giraffe Centre Nairobi"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="section-header text-xl text-black mb-3">Giraffe Centre</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Get up close with endangered Rothschild giraffes at this award-winning conservation center. Hand-feed these gentle giants from an elevated platform and learn about wildlife conservation efforts in an unforgettable interactive experience.
                </p>
              </div>
            </div>

            {/* Lake Nakuru */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/nakuru.jpg"
                  alt="Lake Nakuru National Park"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="section-header text-xl text-black mb-3">Lake Nakuru</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Marvel at the stunning spectacle of thousands of flamingos painting the lake pink. This alkaline lake in the Great Rift Valley is a UNESCO World Heritage Site and sanctuary for both black and white rhinos, lions, and leopards.
                </p>
              </div>
            </div>

            {/* Mombasa */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/mombasa.jpg"
                  alt="Mombasa Beaches and Coast"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="section-header text-xl text-black mb-3">Mombasa</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Escape to Kenya's stunning coastal paradise featuring pristine white sandy beaches, turquoise waters, and rich Swahili culture. Explore historic Fort Jesus, dive in coral reefs, and savor fresh seafood in this tropical haven.
                </p>
              </div>
            </div>

            {/* Masai Mara */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/the-mara.jpg"
                  alt="Masai Mara National Reserve"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="section-header text-xl text-black mb-3">Masai Mara</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Witness the world-famous Great Migration and experience Africa's most spectacular wildlife reserve. Home to the Big Five and traditional Maasai communities, the Mara offers unforgettable safari adventures in vast golden savannahs.
                </p>
              </div>
            </div>

          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-cfa-bright-blue/10 to-cfa-dark-blue/10 p-8 rounded-lg">
            <h3 className="section-header text-2xl text-black mb-4 text-center">
              Why Visit Kenya?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 body-copy text-gray-800">
              <div>
                <h4 className="font-semibold text-lg mb-2">Gateway to East Africa</h4>
                <p className="leading-relaxed">
                  Kenya serves as the regional hub for business and investment in East Africa, with world-class infrastructure and connectivity to the entire continent.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Diverse Experiences</h4>
                <p className="leading-relaxed">
                  From wildlife safaris and pristine beaches to vibrant cities and rich cultural heritage, Kenya offers unforgettable experiences for every visitor.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Business-Friendly Environment</h4>
                <p className="leading-relaxed">
                  As one of Africa's leading economies, Kenya provides excellent opportunities for networking, partnerships, and exploring investment possibilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">World-Class Hospitality</h4>
                <p className="leading-relaxed">
                  Experience renowned Kenyan hospitality with luxury accommodations, fine dining, and exceptional service throughout your stay.
                </p>
              </div>
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

