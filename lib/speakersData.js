// Centralized speakers data for AfIC 2025
export const speakersData = [
  {
    id: 1,
    name: "Francis Nyasomba, CFA",
    title: "President",
    company: "CFA Society East Africa",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/Francis+N.+2.jpg",
    bio: "Francis Nyasomba is a CFA charterholder with extensive experience in emerging markets. He has successfully managed over $1.5B in assets and specializes in African equity markets and alternative investments.",
    expertise: [],
    achievements: [
    ],
    social: {
      linkedin: " "
    },
    featured: true
  },
  {
    id: 2,
    name: "Razaq Ahmed, CFA",
    title: "President",
    company: "CFA Society Nigeria",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/Razaq+Ahmed%2C+CFA_2025.jpg", // Will use initials placeholder
    bio: "Razaq Ahmed is a visionary fintech leader and the newly elected President of CFA Society Nigeria, where he continues to champion ethical finance and professional excellence across the country. As Co-founder and CEO of Cowrywise, he is reshaping Nigeria’s investment culture by making wealth-building tools accessible to millions, especially the digitally connected but underserved population. At the heart of Cowrywise’s mission is a bold ambition: to unlock structured investment opportunities for millions of customers. Under Razaq’s leadership, the platform has grown to serve over 1.5 million customers, offering simple, secure access to mutual funds, fixed income products, and global investment vehicles, all through a smartphone. This is more than fintech; it’s financial empowerment. Cowrywise has made history under his guidance, becoming the first Nigerian fintech to obtain a fund/portfolio management license from the SEC, and the first admitted into the Catalyst Fund (backed by JPMorgan and UK Aid). The company’s credibility and innovation have attracted top-tier investors, including Y Combinator and Quona Capital. Razaq’s illustrious journey began at Obafemi Awolowo University, where he graduated with a First Class in Economics. He launched his finance career at Meristem Securities and Vetiva Capital, excelling as an investment research analyst. He later joined Shell Petroleum Development Company (SPDC) as a Business Economist, gaining strategic insight at the intersection of finance and energy.",
    expertise: [],
    achievements: [
      
    ],
    social: {
      linkedin: " ",
      twitter: " "
    },
    featured: true // Show on homepage
  },
  {
    id: 3,
    name: "Jojo Kakra Bannerman, CFA",
    title: "President",
    company: "CFA Society Ghana",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/Jojo+-+President%2C+CFA+Society+Ghana.jpg", // Will use initials placeholder
    bio: "Jojo Kakra Bannerman, CFA is a seasoned finance executive with over 15 years of leadership experience in capital markets, derivatives, and sovereign advisory across Africa. He is Executive Director and Head of Markets and Banks & Broker Dealer Sales at Standard Chartered Bank Ghana, where he drives strategic client engagement, risk-managed growth, and cross-border market development across West Africa. Throughout his career, Jojo has advised governments, regulators, and financial institutions on liability management, debt restructuring, innovative funding strategies, and the use of financial derivatives for risk management. Beyond his corporate role, Jojo serves as President of CFA Society Ghana, where he champions ethical leadership, professional excellence, and market transparency. Passionate about mentorship and financial literacy, he is committed to nurturing the next generation of finance professionals. Jojo holds a BSc in Electrical/Electronic Engineering from Kwame Nkrumah University of Science and Technology, a Postgraduate Certificate in Business & Finance from the London School of Business and Finance, and is a CFA Charterholder. He is also an alumnus of the Oxford Saïd Business School Senior Leadership Programme. Outside of work, he enjoys mentoring, traveling, reading, and playing golf.",
    expertise: [],
    achievements: [
      
    ],
    social: {
      linkedin: " ",
      twitter: " "
    },
    featured: true // Show on homepage
  },

  {
    id: 4,
    name: "Thato Mashigo, CFA",
    title: "President",
    company: "CFA Society South Africa",
    image: "https://afic2025.s3.us-east-1.amazonaws.com/Thato+Mashigo+Pic+1.jpg",
    bio: "Thato is the President of CFA Society South Africa, a Venture Fellow at Insignia Ventures, and a Portfolio Manager at Sanlam. He was a founding member of 100 Women in Finance South Africa and the only male on its National Working Committee. Thato previously sat on the Group Risk and Governance Council for the City of Johannesburg. A noted public speaker and thought leader within the South African investment community, Thato regularly appears on CNBC Africa, 702 Radio, and SABC Business News. He has written for Business Day and is a guest lecturer at GIBS Business School's MBA program. He previously lectured finance for one of the only two CFA accredited schools in South Africa. Thato has over a decade's experience in finance and investments, having worked at Citigroup, Credit Suisse, BNP Paribas and currently Sanlam. He holds an Economics degree from Rhodes University; a Finance (Hons) degree from the University of Cape Town; and a Masters in Finance degree from INSEAD. He also holds the CFA and CAIA designations. Thato has lived on four continents, having worked as a Casino Dealer, an English Teacher, and Film Producer along the way.",
    expertise: [],
    achievements: [
    ],
    social: {
      linkedin: " https://www.linkedin.com/in/thatomashigo/",
      twitter: "https://x.com/ThatoCFA "
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
