import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className="bg-navy text-white overflow-x-hidden">
        <Navigation />
        <Hero />
        <Features />
        <AppPreview />
        <Testimonials />
        <CTA />
        <Footer />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;
