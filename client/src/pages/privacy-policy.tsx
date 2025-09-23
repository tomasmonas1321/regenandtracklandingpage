import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="privacy-policy-title">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300" data-testid="last-updated">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        {/* Privacy Policy Content */}
        <Card className="bg-navy-light border-purple-900/30 mb-8" data-testid="privacy-policy-content">
          <CardContent className="p-8">
            <div className="space-y-8 text-white">
              
              <section data-testid="section-information-collection">
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  Regen & Track collects information you provide during account creation, when you log wellness data, complete assessments, or contact us for support. This may include your name, email address, fitness test data, recovery metrics, and other health- and fitness-related information you choose to share.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Additionally, we may collect non-personal information such as device type, browser type, and IP address for analytics and security purposes.
                </p>
              </section>

              <section data-testid="section-information-usage">
                <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and improve fitness and wellness tracking feedback generated</li>
                  <li>Generate personalized recommendations and insights</li>
                  <li>Ensure the security and integrity of our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section data-testid="section-information-sharing">
                <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy. We may share your information with trusted service providers who assist 
                  us in operating our platform, conducting our business, or serving our users.
                </p>
              </section>

              <section data-testid="section-data-security">
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section data-testid="section-user-rights">
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and associated data</li>
                  <li>Opt out of certain communications</li>
                </ul>
              </section>

              <section data-testid="section-data-retention">
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill 
                  the purposes outlined in this privacy policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section data-testid="section-policy-changes">
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting 
                  the new privacy policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section data-testid="section-contact">
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 text-gray-300 bg-navy border border-purple-900/30 rounded-lg p-4">
                  <p className="font-medium">Email: info@gpc-performance.com</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}