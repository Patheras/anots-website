/**
 * ModelAccessList Component
 * Server component that displays multi-agent system model availability for each pricing tier
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
 */

import { Lock } from 'lucide-react';
import { ModelAccessListProps } from '@/types/pricing';

/**
 * ModelAccessList displays the AI models available for each agent in a pricing tier
 * 
 * Features:
 * - Shows agent name with model information
 * - Displays lock icon for unavailable/locked features
 * - Adds "OLYMPUS TIER" label for Pro tier
 * - Uses semantic list structure for accessibility
 * 
 * @param tier - The pricing tier (explorer, pro, enterprise)
 * @param models - Array of model access configurations
 */
export function ModelAccessList({ tier, models }: ModelAccessListProps) {
  // Show OLYMPUS TIER label only for Pro tier
  const showOlympusLabel = tier === 'pro';

  return (
    <div className="space-y-3">
      {/* OLYMPUS TIER label for Pro tier */}
      {showOlympusLabel && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 border border-[#3B82F6]/30">
          <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">
            OLYMPUS TIER
          </span>
        </div>
      )}

      {/* Model access list with semantic HTML */}
      <ul className="space-y-2" role="list" aria-label="Model access for this tier">
        {models.map((modelAccess, index) => {
          const isLocked = modelAccess.locked === true;
          
          return (
            <li 
              key={`${modelAccess.agent}-${index}`}
              className={`flex items-start gap-2 ${isLocked ? 'opacity-50' : ''}`}
            >
              {/* Lock icon for locked features */}
              {isLocked && (
                <Lock 
                  className="w-4 h-4 text-[#71717A] mt-0.5 flex-shrink-0" 
                  aria-label="Locked feature"
                />
              )}
              
              {/* Agent and model information */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  {/* Agent name */}
                  <span className={`font-semibold text-sm ${isLocked ? 'text-[#71717A]' : 'text-[#FAFAFA]'}`}>
                    {modelAccess.agent}
                  </span>
                  
                  {/* Model name */}
                  <span className={`text-sm ${isLocked ? 'text-[#52525B]' : 'text-[#A1A1AA]'}`}>
                    {modelAccess.model}
                  </span>
                </div>
                
                {/* Optional model description */}
                {modelAccess.description && !isLocked && (
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {modelAccess.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
