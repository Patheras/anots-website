'use client';

import { useState, useRef, useEffect } from 'react';
import { Info, Sparkles } from 'lucide-react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, content, className = '' }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      // If not enough space below and more space above, show on top
      if (spaceBelow < tooltipRect.height + 10 && spaceAbove > tooltipRect.height + 10) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside as any);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside as any);
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0B] rounded-full transition-all"
        aria-label="More information"
        aria-expanded={isOpen}
        aria-describedby={isOpen ? 'tooltip-content' : undefined}
      >
        {children}
      </button>

      {isOpen && (
        <div
          ref={tooltipRef}
          id="tooltip-content"
          role="tooltip"
          className={`absolute left-1/2 -translate-x-1/2 z-50 w-[280px] sm:w-[320px] px-5 py-4 bg-[#18181B] border border-white/10 rounded-lg shadow-xl ${
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
        >
          {content}
          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#18181B] border-white/10 rotate-45 ${
              position === 'top'
                ? 'bottom-[-4px] border-b border-r'
                : 'top-[-4px] border-t border-l'
            }`}
          />
        </div>
      )}
    </span>
  );
}

interface AnotExplainerProps {
  className?: string;
}

export function AnotExplainer({ className = '' }: AnotExplainerProps) {
  return (
    <Tooltip
      className={className}
      content={
        <div className="space-y-5">
          <div className="text-base text-[#FAFAFA] tracking-normal leading-relaxed">
            What's an ANOT?
          </div>
          <div className="text-sm text-[#A1A1AA] leading-loose tracking-wide">
            ANOT = Autonomous Narrative Orchestration Task
          </div>
          <div className="text-sm text-[#D4D4D8] leading-loose tracking-normal">
            The atomic unit of AI-powered marketing. Each ANOT is a self-contained automation that runs after your approval.
          </div>
          <div className="flex items-start gap-3 pt-4 border-t border-white/10">
            <Sparkles className="h-4 w-4 text-purple-400 flex-shrink-0 mt-1" />
            <div className="text-sm text-[#A1A1AA] leading-loose tracking-normal">
              Example: "Post to Instagram daily at 10am"
            </div>
          </div>
        </div>
      }
    >
      <Info className="h-5 w-5 text-purple-400 hover:text-purple-300 transition-colors" />
    </Tooltip>
  );
}
