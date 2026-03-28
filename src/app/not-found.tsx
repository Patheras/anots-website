import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />

      <section className="bg-[#0A0A0B] min-h-[80vh] flex items-center justify-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">

          <div className="text-8xl sm:text-9xl font-bold text-[#5E6AD2] mb-6">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-[#D4D4D8] mb-6">
            But you found <span className="text-[#5E6AD2] font-semibold">us</span>, didn't you?
          </p>

          <p className="text-xl text-[#FAFAFA] font-semibold mb-10">
            That's ANOTS working.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5E6AD2] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7C85E3]"
          >
            Go Home
          </Link>
        </div>
      </section>
    </>
  );
}
