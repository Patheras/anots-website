'use client';

import { motion } from 'framer-motion';

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  color: string;
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
}

export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  return (
    <div className="relative">
      {/* Desktop: Horizontal Flow */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 900 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Flow Arrows */}
          <motion.path
            d="M180 100 L370 100"
            stroke="url(#flowGradient1)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M365 95 L375 100 L365 105"
            stroke="url(#flowGradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />

          <motion.path
            d="M530 100 L720 100"
            stroke="url(#flowGradient2)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.path
            d="M715 95 L725 100 L715 105"
            stroke="url(#flowGradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3, delay: 2 }}
          />

          {/* Step 1: Chat */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <circle cx="100" cy="100" r="60" fill="url(#step1Gradient)" opacity="0.1" />
            <circle cx="100" cy="100" r="45" fill="#0A0A0B" stroke="#5E6AD2" strokeWidth="2" />
            
            {/* Chat bubbles icon */}
            <rect x="75" y="85" width="30" height="20" rx="4" fill="none" stroke="#5E6AD2" strokeWidth="1.5" />
            <path d="M75 105 L80 110 L85 105" fill="none" stroke="#5E6AD2" strokeWidth="1.5" />
            <rect x="95" y="95" width="20" height="15" rx="3" fill="none" stroke="#5E6AD2" strokeWidth="1.5" opacity="0.6" />
            
            <text x="100" y="35" textAnchor="middle" fill="#5E6AD2" fontSize="24" fontWeight="700">1</text>
          </motion.g>

          {/* Step 2: Review */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <circle cx="450" cy="100" r="60" fill="url(#step2Gradient)" opacity="0.1" />
            <circle cx="450" cy="100" r="45" fill="#0A0A0B" stroke="#5E6AD2" strokeWidth="2" />
            
            {/* Checkmark with magnifying glass */}
            <circle cx="445" cy="95" r="12" fill="none" stroke="#5E6AD2" strokeWidth="1.5" />
            <path d="M454 104 L462 112" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M440 95 L443 98 L450 91" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            
            <text x="450" y="35" textAnchor="middle" fill="#5E6AD2" fontSize="24" fontWeight="700">2</text>
          </motion.g>

          {/* Step 3: Execute */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <circle cx="800" cy="100" r="60" fill="url(#step3Gradient)" opacity="0.1" />
            <circle cx="800" cy="100" r="45" fill="#0A0A0B" stroke="#5E6AD2" strokeWidth="2" />
            
            {/* Rocket icon */}
            <path d="M800 85 L805 100 L800 97 L795 100 Z" fill="#5E6AD2" />
            <rect x="797" y="100" width="6" height="8" fill="#5E6AD2" />
            <path d="M795 108 L792 115 M805 108 L808 115" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" />
            
            <text x="800" y="35" textAnchor="middle" fill="#5E6AD2" fontSize="24" fontWeight="700">3</text>
          </motion.g>

          <defs>
            <linearGradient id="step1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E6AD2" />
              <stop offset="100%" stopColor="#7C85E3" />
            </linearGradient>
            <linearGradient id="step2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E6AD2" />
              <stop offset="100%" stopColor="#7C85E3" />
            </linearGradient>
            <linearGradient id="step3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E6AD2" />
              <stop offset="100%" stopColor="#7C85E3" />
            </linearGradient>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E6AD2" />
              <stop offset="100%" stopColor="#7C85E3" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E6AD2" />
              <stop offset="100%" stopColor="#7C85E3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="md:hidden">
        <svg
          viewBox="0 0 200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-full max-w-[200px]"
        >
          {/* Vertical Flow Arrows */}
          <motion.path
            d="M100 120 L100 230"
            stroke="#5E6AD2"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M95 225 L100 235 L105 225"
            stroke="#5E6AD2"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />

          <motion.path
            d="M100 320 L100 430"
            stroke="#5E6AD2"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.path
            d="M95 425 L100 435 L105 425"
            stroke="#5E6AD2"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3, delay: 2 }}
          />

          {/* Steps (same as desktop but positioned vertically) */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <circle cx="100" cy="60" r="45" fill="#0A0A0B" stroke="#5E6AD2" strokeWidth="2" />
            <rect x="80" y="50" width="25" height="15" rx="3" fill="none" stroke="#5E6AD2" strokeWidth="1.5" />
            <text x="100" y="80" textAnchor="middle" fill="#5E6AD2" fontSize="12" fontWeight="600">1</text>
          </motion.g>

          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <circle cx="100" cy="275" r="45" fill="#0A0A0B" stroke="#5E6AD2" strokeWidth="2" />
            <circle cx="95" cy="270" r="10" fill="none" stroke="#5E6AD2" strokeWidth="1.5" />
            <text x="100" y="295" textAnchor="middle" fill="#5E6AD2" fontSize="12" fontWeight="600">2</text>
          </motion.g>

          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <circle cx="100" cy="490" r="45" fill="#0A0A0B" stroke="#5E6AD2" strokeWidth="2" />
            <path d="M100 475 L105 485 L100 483 L95 485 Z" fill="#5E6AD2" />
            <text x="100" y="510" textAnchor="middle" fill="#5E6AD2" fontSize="12" fontWeight="600">3</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
