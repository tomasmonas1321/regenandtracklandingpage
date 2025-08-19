import { Button } from "@/components/ui/button";
import { Download, Mail, Check, Lock } from "lucide-react";

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-r from-vibrant-blue to-vibrant-green pt-[30px] pb-[30px]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white" data-testid="cta-headline">
          Ready to Train Smarter?
        </h2>
        <p className="text-blue-50 mb-8 text-[19px]" data-testid="cta-description">Stop guessing. Start optimizing. Regen & Track provide the data-driven insights you need to train smarter, recover better, and achieve results. Go beyond raw data. Let AI analyze your journal entries, wellness and recovery scores to provide personalized feedback and recommendations, helping you optimize your performance like never before.</p>
        
        <div className="flex justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-vibrant-blue hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg font-bold"
            data-testid="cta-download"
          >
            <Download className="mr-3 h-5 w-5" />
            Get Regen & Track for Free
          </Button>
        </div>

        <div className="flex items-center justify-center text-blue-50">
          <div className="flex items-center space-x-2" data-testid="cta-feature-privacy">
            <Lock className="h-5 w-5" />
            <span className="text-[14px]">Your Data Stays Private</span>
          </div>
        </div>
      </div>
    </section>
  );
}
