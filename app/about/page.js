import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import PastEventHighlights from '../components/PastEventHighlights';
import AboutCFAEA from '../components/AboutCFAEA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FlashSaleFooter } from '../components/FlashSaleFooter';

export default function About() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />

      {/* Hero */}
      <AboutHero />

      {/* Past Event Highlights */}
      <PastEventHighlights />

      {/* About CFA East Africa section */}
      <AboutCFAEA />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <FlashSaleFooter />
      <Footer />
    </div>
  );
}


