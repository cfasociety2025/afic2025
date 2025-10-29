'use client';

import { useState } from 'react';

const CURRENCY = 'USD';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: CURRENCY,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const ticketsData = [
  {
    id: 'member',
    name: 'Member Conference Ticket',
    price: 200,
    tiers: [
      { label: 'Early Bird (Sep 22 – Oct 31, 2025)', price: 200 },
      { label: 'Regular (Nov 1 – Nov 30, 2025)', price: 300 },
      { label: 'Late (Dec 1 – Dec 9, 2025)', price: 500 },
    ],
  },
  {
    id: 'non-member',
    name: 'Non‑Member Conference Ticket',
    price: 300,
    tiers: [
      { label: 'Early Bird (Sep 22 – Oct 31, 2025)', price: 300 },
      { label: 'Regular (Nov 1 – Nov 30, 2025)', price: 400 },
      { label: 'Late (Dec 1 – Dec 9, 2025)', price: 600 },
    ],
  },
  {
    id: 'candidate',
    name: 'Candidate Conference Ticket',
    price: 100,
    tiers: [
      { label: 'Early Bird (Sep 22 – Oct 31, 2025)', price: 100 },
      { label: 'Regular (Nov 1 – Nov 30, 2025)', price: 150 },
      { label: 'Late (Dec 1 – Dec 9, 2025)', price: 250 },
    ],
  },
  {
    id: 'dinner',
    name: 'Dinner',
    price: 100,
    tiers: [
      { label: 'Member', price: 100 },
      { label: 'Non-member', price: 150 },
    ],
  },



  { id: 'golf', name: 'Golf Networking Experience', price: 250 },
  { id: 'cultural', name: 'Cultural Heritage Tour', price: 120 },
];

export default function TicketsList() {
  const [expanded, setExpanded] = useState({});

  return (
    <div className="space-y-6">
      {ticketsData.map((t) => (
        <div key={t.id} className="border border-gray-200 p-4 sm:p-6">
          <div className="grid grid-cols-12 items-center gap-4">
            {/* Ticket type */}
            <div className="col-span-12 md:col-span-6">
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Ticket type</div>
              <div className="text-base sm:text-lg font-medium text-gray-900">{t.name}</div>
              <button
                type="button"
                className="mt-2 text-sm text-cfa-dark-blue hover:text-black inline-flex items-center"
                onClick={() => setExpanded((e) => ({ ...e, [t.id]: !e[t.id] }))}
                aria-expanded={!!expanded[t.id]}
              >
                More info
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Price */}
            <div className="col-span-6 md:col-span-3">
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Price</div>
              <div className="text-lg font-semibold text-gray-900">{formatter.format(t.price)}</div>
            </div>

            {/* Action */}
            <div className="col-span-6 md:col-span-3 flex md:justify-end">
              <a
                href="https://app.glueup.com/event/156136/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-cfa-bright-blue text-white px-4 py-2 font-semibold hover:bg-black transition-colors"
                aria-label={`Register for ${t.name} on Glue Up`}
              >
                Register
              </a>
            </div>
          </div>

          {/* Expanded details */}
          {expanded[t.id] && (
            <div className="mt-4 text-sm text-gray-700">
              {Array.isArray(t.tiers) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {t.tiers.map((tier) => (
                    <li key={tier.label} className="flex justify-between">
                      <span>{tier.label}</span>
                      <span className="font-medium">{formatter.format(tier.price)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Standard price applies.</p>
              )}
            </div>
          )}
        </div>
      ))}

    </div>
  );
}


