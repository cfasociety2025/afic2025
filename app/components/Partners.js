import Link from 'next/link';
import Image from 'next/image';

export default function Partners() {
  const hostingPartners = [
    {
      type: "Hosted by",
      name: "CFA Society East Africa",
      logo: "/Society EastAfrica.png",
      url: "https://www.cfasociety.org/eastafrica"
    },
    {
      type: "Powered by", 
      name: "CFA Institute",
      logo: "/CFA Institute.png",
      url: "https://www.cfainstitute.org"
    }
  ];

  const cfaPartners = [
    { 
      name: "CFA Society Nigeria", 
      logo: "/Society_Nigeria_RGB.png", 
      url: "https://www.cfasociety.org/nigeria"
    },
    { 
      name: "CFA Society South Africa", 
      logo: "/Society_South-Africa_RGB.png", 
      url: "https://www.cfasociety.org/southafrica" 
    },
    { 
      name: "CFA Society Mauritius", 
      logo: "/Society_Mauritius_RGB.png", 
      url: "https://www.cfasociety.org/mauritius" 
    },
    { 
      name: "CFA Society Egypt", 
      logo: "/Society_Egypt_RGB.png", 
      url: "https://www.cfasociety.org/egypt" 
    },
    { 
      name: "CFA Society Ghana", 
      logo: "/Society_Ghana_RGB.png", 
      url: "https://www.cfasociety.org/ghana" 
    }
  ];

  const HostingPartnerCard = ({ partner }) => (
    <div className="text-center">
      <p className="text-sm sm:text-base text-gray-600 uppercase tracking-wider mb-4 sm:mb-6 font-medium">
        {partner.type}
      </p>
      <Link 
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-lg"
        aria-label={`Visit ${partner.name} website`}
      >
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={200}
            height={80}
            className="w-full h-14 sm:h-18 lg:h-18 object-contain mx-auto"
            priority
          />
        </div>
      </Link>
    </div>
  );

  const PartnershipCard = ({ partner }) => (
    <Link 
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-lg"
      aria-label={`Visit ${partner.name} website`}
    >
      <div className="bg-white p-6 sm:p-4 lg:p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={200}
          height={80}
          className="w-full h-14 sm:h-16 lg:h-18 object-contain mx-auto"
        />
      </div>
    </Link>
  );


  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cfa-warm-white" role="region" aria-label="Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cfa-dark-blue mb-4 sm:mb-6">
            Partners
          </h2>
          {/* <p className="body-copy text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            AfIC 2025 is proudly hosted by CFA Society East Africa in collaboration with 
            CFA Institute and CFA societies across the continent.
          </p> */}
        </div>

        {/* Hosting Partners */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto">
            {hostingPartners.map((partner, index) => (
              <HostingPartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* CFA Society Partners */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="section-header text-xl sm:text-2xl lg:text-3xl text-cfa-dark-blue mb-2 sm:mb-3">
              In Partnership With
            </h3>
            {/* <p className="body-copy text-sm sm:text-base text-gray-600">
              CFA Societies across Africa
            </p> */}
          </div>
          
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {cfaPartners.map((partner, index) => (
              <PartnershipCard key={index} partner={partner} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
