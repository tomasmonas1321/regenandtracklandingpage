import { Star } from "lucide-react";

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
    <section className="py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white" data-testid="testimonials-headline">
            Built for Athletes, By Athletes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-testid="testimonials-description">
            Join thousands of athletes who are already training smarter and performing better with Regen & Track.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center" data-testid="stat-athletes">
            <div className="text-4xl font-black text-vibrant-blue mb-2">10K+</div>
            <div className="text-gray-300">Active Athletes</div>
          </div>
          <div className="text-center" data-testid="stat-data-points">
            <div className="text-4xl font-black text-vibrant-orange mb-2">50M+</div>
            <div className="text-gray-300">Data Points Tracked</div>
          </div>
          <div className="text-center" data-testid="stat-performance">
            <div className="text-4xl font-black text-vibrant-green mb-2">95%</div>
            <div className="text-gray-300">Report Better Performance</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${index === 0 ? 'from-purple-900/40 to-navy/60 border-purple-700/30' : index === 1 ? 'from-blue-900/40 to-navy/60 border-blue-700/30' : 'from-green-900/40 to-navy/60 border-green-700/30'} p-8 rounded-2xl border`}
              data-testid={testimonial.testId}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mb-2" data-testid={`${testimonial.testId}-rating`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic" data-testid={`${testimonial.testId}-quote`}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold" data-testid={`${testimonial.testId}-initials`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white" data-testid={`${testimonial.testId}-name`}>
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm" data-testid={`${testimonial.testId}-role`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
