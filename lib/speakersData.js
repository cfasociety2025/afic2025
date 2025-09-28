// Centralized speakers data for AfIC 2025
export const speakersData = [
  {
    id: 1,
    name: "Razaq Ahmed, CFA",
    title: "President",
    company: "CFA Society Nigeria",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/Razaq+Ahmed%2C+CFA_2025.jpg", // Will use initials placeholder
    bio: "Razaq Ahmed is a visionary fintech leader and the newly elected President of CFA Society Nigeria, where he continues to champion ethical finance and professional excellence across the country. As Co-founder and CEO of Cowrywise, he is reshaping Nigeria’s investment culture by making wealth-building tools accessible to millions, especially the digitally connected but underserved population. At the heart of Cowrywise’s mission is a bold ambition: to unlock structured investment opportunities for millions of customers. Under Razaq’s leadership, the platform has grown to serve over 1.5 million customers, offering simple, secure access to mutual funds, fixed income products, and global investment vehicles, all through a smartphone. This is more than fintech; it’s financial empowerment. Cowrywise has made history under his guidance, becoming the first Nigerian fintech to obtain a fund/portfolio management license from the SEC, and the first admitted into the Catalyst Fund (backed by JPMorgan and UK Aid). The company’s credibility and innovation have attracted top-tier investors, including Y Combinator and Quona Capital. Razaq’s illustrious journey began at Obafemi Awolowo University, where he graduated with a First Class in Economics. He launched his finance career at Meristem Securities and Vetiva Capital, excelling as an investment research analyst. He later joined Shell Petroleum Development Company (SPDC) as a Business Economist, gaining strategic insight at the intersection of finance and energy.",
    expertise: [],
    achievements: [
      
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
    image: "https://afic2025.s3.us-east-1.amazonaws.com/2A2A1207.jpg",
    bio: "Francis Nyasomba is a CFA charterholder with extensive experience in emerging markets. He has successfully managed over $1.5B in assets and specializes in African equity markets and alternative investments.",
    expertise: [],
    achievements: [
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
