import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Smartphone, Monitor, CheckCircle, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function InstallApp() {
  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="install-title">
            How to Install the App
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-testid="install-description">
            Get Regen & Track on your device and start optimizing your athletic performance today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mobile Installation */}
          <Card className="bg-navy-light border-purple-900/30" data-testid="mobile-install-card">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <Smartphone className="h-8 w-8 text-vibrant-blue" />
                <CardTitle className="text-white text-2xl">Mobile Devices</CardTitle>
              </div>
              <CardDescription className="text-gray-300">
                Install on iOS and Android devices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Badge variant="secondary" className="mr-2">iOS</Badge>
                  iPhone & iPad
                </h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex items-start" data-testid="ios-step-1">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Open the App Store on your device
                  </li>
                  <li className="flex items-start" data-testid="ios-step-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Search for "Regen & Track"
                  </li>
                  <li className="flex items-start" data-testid="ios-step-3">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Tap "Get" to download and install
                  </li>
                </ol>
                <Button className="w-full mt-4 bg-gradient-to-r from-vibrant-blue to-vibrant-green" data-testid="ios-download-btn">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download for iOS
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Badge variant="secondary" className="mr-2">Android</Badge>
                  Android Devices
                </h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex items-start" data-testid="android-step-1">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Open Google Play Store
                  </li>
                  <li className="flex items-start" data-testid="android-step-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Search for "Regen & Track"
                  </li>
                  <li className="flex items-start" data-testid="android-step-3">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Tap "Install" to download
                  </li>
                </ol>
                <Button className="w-full mt-4 bg-gradient-to-r from-vibrant-blue to-vibrant-green" data-testid="android-download-btn">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download for Android
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Desktop Installation */}
          <Card className="bg-navy-light border-purple-900/30" data-testid="desktop-install-card">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <Monitor className="h-8 w-8 text-vibrant-blue" />
                <CardTitle className="text-white text-2xl">Desktop</CardTitle>
              </div>
              <CardDescription className="text-gray-300">
                Access from your computer browser
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Web Application</h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex items-start" data-testid="web-step-1">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Open your preferred web browser
                  </li>
                  <li className="flex items-start" data-testid="web-step-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Navigate to app.regentrack.com
                  </li>
                  <li className="flex items-start" data-testid="web-step-3">
                    <CheckCircle className="h-5 w-5 text-vibrant-green mr-2 mt-0.5 flex-shrink-0" />
                    Create your account and start tracking
                  </li>
                </ol>
                <Button className="w-full mt-4 bg-gradient-to-r from-vibrant-blue to-vibrant-green" data-testid="web-access-btn">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Web App
                </Button>
              </div>

              <div className="bg-purple-900/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">💡 Pro Tip</h4>
                <p className="text-gray-300 text-sm">
                  For the best desktop experience, you can install the web app as a PWA 
                  (Progressive Web App) by clicking the install icon in your browser's address bar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Requirements */}
        <Card className="bg-navy-light border-purple-900/30 mb-8" data-testid="requirements-card">
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Mobile Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li data-testid="req-ios">• iOS 14.0 or later</li>
                  <li data-testid="req-android">• Android 8.0 (API level 26) or later</li>
                  <li data-testid="req-storage">• 50MB available storage</li>
                  <li data-testid="req-internet">• Internet connection required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li data-testid="req-chrome">• Chrome 88+ or Safari 14+</li>
                  <li data-testid="req-firefox">• Firefox 85+ or Edge 88+</li>
                  <li data-testid="req-javascript">• JavaScript enabled</li>
                  <li data-testid="req-cookies">• Cookies enabled for best experience</li>
                </ul>
              </div>
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