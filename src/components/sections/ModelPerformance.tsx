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

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Free Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Explorer</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">Free Forever</p>
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

                  {/* Risk Detection */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Risk Detection</span>
                      <span className="text-sm font-semibold text-[#FAFAFA]">
                        {modelPerformance.free.riskDetection}/10
                      </span>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#EF4444] to-[#F87171]"
                        style={{ width: `${modelPerformance.free.riskDetection * 10}%` }}
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

                  {/* Features */}
                  <div className="pt-4 border-t border-[#1A1A1B]">
                    <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>No multimodal support</span>
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">AI Models:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#5E6AD2]">Qubik:</span> Gemini 2.0 Flash
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#EF4444]">Themis:</span> DeepSeek R1
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#10B981]">Core:</span> Gemini 2.0 Flash
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#9333EA]">Brand Archaeologist:</span> Gemini 2.0 Flash Exp + 1.5 Pro
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      (3 excavations/month)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Pro Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#5E6AD2] px-3 py-1 text-xs font-semibold text-white">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Recommended
                </span>
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Standard</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">$9.90/month</p>
                </div>

                <div className="space-y-6">
                  {/* Content Quality */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Content Quality</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.standard.improvement?.contentQuality}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.standard.contentQuality}/10
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3]"
                        style={{ width: `${modelPerformance.standard.contentQuality * 10}%` }}
                      />
                    </div>
                  </div>

                  {/* Risk Detection */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Risk Detection</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.standard.improvement?.riskDetection}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.standard.riskDetection}/10
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#EF4444] to-[#F87171]"
                        style={{ width: `${modelPerformance.standard.riskDetection * 10}%` }}
                      />
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Avg Response Time</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.standard.improvement?.speed}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.standard.avgSpeed}s
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                        style={{ width: `${100 - (modelPerformance.standard.avgSpeed / 3 * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Success Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.standard.improvement?.successRate}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.standard.successRate}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
                        style={{ width: `${modelPerformance.standard.successRate}%` }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-[#1A1A1B]">
                    <div className="flex items-center gap-2 text-sm text-[#10B981]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Multimodal support</span>
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">AI Models:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#5E6AD2]">Qubik:</span> Gemini 1.5 Pro
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#EF4444]">Themis:</span> Claude 3.5 Haiku
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#10B981]">Core:</span> DeepSeek R1
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#9333EA]">Brand Archaeologist:</span> Gemini 2.0 Flash Exp + 1.5 Pro
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      (10 excavations/month)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Agency Tier */}
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Pro</h3>
                  <p className="text-[#A1A1AA] text-sm mt-2">$49.90/month</p>
                </div>

                <div className="space-y-6">
                  {/* Content Quality */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Content Quality</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.pro.improvement?.contentQuality}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.pro.contentQuality}/10
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3]"
                        style={{ width: `${modelPerformance.pro.contentQuality * 10}%` }}
                      />
                    </div>
                  </div>

                  {/* Risk Detection */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Risk Detection</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.pro.improvement?.riskDetection}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.pro.riskDetection}/10
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#EF4444] to-[#F87171]"
                        style={{ width: `${modelPerformance.pro.riskDetection * 10}%` }}
                      />
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Avg Response Time</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.pro.improvement?.speed}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.pro.avgSpeed}s
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                        style={{ width: `${100 - (modelPerformance.pro.avgSpeed / 3 * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#D4D4D8]">Success Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#10B981]">
                          {modelPerformance.pro.improvement?.successRate}
                        </span>
                        <span className="text-sm font-semibold text-[#FAFAFA]">
                          {modelPerformance.pro.successRate}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1A1A1B] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
                        style={{ width: `${modelPerformance.pro.successRate}%` }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-[#1A1A1B] space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#10B981]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Multimodal support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#10B981]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Extended thinking chains</span>
                    </div>
                  </div>
                </div>

                {/* Models */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] mb-3">Flagship Models:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#5E6AD2]">Qubik:</span> GPT-4o (OpenAI)
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#EF4444]">Themis:</span> Claude 3.5 Sonnet Extended
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#10B981]">Core:</span> Claude 3.5 Sonnet Extended
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      <span className="text-[#9333EA]">Brand Archaeologist:</span> Gemini 2.0 Flash Exp + 1.5 Pro
                    </div>
                    <div className="text-xs text-[#71717A] mt-2">
                      (Unlimited excavations)
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
