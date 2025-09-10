import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, Smartphone, Monitor, Globe } from "lucide-react";
import { Link } from "wouter";
import pwaInstallImage from "@assets/pwa-install-example.png";
import iosInstallImage from "@assets/image_1757515122918.png";

export default function InstallApp() {
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios'>('android');

  return (
    <div className="bg-navy text-white min-h-screen text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="install-title">
            How to Install the App
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-testid="install-description">
            Get Regen & Track on your device as a Progressive Web App (PWA) and start optimizing your athletic performance today!
          </p>
        </div>

        {/* What is PWA Section */}
        <Card className="bg-navy-light border-purple-900/30 mb-8" data-testid="pwa-info-card">
          <CardHeader>
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Globe className="h-8 w-8 text-vibrant-blue" />
              <CardTitle className="text-white text-2xl">What is a Progressive Web App?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 text-center text-[14px]">
            <p className="text-gray-300 leading-relaxed">
              A Progressive Web App (PWA) is a web application that works like a native mobile app. You can install it directly from your browser to your home screen on any device - phone, tablet, or computer. It works offline, can send notifications, and feels just like a regular app, but without needing to download it from an app store.
            </p>
          </CardContent>
        </Card>

        {/* Installation Steps with Visual Example */}
        <Card className="bg-navy-light border-purple-900/30 mb-8" data-testid="install-steps-card">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Easy Installation Steps</CardTitle>
            <CardDescription className="text-gray-300 text-center">
              Install Regen & Track directly from your browser in just a few clicks
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Platform Toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-navy-dark rounded-lg p-1 flex" data-testid="platform-toggle">
                <Button
                  variant={selectedPlatform === 'android' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedPlatform('android')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedPlatform === 'android' 
                      ? 'bg-vibrant-blue text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  data-testid="android-toggle-btn"
                >
                  Android
                </Button>
                <Button
                  variant={selectedPlatform === 'ios' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedPlatform('ios')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedPlatform === 'ios' 
                      ? 'bg-vibrant-blue text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  data-testid="ios-toggle-btn"
                >
                  iOS
                </Button>
              </div>
            </div>

            {/* Visual Example */}
            <div className="mb-8">
              {selectedPlatform === 'android' && (
                <>
                  <img 
                    src={pwaInstallImage} 
                    alt="Android PWA Installation Example showing browser menu with Add to Home Screen option" 
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                    data-testid="android-install-image"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Example: Installing Regen & Track as a PWA on Android
                  </p>
                </>
              )}
              {selectedPlatform === 'ios' && (
                <>
                  <img 
                    src={iosInstallImage} 
                    alt="iOS PWA Installation Example showing Safari share menu with Add to Home Screen option" 
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                    data-testid="ios-install-image"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Example: Installing Regen & Track as a PWA on iOS
                  </p>
                </>
              )}
            </div>

            {/* Installation Steps */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mobile Installation - Platform Specific */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-vibrant-blue mr-2" />
                  On {selectedPlatform === 'android' ? 'Android' : 'iOS'}
                </h3>
                {selectedPlatform === 'android' && (
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start" data-testid="android-step-1">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open Regen & Track in Chrome or Firefox</span>
                    </li>
                    <li className="flex items-start" data-testid="android-step-2">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tap the menu button (⋮) in your browser</span>
                    </li>
                    <li className="flex items-start" data-testid="android-step-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Select "Add to Home Screen" or "Install App"</span>
                    </li>
                    <li className="flex items-start" data-testid="android-step-4">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tap "Install" and enjoy the app!</span>
                    </li>
                  </ol>
                )}
                {selectedPlatform === 'ios' && (
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start" data-testid="ios-step-1">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open Regen & Track in Safari browser</span>
                    </li>
                    <li className="flex items-start" data-testid="ios-step-2">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tap the Share button (⬆️) at the bottom</span>
                    </li>
                    <li className="flex items-start" data-testid="ios-step-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Scroll down and tap "Add to Home Screen"</span>
                    </li>
                    <li className="flex items-start" data-testid="ios-step-4">
                      <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tap "Add" to install the app</span>
                    </li>
                  </ol>
                )}
              </div>

              {/* Desktop Installation */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-vibrant-blue mr-2" />
                  On Desktop
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start" data-testid="desktop-step-1">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Visit Regen & Track in Chrome, Edge, or Safari</span>
                  </li>
                  <li className="flex items-start" data-testid="desktop-step-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Look for the install icon (⊕) in the address bar</span>
                  </li>
                  <li className="flex items-start" data-testid="desktop-step-3">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Click the install icon and confirm</span>
                  </li>
                  <li className="flex items-start" data-testid="desktop-step-4">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>The app will open in its own window</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-purple-900/20 p-6 rounded-lg mt-6">
              <h4 className="text-white font-semibold mb-3 text-center">✨ Benefits of Installing as PWA</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li data-testid="benefit-1">• Works offline - track your workouts even without internet</li>
                <li data-testid="benefit-2">• Faster loading times and smoother performance</li>
                <li data-testid="benefit-4">• Home screen shortcut for quick access</li>
                <li data-testid="benefit-5">• App-like experience without app store downloads</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* System Requirements */}
        <Card className="bg-navy-light border-purple-900/30 mb-8" data-testid="requirements-card">
          <CardContent className="p-6 pt-0 text-center text-[14px]">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Browser Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li data-testid="req-chrome">• Chrome 88+ or Safari 14+</li>
                <li data-testid="req-firefox">• Firefox 85+ or Edge 88+</li>
                <li data-testid="req-javascript">• JavaScript enabled</li>
                <li data-testid="req-cookies">• Cookies enabled for best experience</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <Button variant="outline" className="border-purple-900/30 text-white hover:bg-purple-900/20 bg-[#1e9df1]" data-testid="back-home-btn">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}