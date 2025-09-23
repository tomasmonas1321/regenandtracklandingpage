import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Competitive Powerlifter",
      initials: "MJ",
      gradient: "from-vibrant-blue to-vibrant-green",
      quote: "Finally, an app that gets it. The recovery tracking has completely changed how I approach my training cycles.",
      testId: "testimonial-marcus"
    },
    {
      name: "Alex Smith",
      role: "Marathon Runner",
      initials: "AS",
      gradient: "from-vibrant-green to-vibrant-blue",
      quote: "The data visualization is incredible. I can see exactly how my sleep affects my performance the next day.",
      testId: "testimonial-alex"
    },
    {
      name: "Jessica Davis",
      role: "CrossFit Athlete",
      initials: "JD",
      gradient: "from-vibrant-orange to-vibrant-red",
      quote: "Simple yet powerful. I've tried every fitness app out there, and this is the one that actually helped me PR.",
      testId: "testimonial-jessica"
    }
  ];

  return (
    <section className="py-24 bg-navy-light pt-[2px] pb-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="sm:text-5xl font-black mb-6 text-white text-[32px]" data-testid="testimonials-headline">Built for Athletes,  By Coaches</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed pt-[0px] pb-[0px] mt-[16px] mb-[16px]" data-testid="testimonials-description">If you are a serious athlete, data is important tor you. Regen & Track gives you the tools to track your progress, optimize your recovery, and unleash your inner champion. All for free.</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center" data-testid="stat-athletes">
            <div className="text-4xl font-black text-vibrant-blue mb-2">1K+</div>
            <div className="text-gray-300">Active Athletes</div>
          </div>
          <div className="text-center" data-testid="stat-data-points">
            <div className="text-4xl font-black text-vibrant-orange mb-2">50K+</div>
            <div className="text-gray-300">Data Points Captured</div>
          </div>
          <div className="text-center" data-testid="stat-performance">
            <div className="text-4xl font-black text-vibrant-green mb-2">95%</div>
            <div className="text-gray-300">Report Better Performance</div>
          </div>
        </div>

        {/* Testimonials Button */}
        <div className="text-center mt-16">
          <Link href="/testimonials">
            <button
              className="bg-gradient-to-r from-vibrant-blue to-vibrant-green hover:opacity-90 transform hover:scale-105 transition-all duration-200 px-12 py-6 text-xl font-bold text-white rounded-2xl shadow-2xl"
              data-testid="testimonials-cta"
            >
              Testimonials
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
