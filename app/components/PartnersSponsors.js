export default function Partners() {
  const hostingPartners = [
    {
      type: "Hosted by",
      name: "CFA Society East Africa",
      logo: "CFA EA",
      description: "Leading financial analysts in East Africa"
    },
    {
      type: "With Support From",
      name: "CFA Institute",
      logo: "CFA",
      description: "Global association of investment professionals"
    }
  ];

  const cfaPartners = [
    { name: "CFA Society Nigeria", logo: "CFA NG", country: "Nigeria" },
    { name: "CFA Society South Africa", logo: "CFA SA", country: "South Africa" },
    { name: "CFA Society Mauritius", logo: "CFA MU", country: "Mauritius" },
    { name: "CFA Society Egypt", logo: "CFA EG", country: "Egypt" },
    { name: "CFA Society Ghana", logo: "CFA GH", country: "Ghana" }
  ];


  const PartnerCard = ({ partner, type = "partner" }) => (
    <div className="partner-card rounded-lg p-4 sm:p-6 lg:p-8 text-center shadow-lg">
      {partner.type && (
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-2 sm:mb-3 font-medium">
          {partner.type}
        </p>
      )}
      
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cfa-dark-blue to-cfa-bright-blue rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xs sm:text-sm lg:text-base" aria-hidden="true">
          {partner.logo}
        </span>
      </div>
      
      <h3 className="section-header text-sm sm:text-base lg:text-lg text-cfa-dark-blue mb-2 leading-tight">
        {partner.name}
      </h3>
      
      {partner.description && (
        <p className="body-copy text-xs sm:text-sm text-gray-600">
          {partner.description}
        </p>
      )}
      
      {partner.country && (
        <p className="body-copy text-xs text-cfa-bright-blue font-medium mt-1">
          {partner.country}
        </p>
      )}
    </div>
  );


  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cfa-warm-white" role="region" aria-label="Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-dark-blue mb-4 sm:mb-6">
            Partners
          </h2>
          <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            AfIC 2025 is proudly hosted by CFA Society East Africa in collaboration with 
            CFA Institute and CFA societies across the continent.
          </p>
        </div>

        {/* Hosting Partners */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
            {hostingPartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* CFA Society Partners */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="section-header text-xl sm:text-2xl lg:text-3xl text-cfa-dark-blue mb-2 sm:mb-3">
              In Partnership With
            </h3>
            <p className="body-copy text-sm sm:text-base text-gray-600">
              CFA Societies across Africa
            </p>
          </div>
          
          <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {cfaPartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
