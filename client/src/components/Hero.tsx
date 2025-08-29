import { Button } from "@/components/ui/button";
import { Play, Check, Shield, Smartphone } from "lucide-react";
import heroScreenshot1 from "@assets/image_1755602695785.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-navy via-purple-950 to-navy-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-60 right-40 w-3 h-3 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight" data-testid="hero-headline">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">The Smart</span><br />
              <span className="bg-gradient-to-r from-vibrant-blue to-vibrant-green bg-clip-text text-transparent">Way to Train</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl" data-testid="hero-subheadline">
              Regen & Track is the simple, yet powerful, tool for athletes who are serious about getting better. 
              Track what matters, get actionable insights, and unlock your true potential.
            </p>
            
            <div className="flex justify-center lg:justify-start mb-12">
              <a href="https://app.regenandtrack.com">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-vibrant-blue to-vibrant-green hover:opacity-90 transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg font-semibold"
                  data-testid="hero-primary-cta"
                >
                  <Play className="mr-3 h-5 w-5" />
                  Download the App
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2" data-testid="hero-feature-free">
                <Check className="h-5 w-5 text-vibrant-green" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="hero-feature-privacy">
                <Shield className="h-5 w-5 text-vibrant-blue" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="hero-feature-mobile">
                <Smartphone className="h-5 w-5 text-vibrant-orange" />
                <span>Mobile Ready</span>
              </div>
            </div>
          </div>

          <div className="relative" data-testid="hero-app-preview">
            {/* Phone mockup */}
            <div className="mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-navy rounded-[2.5rem] overflow-hidden relative">
                {/* App screenshot */}
                <div className="w-full h-full">
                  <img
                    src={heroScreenshot1}
                    alt="Regen & Track App Dashboard"
                    className="w-full h-full object-cover"
                    data-testid="hero-app-screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
