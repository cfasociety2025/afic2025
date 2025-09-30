import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutCFAEmirates from '../components/AboutCFAEmirates';
import AboutCFAEA from '../components/AboutCFAEA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />

      {/* Hero */}
      <AboutHero />

      {/* Intro Video */}
      <section className="bg-white py-8 sm:py-12" aria-label="Intro Video">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] w-full bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/cH8ZTCw4_gM?start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* About CFA Emirates section */}
      <AboutCFAEmirates />
      {/* <AboutCFAEA /> */}

      {/* Contact Section */}
      <Contact />

      

      {/* Footer */}
      <Footer />
    </div>
  );
}


