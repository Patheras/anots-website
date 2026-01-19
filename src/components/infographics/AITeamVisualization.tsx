'use client';

import { motion } from 'framer-motion';

export function AITeamVisualization() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-2xl">
      <svg
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Connection Lines */}
        <motion.path
          d="M150 150 L300 150"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M300 150 L450 150"
          stroke="url(#gradient2)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Qubik - Creative Motor (Red) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <circle cx="150" cy="150" r="50" fill="url(#qubikGradient)" opacity="0.1" />
          <circle cx="150" cy="150" r="40" fill="#0A0A0B" stroke="url(#qubikGradient)" strokeWidth="2" />
          
          {/* Sparkle icon for creativity */}
          <path
            d="M150 130 L152 138 L160 140 L152 142 L150 150 L148 142 L140 140 L148 138 Z"
            fill="#DC2626"
          />
          <path
            d="M165 135 L166 140 L171 141 L166 142 L165 147 L164 142 L159 141 L164 140 Z"
            fill="#DC2626"
            opacity="0.6"
          />
          <path
            d="M135 135 L136 140 L141 141 L136 142 L135 147 L134 142 L129 141 L134 140 Z"
            fill="#DC2626"
            opacity="0.6"
          />
          
          <text x="150" y="195" textAnchor="middle" fill="#DC2626" fontSize="14" fontWeight="600">
            Qubik
          </text>
          <text x="150" y="210" textAnchor="middle" fill="#A1A1AA" fontSize="10">
            Creative
          </text>
        </motion.g>

        {/* Themis - Logic Motor (Purple) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <circle cx="300" cy="150" r="50" fill="url(#themisGradient)" opacity="0.1" />
          <circle cx="300" cy="150" r="40" fill="#0A0A0B" stroke="url(#themisGradient)" strokeWidth="2" />
          
          {/* Shield icon for protection/review */}
          <path
            d="M300 130 L285 137 L285 147 C285 157 290 162 300 167 C310 162 315 157 315 147 L315 137 Z"
            fill="none"
            stroke="#9333EA"
            strokeWidth="2"
          />
          <path
            d="M295 147 L298 150 L305 143"
            stroke="#9333EA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          <text x="300" y="195" textAnchor="middle" fill="#9333EA" fontSize="14" fontWeight="600">
            Themis
          </text>
          <text x="300" y="210" textAnchor="middle" fill="#A1A1AA" fontSize="10">
            Logic
          </text>
        </motion.g>

        {/* Core - Guide (Blue) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <circle cx="450" cy="150" r="50" fill="url(#coreGradient)" opacity="0.1" />
          <circle cx="450" cy="150" r="40" fill="#0A0A0B" stroke="url(#coreGradient)" strokeWidth="2" />
          
          {/* Compass icon for guidance */}
          <circle cx="450" cy="150" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" />
          <path
            d="M450 135 L450 145 M450 155 L450 165 M435 150 L445 150 M455 150 L465 150"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M450 140 L455 150 L450 148 L445 150 Z"
            fill="#3B82F6"
          />
          
          <text x="450" y="195" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="600">
            Core
          </text>
          <text x="450" y="210" textAnchor="middle" fill="#A1A1AA" fontSize="10">
            Guide
          </text>
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="qubikGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="themisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
