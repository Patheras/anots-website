'use client';

import { motion } from 'framer-motion';

export function PricingComparison() {
  const tiers = [
    { name: 'Free', anots: 3, color: '#71717A', height: 60 },
    { name: 'Standard', anots: 30, color: '#5E6AD2', height: 120 },
    { name: 'Pro', anots: '∞', color: '#7C85E3', height: 180 },
  ];

  return (
    <div className="mx-auto max-w-2xl py-12">
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#FAFAFA]">ANOTs Included</h3>
        <p className="mt-2 text-sm text-[#A1A1AA]">Scale as you grow</p>
      </div>

      <div className="mt-12 flex items-end justify-center gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Bar */}
            <motion.div
              className="relative w-20 rounded-t-lg"
              style={{
                height: `${tier.height}px`,
                background: `linear-gradient(to top, ${tier.color}, ${tier.color}88)`,
              }}
              initial={{ height: 0 }}
              animate={{ height: `${tier.height}px` }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            >
              {/* Value label */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <span className="text-2xl font-bold" style={{ color: tier.color }}>
                  {tier.anots}
                </span>
              </div>
            </motion.div>

            {/* Tier name */}
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-[#FAFAFA]">{tier.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 flex justify-center gap-6 text-xs text-[#A1A1AA]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#71717A]" />
          <span>3 ANOTs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#5E6AD2]" />
          <span>30 ANOTs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#7C85E3]" />
          <span>Unlimited</span>
        </div>
      </div>
    </div>
  );
}
