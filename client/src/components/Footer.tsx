import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6" data-testid="footer-logo">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="font-bold text-xl text-white">Regen & Track</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md" data-testid="footer-description">
              The smartest way to train. Track your wellness, recovery, and performance with the tools that serious athletes trust.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-social-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-social-instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-social-youtube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4" data-testid="footer-product-title">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors" data-testid="footer-features">Features</a></li>
              <li><a href="#download" className="hover:text-white transition-colors" data-testid="footer-download">Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-updates">Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-roadmap">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4" data-testid="footer-support-title">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-help">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-contact">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">Terms</a></li>
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
