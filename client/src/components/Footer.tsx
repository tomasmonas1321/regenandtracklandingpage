import { Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/regen & track logo very small_1755603375132.png";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[0px] pb-[0px] mt-[-18px] mb-[-18px]">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6 ml-[79px] mr-[79px] pl-[5px] pr-[5px]" data-testid="footer-logo">
              <img 
                src={logoImage} 
                alt="Regen & Track Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-white">Regen & Track</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-center" data-testid="footer-description">
              The smartest way to train. Track your wellness, recovery, and performance with the tools that serious athletes trust.
            </p>
            
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 ml-[19px] mr-[19px]" data-testid="footer-product-title">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="ml-[17px] mr-[17px] hover:text-white transition-colors" data-testid="footer-features">Features</a></li>
              <li><a href="#download" className="ml-[15px] mr-[15px] hover:text-white transition-colors" data-testid="footer-download">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4" data-testid="footer-support-title">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:lukaskir81@gmail.com" className="hover:text-white transition-colors" data-testid="footer-contact">Contact</a></li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors" data-testid="footer-privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-900/30 mt-12 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2025 Regen & Track. Built for athletes who demand more.</p>
        </div>
      </div>
    </footer>
  );
}
