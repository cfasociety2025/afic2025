import Image from 'next/image';

export default function AboutCFAEmirates() {
  return (
    <section className="relative bg-gradient-to-br from-cfa-dark-blue via-cfa-bright-blue/20 to-cfa-dark-blue py-16 sm:py-20 lg:py-24 overflow-hidden" role="region" aria-label="About CFA Society East Africa">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cfa-dark-blue/95 to-cfa-dark-blue/80" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="display-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                About CFA Society East Africa
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-white mb-6 sm:mb-8"></div>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="body-copy text-base sm:text-lg leading-relaxed text-gray-200">
                The CFA Society East Africa is an association of investment professionals, affiliated to CFA Institute. The society is governed by the fundamental values of professional excellence, integrity, cooperation, and volunteer service. CFA Society East Africa was chartered in March 2014 to serve CFA Institute members in the East Africa region including countries such as Kenya, Uganda, Tanzania, Rwanda, and Ethiopia.

Our shared mission is to promote the highest standards of ethical and professional conduct, enhance financial and investment knowledge amongst members, heighten financial literacy amongst investors and drive financial market development within the East Africa region.


                </p>
                
              
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="/tickets"
                  className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[48px] flex items-center justify-center border border-white"
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
                src="/afic9.png"
                alt="Africa Investment Conference East Africa Event"
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
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* Light gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/3 via-transparent to-gray-500/3"></div>
      </div>
    </section>
  );
}
