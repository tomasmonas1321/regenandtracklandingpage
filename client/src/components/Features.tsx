import { ClipboardList, Heart, Rocket, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ClipboardList,
      title: "All-in-One Tracking",
      description: "Your journal, wellness scores, recovery metrics, strength numbers, and fitness tests—all in one place.",
      gradient: "from-blue-500 to-purple-600",
      borderColor: "border-purple-700/30",
      hoverColor: "hover:border-purple-500/50",
      bgGradient: "from-purple-900/40 to-navy/60",
      testId: "feature-tracking"
    },
    {
      icon: Heart,
      title: "Know Your Body",
      description: "Get a clear picture of your readiness to perform. Our recovery and wellness scores help you make smarter training decisions.",
      gradient: "from-green-500 to-blue-600",
      borderColor: "border-blue-700/30",
      hoverColor: "hover:border-blue-500/50",
      bgGradient: "from-blue-900/40 to-navy/60",
      testId: "feature-recovery"
    },
    {
      icon: Rocket,
      title: "Level Up Your Performance",
      description: "Access a library of free tools to help you improve your mobility, mindset, and more.",
      gradient: "from-orange-500 to-red-600",
      borderColor: "border-green-700/30",
      hoverColor: "hover:border-green-500/50",
      bgGradient: "from-green-900/40 to-navy/60",
      testId: "feature-performance"
    },
    {
      icon: BarChart3,
      title: "Track Your Progress",
      description: "See how far you've come. Visualize your progress over time and stay motivated to keep pushing your limits.",
      gradient: "from-purple-500 to-pink-600",
      borderColor: "border-orange-700/30",
      hoverColor: "hover:border-orange-500/50",
      bgGradient: "from-orange-900/40 to-navy/60",
      testId: "feature-progress"
    }
  ];

  return (
    <section id="features" className="py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6" data-testid="features-headline">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Everything You Need</span><br />
            <span className="text-white">In One Place</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-testid="features-description">
            Stop juggling multiple apps. Regen & Track brings together all the tools serious athletes need to track, analyze, and optimize their performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl border ${feature.borderColor} ${feature.hoverColor} transition-all duration-300 transform hover:scale-105`}
                data-testid={feature.testId}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" data-testid={`${feature.testId}-title`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" data-testid={`${feature.testId}-description`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
