'use client';

import SpeakerCardAnimated from './SpeakerCardAnimated';
import { getSpeakersGrouped } from '../../lib/speakersData';

export default function SpeakersList({ onOpenModal }) {
  const speakersGrouped = getSpeakersGrouped();

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f6f6f6' }} role="region" aria-label="Conference Speakers" id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-bright-blue mb-4 sm:mb-6">
            Speakers
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-cfa-dark-blue mx-auto mb-4 sm:mb-6"></div>
          <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Meet all distinguished finance leaders, investment experts, and industry innovators 
            who will share their insights at AfIC 2025.
          </p>
        </div>

        {/* Speakers by Organization/Country */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {speakersGrouped.map((group) => (
            // Only render sections with speakers
            group.speakers.length > 0 && (
              <div key={group.section}>
                {/* Section Header */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="display-headline text-2xl sm:text-3xl text-cfa-dark-blue mb-2 font-bold">
                    {group.section}
                  </h3>
                  <div className="w-16 h-1 bg-cfa-bright-blue"></div>
                </div>

                {/* Speakers Grid - 4 cards per row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                  {group.speakers.map((speaker) => (
                    <SpeakerCardAnimated 
                      key={speaker.id}
                      image={speaker.image}
                      name={speaker.name}
                      position={speaker.title}
                      company={speaker.company}
                      country={speaker.location}
                      onViewProfile={() => onOpenModal(speaker)}
                    />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </section>
  );
}



