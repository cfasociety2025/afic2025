import Navbar from '../components/Navbar';
import AgendaHero from '../components/AgendaHero';
import AgendaSchedule from '../components/AgendaSchedule';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FlashSaleFooter } from '../components/FlashSaleFooter';

export default function Agenda() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />
      
      {/* Hero Section */}
      <AgendaHero />

      {/* Agenda Schedule (redesigned) */}
      <AgendaSchedule />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <FlashSaleFooter />
      <Footer />
    </div>
  );
}
