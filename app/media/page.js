import Navbar from '../components/Navbar';
import MediaHero from '../components/MediaHero';
import MediaContent from '../components/MediaContent';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FlashSaleFooter } from '../components/FlashSaleFooter';

export const metadata = {
  title: 'Media & Newsletters - AfIC 2025',
  description: 'Stay updated with the latest news, newsletters, and media coverage from Africa Investment Conference 2025.',
};

export default function Media() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />

      {/* Media Hero Section */}
      <MediaHero />

      {/* Media Content - Newsletters */}
      <MediaContent />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <FlashSaleFooter />
      <Footer />
    </div>
  );
}

