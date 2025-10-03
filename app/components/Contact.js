'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50" role="region" aria-label="Contact Information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="display-headline text-3xl sm:text-4xl lg:text-5xl text-cfa-dark-blue mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-cfa-bright-blue mx-auto mb-6"></div>
          <p className="body-copy text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries about the Africa Investment Conference 2025
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-6">
                Get in Touch
              </h3>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Event Coordinator */}
                <div className="bg-white p-6 shadow-md border border-gray-100 hover:border-cfa-bright-blue/30 transition-all duration-300">
                  <h4 className="body-header font-semibold text-cfa-dark-blue mb-2">
                    CFA Society East Africa
                  </h4>
                  <p className="body-copy text-gray-600 mb-2">
                   Organizing Team
                  </p>
                  <p className="body-copy text-gray-600 mb-3">
                  Partnership, Sponsorship, Media & Ticket related inquiries.
                  </p>
                  <a
                    href="mailto: AFIC2025@eastafrica.cfasociety.org"
                    className="text-cfa-bright-blue hover:text-cfa-dark-blue font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2"
                  >
                     AFIC2025@eastafrica.cfasociety.org
                  </a>
                </div>

                {/* Partnerships Contact */}
                <div className="bg-white p-6 shadow-md border border-gray-100 hover:border-cfa-bright-blue/30 transition-all duration-300">
                  <h4 className="body-header font-semibold text-cfa-dark-blue mb-2">
                    Movenpick Hotel & Residences
                  </h4>
                  <p className="body-copy text-gray-600 mb-2">
                    Accomodation inquiries.
                  </p>
                  <p className="body-copy text-gray-600 mb-3">
                   
                  </p>
                  <a
                    href="mailto:Aru@quiet-loud.com"
                    className="text-cfa-bright-blue hover:text-cfa-dark-blue font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue focus:ring-offset-2"
                  >
                   hotel.nairobi@movenpick.com <br/> hazel.alusiola@movenpick.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cfa-bright-blue focus:border-cfa-bright-blue transition-colors duration-200 min-h-[48px]"
                    aria-describedby="firstName-error"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cfa-bright-blue focus:border-cfa-bright-blue transition-colors duration-200 min-h-[48px]"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cfa-bright-blue focus:border-cfa-bright-blue transition-colors duration-200 min-h-[48px]"
                  aria-describedby="email-error"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                  Write a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cfa-bright-blue focus:border-cfa-bright-blue transition-colors duration-200 resize-y"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-cfa-bright-blue text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 min-h-[48px] flex items-center justify-center"
                  aria-label="Submit contact form"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="section-header text-xl sm:text-4xl text-cfa-dark-blue mb-6 text-center">
            Event Location
          </h3>
          
          <div className="bg-white shadow-md border border-gray-100 overflow-hidden">
            {/* Location Info */}
            <div className="p-6 bg-cfa-dark-blue text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="body-header font-semibold text-lg mb-2">
                    Mövenpick Hotel & Residences
                  </h4>
                  <p className="body-copy text-cfa-bright-blue">
                    Nairobi, Kenya
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://www.google.com/maps/place/M%C3%B6venpick+Hotel+%26+Residences+Nairobi/@-1.2612268,36.8023552,17z/data=!3m1!4b1!4m9!3m8!1s0x182f1714bd130e79:0x22ad5b25e1a76ce2!5m2!4m1!1i2!8m2!3d-1.2612322!4d36.8049301!16s%2Fg%2F11fz6wt_bb?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-cfa-dark-blue px-4 py-2 font-medium hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cfa-dark-blue min-h-[44px]"
                    aria-label="Get directions to Mövenpick Hotel"
                  >
                    Get Directions
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative w-full h-96 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9436345!2d36.8023552!3d-1.2612268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1714bd130e79%3A0x22ad5b25e1a76ce2!2sM%C3%B6venpick%20Hotel%20%26%20Residences%20Nairobi!5e0!3m2!1sen!2ske!4v1735420800000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mövenpick Hotel & Residences Nairobi - Event Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Hotel Gallery Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="section-header text-xl sm:text-2xl text-cfa-dark-blue mb-6 text-center">
            Venue Gallery
          </h3>
          {/* <p className="body-copy text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience luxury and comfort at Mövenpick Hotel & Residences Nairobi, 
            your premier destination for the Africa Investment Conference 2025.
          </p> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative group overflow-hidden  transition duration-300">
              <Image
                src="/movenpick1.png"
                alt="Mövenpick Hotel Nairobi - Exterior View"
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden   transition duration-300">
              <Image
                src="/movenpick2.png"
                alt="Mövenpick Hotel Nairobi - Interior Lobby"
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden  transition duration-300">
              <Image
                src="/movenpick3.png"
                alt="Mövenpick Hotel Nairobi - Conference Facilities"
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            {/* <p className="body-copy text-sm text-gray-500">
              Discover world-class amenities and exceptional service at our conference venue
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
