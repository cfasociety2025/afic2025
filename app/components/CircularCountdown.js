'use client';

import React from 'react';

export default function CircularCountdown({ label, value, max, strokeColor = '#60a5fa', trackColor = '#4b5563' }) {
  const size = 96; // px
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedMax = Math.max(1, max || 1);
  const progress = Math.max(0, Math.min(1, (value % clampedMax) / clampedMax));
  const offset = circumference * (1 - progress);

  return (
    <div className="flex flex-col items-center text-white">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mb-1">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
          opacity="0.8"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          <text
            x="0"
            y="-14"
            textAnchor="middle"
            fontSize="10"
            fill="#ffffff"
            opacity="0.9"
            fontWeight="600"
          >
            {label.toUpperCase()}
          </text>
          <text x="0" y="14" textAnchor="middle" fontSize="28" fill="#ffffff" fontWeight="800">
            {value}
          </text>
        </g>
      </svg>
    </div>
  );
}


