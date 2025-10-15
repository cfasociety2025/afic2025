'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About AfIC', href: '/about/afic' },
        { name: 'About CFA East Africa', href: '/about/cfa-ea' },
      ]
    },
    { name: 'Sponsorship', href: '/sponsorship' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Media', href: '/media' },
    { name: 'Tickets', href: '/tickets' },
  ];

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  return (
    <>
      {/* Mobile menu overlay with advanced glassmorphism effect */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 lg:hidden z-40 glass-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        >
          {/* Primary glassmorphism backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-cfa-dark-blue/50 via-cfa-bright-blue/40 to-cfa-dark-blue/60 backdrop-blur-xl"></div>
          
          {/* Secondary glass layer for enhanced depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-cfa-dark-blue/30 via-transparent to-cfa-bright-blue/20"></div>
          
          {/* Animated floating elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-cfa-bright-blue/20 rounded-full blur-3xl glass-float-1"></div>
            <div className="absolute bottom-1/5 right-1/5 w-80 h-80 bg-cfa-purple/15 rounded-full blur-3xl glass-float-2"></div>
            <div className="absolute top-2/3 left-1/3 w-60 h-60 bg-cfa-yellow/10 rounded-full blur-2xl glass-float-1"></div>
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(68,118,255,0.3) 1px, transparent 0)`,
                 backgroundSize: '30px 30px'
               }}>
          </div>
          
          {/* Elegant light refraction effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cfa-bright-blue/5 opacity-30"></div>
        </div>
      )}
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 rounded-md p-1 relative z-50"
                aria-label="AfIC 2025 - Africa Investment Conference - Go to homepage"
              >
                <div className="relative">
                  <Image
                    src="/aficdarklogo.svg"
                    alt="AfIC 2025 - Africa Investment Conference"
                    width={200}
                    height={70}
                    className="navbar-logo w-auto"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <button
                      className="font-medium transition-colors duration-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 whitespace-nowrap text-gray-700 hover:text-cfa-bright-blue flex items-center"
                      aria-expanded={isAboutDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu - No gap between button and menu */}
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 pt-2 w-56 z-50">
                        <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-cfa-bright-blue transition-colors duration-200"
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium transition-colors duration-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 whitespace-nowrap text-gray-700 hover:text-cfa-bright-blue"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/tickets"
              className="bg-black text-white px-4 xl:px-6 py-2 xl:py-3 font-medium transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Purchase conference tickets"
            >
              Buy Tickets
            </Link>
          </div>

            {/* Mobile menu button */}
            <div className="lg:hidden relative z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-700 hover:text-cfa-bright-blue bg-white"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            id="mobile-menu"
            className={`lg:hidden transition-all duration-500 ease-out relative z-50 ${
              isMenuOpen 
                ? 'max-h-screen opacity-100 visible' 
                : 'max-h-0 opacity-0 invisible overflow-hidden'
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-cfa-bright-blue/20 shadow-2xl"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                   backdropFilter: 'blur(16px)',
                   borderTop: '1px solid rgba(68, 118, 255, 0.2)'
                 }}>
              {navigation.map((item, index) => (
                item.hasDropdown ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:text-cfa-bright-blue font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 min-h-[44px] hover:bg-white/60"
                      aria-expanded={isAboutDropdownOpen}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {item.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="px-3 py-3 text-gray-600 hover:text-cfa-bright-blue font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 min-h-[44px] flex items-center hover:bg-white/60 text-sm"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsAboutDropdownOpen(false);
                            }}
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-3 text-gray-700 hover:text-cfa-bright-blue font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2 min-h-[44px] flex items-center hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                    tabIndex={isMenuOpen ? 0 : -1}
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <Link
                  href="/tickets"
                  className="mx-3 px-3 py-3 font-medium text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px] flex items-center justify-center text-white shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Purchase conference tickets"
                  tabIndex={isMenuOpen ? 0 : -1}
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 0, 90, 0.95) 0%, rgba(68, 118, 255, 0.9) 100%)',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(6, 0, 90, 1) 0%, rgba(68, 118, 255, 1) 100%)';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(6, 0, 90, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(6, 0, 90, 0.95) 0%, rgba(68, 118, 255, 0.9) 100%)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Buy Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
