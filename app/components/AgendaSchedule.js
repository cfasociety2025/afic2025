'use client';

import React, { useState } from 'react';

const AgendaPage = () => {
  const [activeDay, setActiveDay] = useState(1);

  const agendaData = {
    day1: {
      date: "10th Dec 2025",
      venue: "Mövenpick Hotel & Residences, Nairobi.",
      sessions: [
        {
          time: "8:00 - 9:00 AM",
          title: "Cultural Performances, Registration & Networking Coffee",
          speaker: null,
          role: null
        },
        {
          time: "9:00 - 9:30 AM",
          title: "Opening Ceremony & Welcome Remarks",
          speaker: null,
          role: "CFA Society EA + Host Officials"
        },
        {
          time: "9:30 - 10:00 AM",
          title: "Keynote: Africa's Capital Market Future – Integration & Sustainability",
          speaker: null,
          role: null
        },
        {
          time: "10:00 - 11:00 AM",
          title: "Capital Formation Research Report Launch ",
          speaker: null,
          //role: "with moderated Q&A"
        },
        {
          time: "11:00 - 11:05 AM",
          title: "Sponsor Highlight",
          speaker: null,
          role: null
        },
        {
          time: "11:05 - 11:25 AM",
          title: "Networking Tea Break",
          speaker: null,
          role: null
        },
        {
          time: "11:25 - 12:25 PM",
          title: "Panel 1: Mobilizing Intra-African Capital &/ Trade – Challenges & Solutions",
          speaker: null,
          role: null
        },
        {
          time: "12:25 - 1:15 PM",
          title: " Fireside Chat: Unlocking Africa’s Investment Potential - The Future of Capital, Capability, and Collaboration",
          speaker: null,
          role: null
        },
        {
          time: "1:15 PM - 2:15 PM",
          title: "Networking Lunch",
          speaker: null,
          role: null
        },
        {
          time: "2:15 PM - 3:15 PM",
          title: "Panel 2: Investor Perspectives – Trends in Sovereign Wealth & Private Capital Deployment",
          speaker: null,
          role: null
        },
        {
          time: "3:15 - 4:00 PM",
          title: " Fireside Chat: Can Africa Afford To Go Green? Climate Goals Vs. Industrial Ambitions",
          speaker: null,
          role: null
        },
        {
          time: "4:00 - 4:05 PM",
          title: "Sponsor Highlight",
          speaker: null,
          role: null
        },
        {
          time: "4:05 - 5:05 PM",
          title: "CFA Society Africa Presidents' Panel: Driving Regional Solutions",
          speaker: null,
          role: null
        },
        {
          time: "5:05 - 5:15 PM",
          title: "Closing Remarks",
          speaker: null,
          role: null
        },
        {
          time: "5:15 - 5:45 PM",
          title: "Your CFA Journey: A Session for Candidates and Prospective Candidates",
          speaker: null,
          role: null
        },
        //EVENING GALA
        {
          time: "7:00 PM - 7:20 PM",
          title: "Welcome Remarks & Cultural Performances",
          speaker: null,
          //role: "Evening Gala"
        },
        {
          time: "7:20 PM - 7:45 PM",
          title: "Guest of Honor Keynote",
          speaker: null,
          role: "The Next Generation of African Investment Professionals"
        },
        {
          time: "7:45 PM - 8:05 PM",
          title: "Charter Award Ceremony",
          speaker: null,
          role: "Honoring new Charterholders across African Societies"
        },
      
        {
          time: "8:05 PM - 8:10 PM",
          title: "Recognition of Partners & Sponsors",
          speaker: null,
          role: null
        },
        {
          time: "8:10 PM - 8:20 PM",
          title: " Closing Toast by Guest of Honor",
          speaker: null,
          role: null
        },
        {
          time: "8:20 PM - 9:20 PM",
          title: "Gala Dinner Service",
          speaker: null,
          role: null
        },
        {
          time: "9:20 PM - 10:00 PM",
          title: "Networking & Open Floor Dance",
          speaker: null,
          role: null
        }
      ]
    },
    day2: {
      date: "11th Dec 2025",
      venue: "Mövenpick Hotel & Residences, Nairobi.",
      sessions: [
        {
          time: "8:00 - 9:00 AM",
          title: "Investment Policy Dialogue Breakfast:",
          speaker: null,
          role: `Unlocking Ethiopia’s Potential: Local Capital, Industrial
 Policy & East African Synergies`
        },
        {
          time: "9:00 - 9:30 AM",
          title: "Technical Spotlight: Case Study – Regional Pension Fund Collaboration For Green Bond Success",
          speaker: null,
          role: null
        },
        {
          time: "9:30 - 10:00 AM",
          title: "Networking Tea Break",
          speaker: null,
          role: null
        },
        {
          time: "10:00 - 11:00 AM",
          title: "Parallel Deep-Dive Tracks (Pre-registration required)",
          speaker: "Track 1 – Policy Integration & Risk Resilience: Regional frameworks for capital mobility, cross-border listings.",
          role: "Track 2 – Innovation & SMEs: Scaling fintech and SME hubs as investable assets."
        },
        {
          time: "11:00 - 12:00 PM",
          title: "Plenary Wrap-Up Panel: African Investors' Collective Voice",
          speaker: null,
          role: null
        },
        {
          time: "12:00 - 12:30 PM",
          title: "Closing Remarks & Commitment to Action",
          speaker: null,
          role: null
        },
        {
          time: "12:30 - 1:30 PM",
          title: "Networking Lunch",
          speaker: null,
          role: null
        },
        {
          time: "1:30 - 5:30 PM",
          title: "Optional Immersion Experiences (Pre-Registration Required)",
          speaker: "Golf Networking Experience",
          role: "Nairobi, Cultural Heritage"
        },
        {
          time: "1:30 - 5:30 PM",
          title: "Private Industry Table (Invite only)",
          
        },
        {
          time: "7:00 - 10:00 PM",
          title: "Cocktail Reception",
          speaker: null,
          role: null
        }
      ]
    }
  };

  const currentData = activeDay === 1 ? agendaData.day1 : agendaData.day2;

  const isBreak = (title) => {
    const lowerTitle = title.toLowerCase();
    return lowerTitle.includes('break') || 
           lowerTitle.includes('lunch') || 
           lowerTitle.includes('networking') ||
           lowerTitle.includes('gala') ||
           lowerTitle.includes('reception') ||
           lowerTitle.includes('dinner') ||
           lowerTitle.includes('dance') ||
           lowerTitle.includes('performances');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex mb-0">
          <button
            onClick={() => setActiveDay(1)}
            className={`px-8 py-3 font-semibold transition-colors ${
              activeDay === 1
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-8 py-3 font-semibold transition-colors ${
              activeDay === 2
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Day 2
          </button>
        </div>

        {/* Header */}
        <div className="bg-cfa-bright-blue text-white px-8 py-6 flex justify-between items-center">
          <div className="text-lg font-semibold">{currentData.date}</div>
          <div className="text-lg font-semibold">Venue: {currentData.venue}</div>
        </div>

        {/* Agenda Items */}
        <div className="bg-white">
          {currentData.sessions.map((session, index) => (
            <div
              key={index}
              className={`px-8 py-6 border-b border-gray-200 ${
                isBreak(session.title) ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <div className="flex gap-8">
                <div className="w-48 flex-shrink-0">
                  <div className="font-semibold text-gray-900">{session.time}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {session.title}
                  </h3>
                  {session.speaker && (
                    <div className="text-gray-700 mb-1">{session.speaker}</div>
                  )}
                  {session.role && (
                    <div className="text-blue-600">{session.role}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;