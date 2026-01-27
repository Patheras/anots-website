'use client';

import { modelPerformance } from '@/lib/pricing-data';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function ModelPerformance() {
  return (
    <section className="bg-[#0F0F10] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
              AI Model Performance Comparison
            </h2>
            <p className="mt-4 text-lg text-[#D4D4D8]">
              See how our AI models perform across different tiers
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-stretch">
          {/* Free Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20 flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Free</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">Try Before You Buy</p>
                </div>

                <div className="space-y-6">
                  {/* Content Quality */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Content Quality</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        {modelPerformance.free.contentQuality}/10
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3]"
                        style={{ width: `${modelPerformance.free.contentQuality * 10}%` }}
                      />
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Avg Response Time</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        {modelPerformance.free.avgSpeed}s
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                        style={{ width: `${100 - (modelPerformance.free.avgSpeed / 3 * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Success Rate</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        {modelPerformance.free.successRate}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
                        style={{ width: `${modelPerformance.free.successRate}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">AI Models:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#5E6AD2]">Apollo:</span> GPT-4o
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#EF4444]">Themis:</span> Gemini 2.0 Flash
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#10B981]">Athena:</span> DeepSeek R1
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#9333EA]">Hephaestus:</span> GPT-5.1-Codex-Mini
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      3 Active ANOTs • 20 Executions/month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Explorer Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20 flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Explorer</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">Solopreneur / Hobbyist</p>
                </div>

                <div className="space-y-6">
                  {/* Content Quality */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Content Quality</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          +1.5
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          8.0/10
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3]"
                        style={{ width: '80%' }}
                      />
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Avg Response Time</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          -0.3s
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          1.5s
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                        style={{ width: '50%' }}
                      />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Success Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          +7%
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          92%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
                        style={{ width: '92%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">AI Models:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#5E6AD2]">Apollo:</span> GPT-5
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#EF4444]">Themis:</span> Gemini 1.5 Pro
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#10B981]">Athena:</span> DeepSeek R1
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#9333EA]">Hephaestus:</span> GPT-5.1-Codex-Mini
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      12 Active ANOTs • Unlimited Executions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Pro Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2] relative flex flex-col h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#5E6AD2]/30">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  FOUNDER'S DEAL
                </span>
              </div>
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Pro</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">Agencies & Power Users</p>
                </div>

                <div className="space-y-6">
                  {/* Content Quality */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Content Quality</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          +2.5
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          9.0/10
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3]"
                        style={{ width: '90%' }}
                      />
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Avg Response Time</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          -0.6s
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          1.2s
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Success Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          +12%
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          97%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
                        style={{ width: '97%' }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-[#1A1A1B]">
                    <div className="flex items-center gap-2 text-sm text-[#10B981]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>OLYMPUS TIER Models</span>
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">OLYMPUS TIER:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#5E6AD2]">Apollo:</span> GPT-5.2
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#EF4444]">Themis:</span> Gemini 2.5 Pro
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#10B981]">Athena:</span> DeepSeek R1
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#9333EA]">Hephaestus:</span> GPT-5.1-Codex-Mini
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      42 Active ANOTs • AI-Powered Brand Room
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Enterprise Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20 flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Enterprise</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">Large Agencies / Enterprises</p>
                </div>

                <div className="space-y-6">
                  {/* Content Quality */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Content Quality</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        Custom
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3]"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Avg Response Time</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        Optimized
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Success Rate</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        99%+
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
                        style={{ width: '99%' }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-[#1A1A1B] space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#10B981]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Custom Models</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#10B981]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>On-Premise Options</span>
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">Enterprise Features:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      Custom + On-Premise Options
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      Dedicated Account Manager
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      SLA Guarantees
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      Unlimited Team Members
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      Everything in Pro + Custom Solutions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
