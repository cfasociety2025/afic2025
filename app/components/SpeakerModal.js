"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function SpeakerModal({ speaker, isOpen, onClose }) {
  // Handle escape key and focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Focus management
    const modalElement = document.getElementById("speaker-modal");
    if (modalElement) {
      modalElement.focus();
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !speaker) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          id="speaker-modal"
          className="relative bg-white rounded-lg shadow-2xl max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full mx-auto transform transition-all duration-300 scale-100"
          tabIndex="-1"
          role="document"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue"
            aria-label="Close speaker details"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
              {/* Speaker Image */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto sm:mx-0 bg-white rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
                  {speaker.image
                    ? <Image
                        src={speaker.image}
                        alt={`${speaker.name} - Speaker at AfIC 2025`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    : <div className="w-full h-full bg-gradient-to-br from-cfa-dark-blue to-cfa-bright-blue rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-2xl sm:text-3xl">
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>}
                </div>
              </div>

              {/* Speaker Details */}
              <div className="flex-1 text-center sm:text-left">
                <h2
                  id="modal-title"
                  className="section-header text-2xl sm:text-3xl text-cfa-dark-blue mb-3 sm:mb-4"
                >
                  {speaker.name}
                </h2>

                <p className="body-copy text-cfa-bright-blue font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                  {speaker.title}
                </p>

                {speaker.company && (
                  <p className="body-copy text-gray-600 font-medium mb-4 sm:mb-6">
                    {speaker.company}
                  </p>
                )}

                <div className="space-y-4 lg:space-y-6 text-gray-700">
                  {speaker.bio && (
                    <p className="body-copy text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed">
                      {speaker.bio}
                    </p>
                  )}

                  {/* {speaker.expertise && (
                    <div>
                      <h3 className="section-header text-sm font-semibold text-cfa-dark-blue mb-2">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {speaker.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-cfa-warm-white text-cfa-dark-blue px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )} */}

                  {/* {speaker.achievements && (
                    <div>
                      <h3 className="section-header text-sm font-semibold text-cfa-dark-blue mb-2">
                        Notable Achievements
                      </h3>
                      <ul className="body-copy text-sm space-y-1">
                        {speaker.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cfa-bright-blue mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </div>

                {/* Social Links */}
                {speaker.social && (
                  <div className="flex gap-3 mt-6 justify-center sm:justify-start">
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-cfa-bright-blue text-white rounded-full flex items-center justify-center hover:bg-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue"
                        aria-label={`Visit ${speaker.name}'s LinkedIn profile`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          role="img"
                          aria-label="LinkedIn icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a
                        href={speaker.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-cfa-bright-blue text-white rounded-full flex items-center justify-center hover:bg-cfa-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cfa-bright-blue"
                        aria-label={`Visit ${speaker.name}'s Twitter profile`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          role="img"
                          aria-label="Twitter icon"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
