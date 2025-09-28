'use client';

import { useState } from 'react';
import SpeakerModal from './SpeakerModal';
import { getFeaturedSpeakers } from '../../lib/speakersData';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get featured speakers for homepage (6 speakers)
  const speakers = getFeaturedSpeakers(6);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  const SpeakerCard = ({ speaker }) => (
    <div className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cfa-bright-blue/30">
      {/* Speaker Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={`${speaker.name} - Speaker at AfIC 2025`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cfa-dark-blue to-cfa-bright-blue flex items-center justify-center group-hover:from-cfa-bright-blue group-hover:to-cfa-dark-blue transition-all duration-300">
            <span className="text-white font-bold text-4xl sm:text-5xl">
              {speaker.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* Speaker Info */}
      <div className="p-4 sm:p-6">
        <h3 className="section-header text-lg sm:text-xl text-cfa-dark-blue mb-2 group-hover:text-cfa-bright-blue transition-colors duration-200">
          {speaker.name}
        </h3>
        
        <p className="body-copy text-sm sm:text-base text-gray-600 mb-3 line-clamp-2">
          {speaker.title}
        </p>
        
        {speaker.company && (
          <p className="body-copy text-xs sm:text-sm text-gray-500 mb-4 font-medium">
            {speaker.company}
          </p>
        )}

        <button
          onClick={() => openModal(speaker)}
          className="inline-flex items-center text-cfa-bright-blue hover:text-cfa-dark-blue font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-md px-2 py-1 -mx-2"
          aria-label={`Learn more about ${speaker.name}`}
        >
          Read More
          <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Conference Speakers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-bright-blue mb-4 sm:mb-6">
              Speakers
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-cfa-dark-blue mx-auto mb-4 sm:mb-6"></div>
            <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the distinguished finance leaders, investment experts, and industry innovators 
              who will share their insights at AfIC 2025.
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>

          {/* View All Speakers */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <a
              href="/speakers"
              className="inline-flex items-center bg-cfa-bright-blue text-white px-8 py-4 font-semibold hover:bg-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue"
              aria-label="View all speakers page"
            >
              View All Speakers
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Speaker Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
