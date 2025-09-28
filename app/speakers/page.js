'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SpeakerModal from '../components/SpeakerModal';
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

      {/* Speaker Details */}
      <div className="p-4 sm:p-6">
        <h3 className="section-header text-lg sm:text-xl text-cfa-dark-blue mb-2 line-clamp-2 group-hover:text-cfa-bright-blue transition-colors duration-300">
          {speaker.name}
        </h3>
        <p className="body-copy text-sm sm:text-base font-medium text-gray-700 mb-1">
          {speaker.title}
        </p>
        <p className="body-copy text-xs sm:text-sm text-cfa-bright-blue mb-3 sm:mb-4">
          {speaker.company}
        </p>
        
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {speaker.expertise.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="expertise-tag text-xs px-2 py-1 bg-cfa-bright-blue/10 text-cfa-bright-blue border border-cfa-bright-blue/20"
            >
              {tag}
            </span>
          ))}
          {speaker.expertise.length > 2 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{speaker.expertise.length - 2} more
            </span>
          )}
        </div>

        {/* Learn More Button */}
        <button
          onClick={() => openModal(speaker)}
          className="w-full bg-cfa-bright-blue text-white px-4 py-2 sm:py-3 font-medium hover:bg-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2"
          aria-label={`Learn more about ${speaker.name}`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cfa-dark-blue via-cfa-bright-blue/20 to-cfa-dark-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="Distinguished Speakers">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cfa-dark-blue/95 to-cfa-dark-blue/80" aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="display-headline text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Learn from Africa's Financial Visionaries
                </h1>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    Connect with Africa's most influential finance leaders, global investment experts, and innovative entrepreneurs who are actively shaping the continent's economic transformation. Our distinguished lineup represents the pinnacle of financial expertise across diverse sectors.
                  </p>
                  <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                    From central bank governors to private equity pioneers, fintech innovators to sustainable finance champions – engage with thought leaders who are defining the future of African capital markets.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-cfa-bright-blue mb-1">25+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Expert Speakers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-cfa-bright-blue mb-1">15+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Countries</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-cfa-bright-blue mb-1">8+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Key Sectors</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href="#speakers"
                    className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center border border-white"
                    aria-label="View all confirmed speakers"
                  >
                    View Speakers
                  </a>
                  <a
                    href="/agenda"
                    className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-cfa-dark-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center"
                    aria-label="View speaker sessions and agenda"
                  >
                    View Sessions
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[400px]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-cfa-dark-blue font-bold text-lg sm:text-xl">🎯</span>
                </div>
                <h3 className="section-header text-xl sm:text-2xl text-white mb-3">
                  AfIC 2025 Speaker Lineup
                </h3>
                <p className="body-copy text-sm sm:text-base text-gray-300 mb-6">
                  Industry Leaders & Financial Innovators
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-purple">•</span>
                    <span>Central Bank Leaders</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-purple">•</span>
                    <span>Investment Executives</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-purple">•</span>
                    <span>Fintech Pioneers</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cfa-purple">•</span>
                    <span>Policy Makers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" role="main" id="speakers">
        <div className="text-center mb-12 sm:mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-header text-2xl sm:text-3xl text-cfa-dark-blue mb-4 sm:mb-6">
              Complete Speaker Lineup
            </h2>
            <p className="body-copy text-sm sm:text-base text-gray-700">
              Meet all {speakers.length} distinguished speakers who will be sharing their expertise 
              at AfIC 2025. Click on any speaker to learn more about their background and achievements.
            </p>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </main>

      {/* Speaker Modal */}
      {isModalOpen && selectedSpeaker && (
        <SpeakerModal 
          speaker={selectedSpeaker} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}
