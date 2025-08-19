import { Button } from "@/components/ui/button";
import { Download, Mail, Check, Lock } from "lucide-react";

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white" data-testid="cta-headline">
          Ready to Train Smarter?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed" data-testid="cta-description">
          Join thousands of athletes who have transformed their training with data-driven insights. 
          Start your journey to peak performance today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg font-bold"
            data-testid="cta-download"
          >
            <Download className="mr-3 h-5 w-5" />
            Get Regen & Track for Free
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
            data-testid="cta-updates"
          >
            <Mail className="mr-3 h-5 w-5" />
            Get Updates
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-blue-100">
          <div className="flex items-center space-x-2" data-testid="cta-feature-no-card">
            <Check className="h-5 w-5" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center space-x-2" data-testid="cta-feature-privacy">
            <Lock className="h-5 w-5" />
            <span>Your Data Stays Private</span>
          </div>
        </div>
      </div>
    </section>
  );
}
