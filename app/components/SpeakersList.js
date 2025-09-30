'use client';

import SpeakerCard from './SpeakerCard';

export default function SpeakersList({ speakers, onOpenModal }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" role="region" aria-label="Conference Speakers" id="speakers">
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

        {/* Speakers Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard 
              key={speaker.id} 
              speaker={speaker} 
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
}



