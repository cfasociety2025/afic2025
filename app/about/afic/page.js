import Navbar from '../../components/Navbar';
import AboutAfIC from '../../components/AboutAfIC';
import PastEventHighlights from '../../components/PastEventHighlights';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About AfIC - Africa Investment Conference 2025',
  description: 'Learn about Africa Investment Conference (AfIC), celebrating its past success and preparing for the 2025 edition in Nairobi.',
};

export default function AboutAfICPage() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />

      {/* About AfIC Hero */}
      <AboutAfIC />

      {/* Past Event Highlights */}
      <PastEventHighlights />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

