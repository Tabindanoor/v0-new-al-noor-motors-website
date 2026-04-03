'use client'

import { useState } from 'react'

interface Car3DViewerProps {
  carName?: string
}

export function Car3DViewer({ carName = "Premium Vehicle" }: Car3DViewerProps) {
  const [isRotating, setIsRotating] = useState(true)

  return (
    <div className="w-full h-96 bg-gradient-to-b from-secondary to-background rounded-lg overflow-hidden border border-border flex items-center justify-center relative group">
      {/* Rotating Car SVG */}
      <svg
        viewBox="0 0 500 350"
        className="w-full h-full max-w-lg"
        style={{
          animation: isRotating ? 'carSpin 10s linear infinite' : 'none',
        }}
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="carShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="250" cy="320" rx="180" ry="30" fill="rgba(0,0,0,0.15)" />

        {/* Car Group */}
        <g filter="url(#carShadow)">
          {/* Main body */}
          <path
            d="M 140 210 L 160 160 L 340 160 L 360 210 Z"
            fill="url(#bodyGrad)"
            stroke="#d97706"
            strokeWidth="2"
          />

          {/* Roof cabin */}
          <path
            d="M 180 160 L 320 160 L 310 120 L 190 120 Z"
            fill="#1f2937"
            stroke="#d97706"
            strokeWidth="2"
          />

          {/* Front windshield - Glass effect */}
          <path
            d="M 310 155 L 360 205 L 340 200 L 320 150 Z"
            fill="#60a5fa"
            opacity="0.5"
            stroke="#3b82f6"
            strokeWidth="1"
          />

          {/* Back windshield */}
          <path
            d="M 190 155 L 160 205 L 180 200 L 200 150 Z"
            fill="#60a5fa"
            opacity="0.5"
            stroke="#3b82f6"
            strokeWidth="1"
          />

          {/* Door line */}
          <line x1="250" y1="160" x2="250" y2="210" stroke="#d97706" strokeWidth="1.5" opacity="0.6" />

          {/* Front bumper */}
            <rect x="355" y="205" width="25" height="15" fill="#dc2626" rx="3" />

          {/* Rear bumper */}
          <rect x="120" y="205" width="25" height="15" fill="#dc2626" rx="3" />

          {/* Headlights */}
          <circle cx="355" cy="185" r="7" fill="#fef08a" />
          <circle cx="355" cy="205" r="7" fill="#fef08a" />

          {/* Tail lights */}
          <circle cx="125" cy="185" r="7" fill="#fef08a" />
          <circle cx="125" cy="205" r="7" fill="#fef08a" />

          {/* Left Front Wheel */}
          <circle cx="200" cy="260" r="35" fill="#000" />
          <circle cx="200" cy="260" r="28" fill="#374151" />
          <circle cx="200" cy="260" r="18" fill="#111" />
          {/* Wheel spokes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={`lf-${angle}`}
              x1="200"
              y1="260"
              x2={200 + 20 * Math.cos((angle * Math.PI) / 180)}
              y2={260 + 20 * Math.sin((angle * Math.PI) / 180)}
              stroke="#555"
              strokeWidth="2"
              opacity="0.5"
            />
          ))}

          {/* Right Front Wheel */}
          <circle cx="300" cy="260" r="35" fill="#000" />
          <circle cx="300" cy="260" r="28" fill="#374151" />
          <circle cx="300" cy="260" r="18" fill="#111" />
          {/* Wheel spokes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={`rf-${angle}`}
              x1="300"
              y1="260"
              x2={300 + 20 * Math.cos((angle * Math.PI) / 180)}
              y2={260 + 20 * Math.sin((angle * Math.PI) / 180)}
              stroke="#555"
              strokeWidth="2"
              opacity="0.5"
            />
          ))}

          {/* Details - Door handles */}
          <circle cx="220" cy="185" r="3" fill="#999" />
          <circle cx="280" cy="185" r="3" fill="#999" />
        </g>

        {/* Car label */}
        <text
          x="250"
          y="340"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#fbbf24"
          fontFamily="serif"
        >
          {carName}
        </text>
      </svg>

      {/* Control Button */}
      <button
        onClick={() => setIsRotating(!isRotating)}
        className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100"
      >
        {isRotating ? "Pause" : "Rotate"}
      </button>

      {/* Info text */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xs text-muted-foreground">Hover to control</p>
      </div>

      <style>{`
        @keyframes carSpin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  )
}
