import Navbar from '../../components/Navbar';
import AboutCFAEmirates from '../../components/AboutCFAEmirates';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { FlashSaleFooter } from '../../components/FlashSaleFooter';

export const metadata = {
  title: 'About CFA Society East Africa - AfIC 2025',
  description: 'Learn about CFA Society East Africa, the host of Africa Investment Conference 2025 in Nairobi, Kenya.',
};

export default function AboutCFAEAPage() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />

      {/* About CFA East Africa Hero */}
      <AboutCFAEmirates />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <FlashSaleFooter />
      <Footer />
    </div>
  );
}

