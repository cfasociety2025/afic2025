'use client';

export default function SpeakerCard({ speaker, onOpenModal }) {
  return (
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
          onClick={() => onOpenModal(speaker)}
          className="inline-flex items-center text-cfa-bright-blue hover:text-cfa-dark-blue font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-md px-2 py-1 -mx-2"
          aria-label={`Learn more about ${speaker.name}`}
        >
          View Bio
          <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
