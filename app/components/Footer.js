import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    event: [
      // { name: 'About AfIC', href: '/about' },
      { name: 'Speakers', href: '/speakers' },
      { name: 'Agenda', href: '/agenda' },
      { name: 'Sponsors', href: '/sponsorship' },
      { name: 'Tickets', href: '/tickets' }
    ],
    partners: [
      { name: 'CFA Institute', href: 'https://www.cfainstitute.org', external: true },
      { name: 'CFA Society East Africa', href: 'https://www.cfasociety.org/eastafrica', external: true },
      { name: 'CFA Society Emirates', href: 'https://www.cfasociety.org/emirates', external: true },
      { name: 'CFA Society Nigeria', href: 'https://www.cfasociety.org/nigeria', external: true }
    ],
    resources: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Media Kit', href: '/media' },
      { name: 'Past Events', href: '/past-events' }
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/cfa-society-east-africa',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/cfaeastafrica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/cfaeastafrica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/cfaeastafrica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-cfa-dark-blue text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                {/* AfIC Logo */}
                <div className="mb-6">
                  <Image
                    src="/aficwhitelogo.svg"
                    alt="AfIC 2025 - Africa Investment Conference"
                    width={200}
                    height={80}
                    className="footer-logo h-12 sm:h-14 lg:h-16 w-auto mb-4"
                  />
                  <div className="w-16 h-1 bg-cfa-bright-blue"></div>
                </div>
                <p className="body-copy text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Africa's premier investment conference, bringing together 300+ finance leaders to explore next-generation strategies for Africa's digital transformation.
                </p>
                
                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <p className="body-copy text-cfa-bright-blue font-medium">
                    📅 December 10th -11th, 2025
                  </p>
                  <p className="body-copy text-gray-300">
                    📍 Mövenpick Hotel & Residences, Abu Dhabi
                  </p>
                  <p className="body-copy text-gray-300">
                    🏢 Hosted by CFA Society East Africa
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/tickets"
                  className="inline-flex items-center bg-cfa-bright-blue text-white px-6 py-3 font-semibold hover:bg-white hover:text-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cfa-bright-blue focus:ring-offset-cfa-dark-blue min-h-[44px]"
                  aria-label="Register for AfIC 2025"
                >
                  Register Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Event Links */}
            <div>
              <h4 className="section-header text-lg font-semibold text-white mb-6">
                Event
              </h4>
              <ul className="space-y-3">
                {footerLinks.event.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="body-copy text-gray-300 hover:text-cfa-bright-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 focus:ring-offset-cfa-dark-blue"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners Links */}
            <div>
              <h4 className="section-header text-lg font-semibold text-white mb-6">
                Partners
              </h4>
              <ul className="space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-copy text-gray-300 hover:text-cfa-bright-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 focus:ring-offset-cfa-dark-blue inline-flex items-center"
                      >
                        {link.name}
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="body-copy text-gray-300 hover:text-cfa-bright-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 focus:ring-offset-cfa-dark-blue"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

           
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-cfa-bright-blue/20 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="body-copy text-sm text-gray-400">
                © {currentYear} CFA Society East Africa. All rights reserved.
              </p>
              <p className="body-copy text-sm text-gray-400">
                Tech by <span className="text-cfa-bright-blue">GlassHouse PR</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="body-copy text-sm text-gray-400 hidden sm:block">
                Follow us:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cfa-bright-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 focus:ring-offset-cfa-dark-blue p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CFA Institute Attribution */}
        <div className="border-t border-cfa-bright-blue/10 py-4">
          {/* <p className="body-copy text-xs text-gray-500 text-center">
            CFA Institute does not endorse, promote, or warrant the accuracy or quality of the products or services offered. 
            CFA® and Chartered Financial Analyst® are registered trademarks owned by CFA Institute.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
