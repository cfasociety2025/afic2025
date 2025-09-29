import Image from 'next/image';

export default function AboutAfIC() {
  return (
    <section className="relative bg-cfa-dark-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="About AfIC 2025">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Large geometric shape - top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cfa-bright-blue/10 transform rotate-45 translate-x-1/2 -translate-y-1/2 geometric-float-1"></div>
        
        {/* Medium geometric shape - bottom right */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cfa-bright-blue/15 transform rotate-12 translate-y-1/3 geometric-float-2"></div>
        
        {/* Small accent shape - middle left */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-cfa-bright-blue/8 transform -rotate-45 -translate-x-1/2 geometric-float-1"></div>
        
        {/* Gradient overlay shapes */}
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-cfa-bright-blue/5 to-transparent rounded-full blur-3xl geometric-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-cfa-purple/5 to-transparent rounded-full blur-2xl geometric-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="display-headline text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Africa investing in Africa
                <span className="block text-cfa-bright-blue">Solutions to Challenges</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                  Welcome to the <strong className="text-white font-semibold">2nd Africa Investment Conference (AfIC) 2025</strong> happening at 
                  Movenpick, Nairobi, Kenya on <strong className="text-cfa-bright-blue">December 10th-11th</strong> following the 
                  Inaugural conference that took place in Nigeria in 2023.
                </p>
                
                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                  This year's event is hosted by <strong className="text-white">CFA Society EA</strong>, in partnership with the 
                  <strong className="text-white"> CFA Institute</strong>, in collaboration with all African societies including 
                  CFA Society South Africa, CFA Society Mauritius, CFA Society Nigeria, CFA Society Egypt and CFA Society Ghana.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="/tickets"
                  className="cta-primary text-white px-8 py-4 font-bold uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue min-h-[48px] flex items-center justify-center"
                  aria-label="Register for AfIC 2025"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full max-w-2xl mx-auto">
              <Image
                src="/afic1.png"
                alt="AfIC 2023 Inaugural Conference - Lagos, Nigeria"
                width={700}
                height={525}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Additional Background Accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(68,118,255,0.3) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* Light sweep effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/2 via-transparent to-cfa-bright-blue/2"></div>
      </div>
    </section>
  );
}
