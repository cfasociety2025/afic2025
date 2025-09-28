// Centralized speakers data for AfIC 2025
export const speakersData = [
  {
    id: 1,
    name: "Razaq Ahmed, CFA",
    title: "President",
    company: "CFA Society Nigeria",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/razaq.jpg", // Will use initials placeholder
    bio: "Dr. Sarah Johnson is a seasoned investment professional with over 20 years of experience in African capital markets. She has led numerous successful investment initiatives across the continent and is a thought leader in sustainable finance.",
    expertise: ["Sustainable Finance", "Capital Markets", "Investment Strategy", "ESG Investing"],
    achievements: [
      "Led $2B infrastructure investment program across Africa",
      "Published 50+ research papers on African financial markets",
      "Named 'Finance Leader of the Year' by African Business Magazine"
    ],
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson"
    },
    featured: true // Show on homepage
  },
  {
    id: 2,
    name: "Francis Nyasomba, CFA",
    title: "President",
    company: "CFA East Africa",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/WhatsApp+Image+2025-09-10+at+15.30.44.jpeg",
    bio: "Francis Nyasomba is a CFA charterholder with extensive experience in emerging markets. He has successfully managed over $1.5B in assets and specializes in African equity markets and alternative investments.",
    expertise: ["Emerging Markets", "Equity Analysis", "Portfolio Management", "Risk Management"],
    achievements: [
      "Generated 15%+ annual returns over 10 years",
      "Founded Lagos Investment Partners in 2015",
      "Board member of CFA Society Nigeria"
    ],
    social: {
      linkedin: "https://linkedin.com/in/michael-okonkwo"
    },
    featured: true
  },

  
 
];

// Helper functions to get speakers
export const getFeaturedSpeakers = (limit = 6) => {
  return speakersData.filter(speaker => speaker.featured).slice(0, limit);
};

export const getAllSpeakers = () => {
  return speakersData;
};

export const getSpeakerById = (id) => {
  return speakersData.find(speaker => speaker.id === id);
};

export const getNonFeaturedSpeakers = () => {
  return speakersData.filter(speaker => !speaker.featured);
};
