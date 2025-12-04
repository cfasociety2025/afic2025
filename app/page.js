import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAfIC from './components/AboutAfIC';
import Partners from './components/Partners';
import Speakers from './components/Speakers';
import AboutCFAEmirates from './components/AboutCFAEmirates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FlashSaleFooter } from './components/FlashSaleFooter';

export default function Home() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />
      <main>
        <Hero />
        <AboutAfIC />
        <Partners />
        <Speakers />
        {/* <AboutCFAEmirates /> */}
        <Contact />
      </main>
      <FlashSaleFooter />
      <Footer />
    </div>
  );
}