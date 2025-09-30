import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-primary-500 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              <strong>Last updated:</strong> January 15, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">1. Information We Collect</h2>
              <p className="text-neutral-700 mb-4">
                We collect information you provide directly, such as account registration details,
                payment information, and ride preferences. We also collect location data, device
                information, and usage analytics to improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Facilitate ride matching and navigation</li>
                <li>Process payments and resolve billing issues</li>
                <li>Provide customer support and safety features</li>
                <li>Improve our services and develop new features</li>
                <li>Send important updates and promotional content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">3. Information Sharing</h2>
              <p className="text-neutral-700 mb-4">
                We share necessary information with driver partners to facilitate rides. We may
                share aggregated, anonymized data with business partners. We do not sell personal
                information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">4. Location Information</h2>
              <p className="text-neutral-700 mb-4">
                Location data is essential for our service. We collect precise location during
                rides and general location when the app is in use. You can manage location
                permissions in your device settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">5. Data Security</h2>
              <p className="text-neutral-700 mb-4">
                We implement industry-standard security measures to protect your information,
                including encryption, secure servers, and regular security audits. However, no
                system is completely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">6. Data Retention</h2>
              <p className="text-neutral-700 mb-4">
                We retain your information as long as your account is active and as needed to
                provide services, comply with legal obligations, and resolve disputes. You can
                request account deletion at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">7. Your Rights</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of promotional communications</li>
                <li>Control location sharing preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">8. Cookies and Analytics</h2>
              <p className="text-neutral-700 mb-4">
                We use cookies and similar technologies to improve user experience, analyze
                usage patterns, and provide personalized content. You can manage cookie
                preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">9. Changes to This Policy</h2>
              <p className="text-neutral-700 mb-4">
                We may update this privacy policy periodically. We will notify users of
                significant changes through the app or email. Continued use constitutes
                acceptance of updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">10. Contact Us</h2>
              <p className="text-neutral-700">
                For privacy-related questions or to exercise your rights, contact our support team at
                <a href="mailto:support@use-drop.com" className="text-secondary-400 hover:text-secondary-500"> support@use-drop.com</a>{' '}
                or visit our help center in the app.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;