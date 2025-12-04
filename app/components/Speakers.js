"use client";

import { useState } from "react";
import { getFeaturedNonModerators, getFeaturedModerators } from "../../lib/speakersData";
import SpeakerCardAnimated from "./SpeakerCardAnimated";
import SpeakerModal from "./SpeakerModal";

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get featured speakers for homepage (4 speakers, excluding moderators)
  const speakers = getFeaturedNonModerators(4);
  
  // Get featured moderators
  const moderators = getFeaturedModerators();

  const openModal = (speaker) => {
    console.log("Opening modal for speaker:", speaker);
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <>
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: "#f6f6f6" }}
        aria-label="Conference Speakers"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-bright-blue mb-4 sm:mb-6 text-cfa-dark-blue">
              Speakers
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-cfa-dark-blue mx-auto mb-4 sm:mb-6"></div>
            <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the distinguished finance leaders, investment experts, and
              industry innovators who will share their insights at AfIC 2025.
            </p>
          </div>

          {/* Speakers Grid - Single row for 4 speakers */}
          <div className="flex justify-center gap-6 overflow-x-auto">
            {speakers.map((speaker) => (
              <SpeakerCardAnimated
                key={speaker.id}
                image={speaker.image}
                name={speaker.name}
                position={speaker.title}
                company={speaker.company}
                country={speaker.location}
                onViewProfile={() => openModal(speaker)}
              />
            ))}
          </div>

          {/* Moderators & MCs Section */}
          {moderators.length > 0 && (
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl font-semibold text-cfa-dark-blue text-center mb-8">
                Moderators & MCs
              </h3>
              <div className="flex justify-center gap-6 overflow-x-auto">
                {moderators.map((moderator) => (
                  <SpeakerCardAnimated
                    key={moderator.id}
                    image={moderator.image}
                    name={moderator.name}
                    position={moderator.title}
                    company={moderator.company}
                    country={moderator.location}
                    onViewProfile={() => openModal(moderator)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* View All Speakers */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <a
              href="/speakers"
              className="inline-flex items-center bg-cfa-bright-blue text-white px-8 py-4 font-semibold hover:bg-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue"
              aria-label="View all speakers page"
            >
              View All Speakers
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Arrow right"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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
