'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SpeakersHero from '../components/SpeakersHero';
import SpeakersList from '../components/SpeakersList';
import SpeakerModal from '../components/SpeakerModal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <div className="min-h-screen text-[17px] sm:text-[18px] leading-relaxed">
      <Navbar />
      
      {/* Hero Section */}
      <SpeakersHero />

      {/* Speakers Section */}
      <SpeakersList onOpenModal={openModal} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Speaker Modal */}
      <SpeakerModal 
        speaker={selectedSpeaker} 
        isOpen={isModalOpen}
        onClose={closeModal} 
      />
    </div>
  );
}
