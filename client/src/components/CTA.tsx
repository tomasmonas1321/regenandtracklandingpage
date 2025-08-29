import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-navy-light" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" data-testid="cta-headline">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="cta-subheadline">
            Stop guessing, start improving. Join a community of athletes dedicated to smart training and consistent progress. 
            Regen & Track is free, private, and built for you.
          </p>
          <div className="mt-8 flex justify-center" data-testid="cta-button-container">
            <a href="https://app.regenandtrack.com">
              <Button
                size="lg"
                className="bg-gradient-to-r from-vibrant-blue to-vibrant-green hover:opacity-90 transform hover:scale-105 transition-all duration-200 px-10 py-8 text-xl font-semibold"
                data-testid="cta-primary-button"
              >
                Get Started Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
