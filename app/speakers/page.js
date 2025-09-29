'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SpeakersHero from '../components/SpeakersHero';
import SpeakersList from '../components/SpeakersList';
import SpeakerModal from '../components/SpeakerModal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getAllSpeakers } from '../../lib/speakersData';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get all speakers for the speakers page
  const speakers = getAllSpeakers();

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <SpeakersHero />

      {/* Speakers Section */}
      <SpeakersList speakers={speakers} onOpenModal={openModal} />

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
