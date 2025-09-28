import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAfIC from './components/AboutAfIC';
import Partners from './components/Partners';
import Speakers from './components/Speakers';
import AboutCFAEmirates from './components/AboutCFAEmirates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutAfIC />
        <Partners />
        <Speakers />
        <AboutCFAEmirates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}