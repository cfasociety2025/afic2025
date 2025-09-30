import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutCFAEmirates from '../components/AboutCFAEmirates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />

      {/* Hero */}
      <AboutHero />

      {/* About CFA Emirates section */}
      <AboutCFAEmirates />

      {/* Contact Section */}
      <Contact />

  

      {/* Footer */}
      <Footer />
    </div>
  );
}


