'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CircularCountdown from './CircularCountdown';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('December 10, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:min-h-[70vh] xl:min-h-[70vh] bg-cfa-warm-white overflow-hidden mt-14" role="banner">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-cfa-warm-white ">
        <iframe
          className="youtube-background"
          src="https://www.youtube.com/embed/Zfc2olYNXQk?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&playlist=Zfc2olYNXQk&vq=hd1080&start=0&end=0"
          title="Africa Investment Conference Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Video overlay for content readability */}
      <div className="absolute inset-0 video-overlay z-10" aria-hidden="true"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 hero-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-[calc(70vh-6rem)]">
          {/* Left Column - Event Image */}
          <div className="text-white order-1 lg:order-1">
            {/* Event Image Container */}
            <div className="border border-white/30 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 ">
              <div className="hero-image-container w-full">
                <Image
                  src="/herooverlay.png"
                  alt="Africa Investment Conference 2025 - 1st Edition"
                  width={600}
                  height={400}
                  className="hero-image w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="text-center">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-4 font-medium">
                See you in
              </p>
              <div className="max-w-xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  <CircularCountdown label="Days" value={timeLeft.days} max={365} strokeColor="#fbbf24" />
                  <CircularCountdown label="Hours" value={timeLeft.hours} max={24} strokeColor="#93c5fd" />
                  <CircularCountdown label="Minutes" value={timeLeft.minutes} max={60} strokeColor="#bbf7d0" />
                  <CircularCountdown label="Seconds" value={timeLeft.seconds} max={60} strokeColor="#fecaca" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Description and CTAs */}
          <div className="text-white order-2 lg:order-2">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Hosted by CFA Society East Africa
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-200">
                Discover next-generation investment strategies for Africa's digital transformation, led by 
                the brightest minds in regional and global finance.
              </p>
              <p className="text-base sm:text-lg text-cfa-bright-blue font-medium">
                Secure your place today!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                href="/tickets"
                className="bg-white text-cfa-dark-blue px-8 sm:px-12 py-3 sm:py-4 font-bold text-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px] flex items-center justify-center"
                aria-label="Purchase conference tickets"
              >
                Buy Tickets
              </Link>
              <Link
                href="/sponsorship"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-center hover:bg-white hover:text-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px] flex items-center justify-center"
                aria-label="Learn about sponsorship opportunities"
              >
                Sponsor now
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
          <div className="text-center text-white border border-white/20 p-3 sm:p-4 lg:p-6 backdrop-blur-xs ">
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2" aria-label="Over 500 participants">500+</div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">PARTICIPANTS</div>
          </div>
          <div className="text-center text-white border border-white/20 p-3 sm:p-4 lg:p-6 backdrop-blur-xs ">
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2" aria-label="Over 25 speakers">25+</div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">SPEAKERS</div>
          </div>
          <div className="text-center text-white border border-white/20 p-3 sm:p-4 lg:p-6 backdrop-blur-xs ">
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2" aria-label="2 days">02</div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">DAYS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
