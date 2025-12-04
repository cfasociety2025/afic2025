import Navbar from '../components/Navbar';
import SponsorshipHero from '../components/SponsorshipHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FlashSaleFooter } from '../components/FlashSaleFooter';
import Image from 'next/image';

export default function Sponsorship() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />
      
      {/* Hero Section */}
      <SponsorshipHero />

      {/* Sponsorship Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Sponsorship Opportunities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black mb-4 sm:mb-6">
              Sponsorship Packages
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-black mx-auto mb-4 sm:mb-6"></div>
            <p className="body-copy text-base sm:text-lg text-gray-800 max-w-3xl mx-auto">
              Partner with Africa's premier investment conference and position your brand alongside 500+ finance leaders, investors, and innovators.
            </p>
          </div>

          {/* Premium Tier Packages - Alternating image and details rows */}
          <div className="mb-16">
            {/* <h3 className="section-header text-2xl sm:text-3xl text-black mb-8 text-center">
              Premium Sponsorship Tiers
            </h3> */}

            {/* Diamond */}
            <div className="grid lg:grid-cols-2 gap-8 items-center py-8 border-b border-gray-200">
              <div className="order-1">
                <h4 className="section-header text-2xl text-black mb-4">Diamond Sponsor</h4>
                <ul className="body-copy text-black mb-4 space-y-1">
                  <li>10 VIP Passes</li>
                  <li>Host Gala Dinner or Flagship Investment Lab</li>
                  <li>1 Spot Available</li>
                </ul>
                <p className="body-copy text-gray-800 max-w-xl mb-6">
                  Premier visibility on all stages, program, website, and media walls. Includes Opening Keynote or
                  Featured Fireside Chat, premium booth, PR and media interview, plus a 3-minute feature video.
                </p>
                <a href="#contact" className="inline-block bg-cfa-bright-blue text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-colors rounded-none">Sponsor Now</a>
              </div>
              <div className="order-2">
                <Image src="/diamondd.png" alt="Diamond Sponsorship" width={1200} height={800} className="w-full h-96 object-cover" />
              </div>
            </div>

            {/* Platinum */}
            <div className="grid lg:grid-cols-2 gap-8 items-center py-8 border-b border-gray-200">
              <div className="order-2 lg:order-1">
                <Image src="/platinum.jpeg" alt="Platinum Sponsorship" width={1200} height={800} className="w-full h-96 object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="section-header text-2xl text-black mb-4">Platinum Sponsor</h4>
                <ul className="body-copy text-black mb-4 space-y-1">
                  <li>8 VIP Passes</li>
                  <li>Host Gala Dinner or Investment Lab</li>
                  <li>1 Spot Available</li>
                </ul>
                <p className="body-copy text-gray-800 max-w-xl mb-6">
                  Top-tier visibility with stage, program, and media wall branding. Keynote or high-level fireside chat,
                  premium exhibition booth, continent-wide PR, plus a 2-minute promo video in plenary.
                </p>
                <a href="#contact" className="inline-block bg-cfa-bright-blue text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-colors rounded-none">Sponsor Now</a>
              </div>
            </div>

            {/* Gold */}
            <div className="grid lg:grid-cols-2 gap-8 items-center py-8 border-b border-gray-200">
              <div className="order-1">
                <h4 className="section-header text-2xl text-black mb-4">Gold Sponsor</h4>
                <ul className="body-copy text-black mb-4 space-y-1">
                  <li>6 Passes</li>
                  <li>Host Networking Cocktail</li>
                  <li>1 Spot Available</li>
                </ul>
                <p className="body-copy text-gray-800 max-w-xl mb-6">
                  Prominent logo placement across program and signage. Panel speaking opportunity, standard booth,
                  website and social promotion, plus a 30-second brand reel during the program.
                </p>
                <a href="#contact" className="inline-block bg-cfa-bright-blue text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-colors rounded-none">Sponsor Now</a>
              </div>
              <div className="order-2">
                <Image src="/gold.png" alt="Gold Sponsorship" width={1200} height={800} className="w-full h-96 object-cover" />
              </div>
            </div>

            {/* Silver */}
            <div className="grid lg:grid-cols-2 gap-8 items-center py-8">
              <div className="order-2 lg:order-1">
                <Image src="/silver.png" alt="Silver Sponsorship" width={1200} height={800} className="w-full h-96 object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="section-header text-2xl text-black mb-4">Silver Sponsor</h4>
                <ul className="body-copy text-black mb-4 space-y-1">
                  <li>4 Passes</li>
                  <li>Introduce a Speaker or Session</li>
                  <li>1 Spot Available</li>
                </ul>
                <p className="body-copy text-gray-800 max-w-xl mb-6">
                  Logo placement on event website and program, shared exhibition table, and targeted social visibility.
                </p>
                  <a href="#contact" className="inline-block bg-cfa-bright-blue text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-colors rounded-none">Sponsor Now</a>
              </div>
            </div>
          </div>

          {/* Exhibition Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start py-8 border-t border-gray-200">
              <div className="order-2 lg:order-1">
                <Image 
                  src="/exhibition-sample.jpg" 
                  alt="Exhibition Booth" 
                  width={1200} 
                  height={800} 
                  className="w-full h-96 object-cover" 
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="section-header text-3xl text-black mb-6">Exhibit Now</h3>
                  
                  <ul className="body-copy text-black mb-6 space-y-3">
                    <li className="flex items-start">
                      <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                      <span>1 branded exhibition booth (9x3 ft) with backdrop, table, and chairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                      <span>2 complimentary exhibitor passes (includes access to networking breaks and lunches)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                      <span>Logo placement on event website and conference materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                      <span>Company profile and contacts listed in the digital event guide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                      <span>Access to all networking sessions and cocktail receptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cfa-bright-blue mr-3 mt-1">•</span>
                      <span>Dedicated exhibitor support team on-site</span>
                    </li>
                  </ul>
                  
                  <div className="bg-white border-l-4 border-cfa-bright-blue p-4 mb-6">
                    <p className="text-sm font-semibold text-gray-600 tracking-wide mb-1">Exhibition Fee</p>
                    <p className="body-copy text-lg text-black">Available upon request</p>
                  </div>
                  
                  <a 
                    href="mailto:afic2025@eastafrica.cfasociety.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-cfa-bright-blue text-white px-8 py-3 font-semibold hover:bg-gray-900 transition-colors rounded-none"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

          {/* Special Sponsorship Options */}
          <div className="mb-16">
            <h3 className="section-header text-2xl sm:text-3xl text-black mb-8 text-center">
              Special Sponsorship Opportunities
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Gala Dinner Sponsorship */}
              <div className="bg-white border border-gray-200 p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <Image src="/gala.png" alt="Gala Dinner Sponsorship" width={600} height={450} className="w-full h-full object-cover" />
                </div>
                <h4 className="section-header text-lg text-black mb-3">
                  Gala Dinner Sponsorship
                </h4>
                <div className="space-y-2 mb-4 text-black text-sm">
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Exclusive Branding at Gala Dinner</p>
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Stage Recognition & Backdrop Visibility</p>
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Cultural Program Branding</p>
                </div>
                <a href="#contact" className="w-full inline-block text-center bg-cfa-bright-blue text-white px-4 py-2 font-medium hover:bg-gray-900 transition-colors duration-200 rounded-none text-sm">
                  Sponsor Now
                </a>
              </div>

              {/* Panel Sponsorship */}
              <div className="bg-white border border-gray-200 p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <Image src="/panel.JPG" alt="Panel Sponsorship" width={600} height={450} className="w-full h-full object-cover" />
                </div>
                <h4 className="section-header text-lg text-black mb-3">
                  Panel / Track Sponsorship
                </h4>
                <div className="space-y-2 mb-4 text-black text-sm">
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Branding as "Panel Presented by [Your Brand]"</p>
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Speaking Role for a Senior Executive</p>
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Logo Placement in Agenda</p>
                </div>
                <a href="#contact" className="w-full inline-block text-center bg-cfa-bright-blue text-white px-4 py-2 font-medium hover:bg-gray-900 transition-colors duration-200 rounded-none text-sm">
                  Sponsor Now
                </a>
              </div>

              {/* Delegate Bag Sponsorship */}
              <div className="bg-white border border-gray-200 p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <Image src="/lanyard.png" alt="Delegate Bag or Lanyard Sponsorship" width={600} height={450} className="w-full h-full object-cover" />
                </div>
                <h4 className="section-header text-lg text-black mb-3">
                  Delegate Bag / Lanyard Sponsorship
                </h4>
                <div className="space-y-2 mb-4 text-black text-sm">
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Logo on Delegate Bags or Lanyards</p>
                  <p className="flex items-center"><span className="text-cfa-bright-blue mr-2">✓</span> Continuous Visibility with Every Participant</p>
                </div>
                <a href="#contact" className="w-full inline-block text-center bg-cfa-bright-blue text-white px-4 py-2 font-medium hover:bg-gray-900 transition-colors duration-200 rounded-none text-sm">
                  Sponsor Now
                </a>
              </div>
            </div>
          </div>

          {/* Table Sponsorship Options */}
          <div className="mb-12">
            <h3 className="section-header text-2xl sm:text-3xl text-black mb-8 text-center">
              Table Sponsorship Options
            </h3>
            
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Table Sponsorship 1 */}
              <div className="bg-white border border-gray-200 p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden  mb-4">
                  <Image
                    src="/Table 1.png"
                    alt="Conference Days Table Sponsorship"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="section-header text-lg text-black mb-3">
                  Conference Days 1 & 2
                </h4>
                <p className="body-copy text-sm text-gray-800 mb-4">
                  Bundled Discount Package - Enjoy special savings with a bundled table sponsorship covering both conference days.
                </p>
                <a href="#contact" className="w-full inline-block text-center bg-cfa-bright-blue text-white px-4 py-2 font-medium hover:bg-gray-900 transition-colors duration-200 rounded-none text-sm">
                  Sponsor Table
                </a>
              </div>

              {/* Table Sponsorship 2 */}
              <div className="bg-white border border-gray-200 p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden  mb-4">
                  <Image
                    src="/table 2.png"
                    alt="Conference + Gala Dinner Table Sponsorship"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="section-header text-lg text-black mb-3">
                  Conference + Gala Dinner
                </h4>
                <p className="body-copy text-sm text-gray-800 mb-4">
                  Flagship Hosting Bundle - Gain recognition across both conference days and the Gala Dinner.
                </p>
                <a href="#contact" className="w-full inline-block text-center bg-cfa-bright-blue text-white px-4 py-2 font-medium hover:bg-gray-900 transition-colors duration-200 rounded-none text-sm">
                  Sponsor Table
                </a>
              </div>

              {/* Table Sponsorship 3 */}
              <div className="bg-white border border-gray-200 p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden  mb-4">
                  <Image
                    src="/table 3.png"
                    alt="Full Participation Table Sponsorship"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="section-header text-lg text-black mb-3">
                  Full Participation
                </h4>
                <p className="body-copy text-sm text-gray-800 mb-4">
                  VIP Tables at Conference Days, Gala & Cocktail - Ultimate visibility with premium logo placement.
                </p>
                <a href="#contact" className="w-full inline-block text-center bg-cfa-bright-blue text-white text-white px-4 py-2 font-medium hover:bg-gray-900 transition-colors duration-200 rounded-none text-sm">
                  Sponsor Table
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
         

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <FlashSaleFooter />
      <Footer />
    </div>
  );
}
