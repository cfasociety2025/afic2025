'use client';

export default function SpeakerCard({ speaker, onOpenModal }) {
  return (
    <div 
      className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cfa-bright-blue/30 rounded-xl cursor-pointer"
      onClick={() => onOpenModal(speaker)}
    >
      {/* Speaker Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={`${speaker.name} - Speaker at AfIC 2025`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#4169E1] to-[#1E3A8A] flex items-center justify-center">
            <span className="text-white font-bold text-5xl sm:text-6xl">
              {speaker.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        {/* Dark Blue Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1E3A8A] via-[#1E3A8A]/60 to-transparent"></div>
      </div>

      {/* Speaker Info - Name Section */}
      <div className="px-4 py-3 bg-gradient-to-br from-[#4169E1] to-[#1E3A8A]">
        <h3 className="display-headline text-base sm:text-lg font-bold text-white leading-tight">
          {speaker.name}{speaker.certification ? `, ${speaker.certification}` : ''}
        </h3>
      </div>

      {/* Speaker Details - White Section */}
      <div className="flex-1 px-4 py-3 bg-white rounded-b-xl flex flex-col">
        <p className="body-copy text-sm sm:text-base font-bold text-gray-900 mb-1">
          {speaker.title}
        </p>
        
        {(speaker.company || speaker.location) && (
          <p className="body-copy text-xs sm:text-sm text-gray-700 font-medium">
            {speaker.company}{speaker.company && speaker.location ? ' - ' : ''}{speaker.location}
          </p>
        )}
      </div>
    </div>
  );
}
