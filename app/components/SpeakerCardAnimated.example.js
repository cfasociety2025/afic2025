// Example Usage of SpeakerCardAnimated Component

import { SpeakerCardAnimated } from './components/SpeakerCardAnimated';

/**
 * Basic Usage Example
 */
function Example1() {
  return (
    <SpeakerCardAnimated
      image="/speakers/john-doe.jpg"
      name="John Doe"
      position="Chief Technology Officer"
      company="Tech Innovations Inc."
      country="United States"
      onViewProfile={() => console.log('Profile clicked!')}
    />
  );
}

/**
 * Grid Layout Example
 */
function Example2() {
  const speakers = [
    {
      image: "/speakers/speaker1.jpg",
      name: "Sarah Anderson",
      position: "CEO",
      company: "Global Finance Corp",
      country: "Kenya"
    },
    {
      image: "/speakers/speaker2.jpg",
      name: "Michael Chen",
      position: "Investment Director",
      company: "Venture Capital Partners",
      country: "Singapore"
    },
    {
      image: "/speakers/speaker3.jpg",
      name: "Amina Mohammed",
      position: "Managing Partner",
      company: "Africa Investment Group",
      country: "Nigeria"
    }
  ];

  const handleViewProfile = (speaker) => {
    console.log('Viewing profile for:', speaker.name);
    // Navigate to profile page or open modal
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {speakers.map((speaker, index) => (
        <SpeakerCardAnimated
          key={index}
          {...speaker}
          onViewProfile={() => handleViewProfile(speaker)}
        />
      ))}
    </div>
  );
}

/**
 * With Next.js Router Integration
 */
function Example3() {
  // import { useRouter } from 'next/navigation';
  // const router = useRouter();

  return (
    <SpeakerCardAnimated
      image="/speakers/jane-smith.jpg"
      name="Jane Smith"
      position="Financial Analyst"
      company="Investment Holdings"
      country="United Kingdom"
      onViewProfile={() => {
        // router.push('/speakers/jane-smith');
        console.log('Navigate to speaker profile');
      }}
    />
  );
}

export { Example1, Example2, Example3 };











