import { Metadata } from 'next';
import { Navigation } from '@/components/ui/Navigation';
import { UpdatesFeed } from '@/components/sections/UpdatesFeed';

export const metadata: Metadata = {
  title: 'Updates - ANOTS',
  description: 'Latest updates, improvements, and fixes to the ANOTS platform.',
};

export default function UpdatesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-[#0A0A0B] pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-4">
              Platform Updates
            </h1>
            <p className="text-lg text-[#D4D4D8]">
              Real-time updates from our development team
            </p>
          </div>

          {/* Updates Feed */}
          <UpdatesFeed />
        </div>
      </main>
    </>
  );
}
