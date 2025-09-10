import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-navy text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <AppPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}