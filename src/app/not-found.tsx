import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <>
      <Navigation />
      
      <section className="bg-[#0A0A0B] min-h-[80vh] flex items-center justify-center py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
              <CardContent className="p-12 sm:p-16">
                <div className="text-8xl sm:text-9xl font-bold text-[#5E6AD2] mb-6">
                  404
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">
                  Page Not Found
                </h1>
                
                <p className="text-lg text-[#D4D4D8] mb-6">
                  But you found <span className="text-[#5E6AD2] font-semibold">us</span>, didn't you?
                </p>
                
                <div className="flex justify-center mb-6">
                  <svg className="h-16 w-16 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                
                <p className="text-xl text-[#FAFAFA] font-semibold mb-8">
                  That's ANOTS working.
                </p>
                
                <p className="text-sm text-[#A1A1AA] mb-8 max-w-md mx-auto">
                  Even our 404 page is part of the experience. If you landed here, 
                  one of our ANOTs probably brought you. Maybe it was a social post, 
                  a blog link, or a search result. Either way, you're here now.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/">
                    <Button variant="primary" size="lg">
                      Go Home
                    </Button>
                  </Link>
                  <Link href="/use-cases">
                    <Button variant="secondary" size="lg">
                      See How We Did It
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-12 pt-8 border-t border-[#1A1A1B]">
                  <p className="text-xs text-[#71717A] italic">
                    P.S. This 404 page was designed by our Content ANOT. 
                    It analyzed 100+ 404 pages and created this one to be helpful, 
                    on-brand, and maybe a little clever.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
