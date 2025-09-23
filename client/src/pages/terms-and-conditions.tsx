import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black mb-6" data-testid="terms-headline">
            <span className="bg-gradient-to-r from-vibrant-blue to-vibrant-green bg-clip-text text-transparent">Terms and</span>
            <span className="text-white"> Conditions</span>
          </h1>
          <p className="text-lg text-gray-300" data-testid="terms-last-updated">
            Last Updated: September 23, 2025
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p data-testid="terms-intro">
              Welcome to Regen & Track! These Terms and Conditions ("Terms") govern your use of the Regen & Track mobile application (the "App") and any related services provided.
            </p>
            
            <p>
              By creating an account and using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.
            </p>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-1">1. App Features and Services</h2>
              <p className="mb-4">
                Regen & Track is a wellness and fitness tracking application that allows users to create a personal space to monitor and improve their athletic performance. The App's features include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>All-in-One Tracking:</strong> A central location for your journal, wellness scores, recovery metrics, strength numbers, and fitness tests.</li>
                <li><strong>Wellness Monitoring:</strong> The ability to track metrics such as sleep quality, energy levels, stress, and body soreness.</li>
                <li><strong>Performance Analytics:</strong> Tools to visualize trends, and gain insights from your data to optimize your training.</li>
                <li><strong>Recovery Assessment:</strong> The ability to track recovery activities, sleep patterns, and other lifestyle factors that impact your readiness to train.</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-2">2. User Accounts</h2>
              <p>
                To use features of the App, you will need to create an account. You can create an account by signing in with your email account. You are responsible for maintaining the confidentiality of your account and are fully responsible for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-3">3. User Conduct and Restrictions</h2>
              <p className="mb-4">
                As a condition of your use of the App, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for any illegal or unauthorized purpose.</li>
                <li>Attempt to reverse engineer, decompile, disassemble, or derive the source code of the App.</li>
                <li>Use any robot, spider, scraper, or other automated means to access the App for any purpose without our express written permission.</li>
                <li>Take any action that imposes, or may impose, an unreasonable or disproportionately large load on our infrastructure.</li>
                <li>Interfere with or disrupt the security or functionality of the App or any servers or networks connected to it.</li>
                <li>Attempt to gain unauthorized access to any portion of the App or any other systems or networks connected to the App.</li>
                <li>Sell, rent, lease, or otherwise transfer your rights to the App.</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-4">4. Health and Medical Disclaimer</h2>
              <p className="mb-4">
                The App is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on the App.
              </p>
              <p>
                We are not responsible for any health problems that may result from training programs, consultations, products, or events you learn about through the App. You agree that you are voluntarily participating in these activities and assume all risks of injury to your person.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-5">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, software, and the arrangement thereof, are the exclusive property of LK Performance Ltd or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-6">6. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and share your personal information. By using the App, you agree to the collection and use of your information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-7">7. Termination</h2>
              <p>
                We may, in our sole discretion, at any time terminate or suspend your access to the App, with or without notice, for any reason, including, without limitation, a breach of these Terms.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-8">8. Disclaimers and Limitation of Liability</h2>
              <p className="mb-4">
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE." WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE USE OR THE INABILITY TO USE THE APP.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-9">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Ireland, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-10">10. Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide reasonable notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4" data-testid="terms-section-11">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:info@gpc-performance.com" className="text-vibrant-blue hover:text-vibrant-green transition-colors">info@gpc-performance.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}