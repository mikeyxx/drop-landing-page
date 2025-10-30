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
                We collect information you provide directly, such as account registration details, and if applicable, payment information and ride preferences. We also collect location data, device
                information, and usage analytics to improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Facilitate ride matching and navigation</li>
                <li>Facilitate rides and errands, support commission settlements with drivers, and resolve service-related issues.</li>
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
                information to third parties for marketing purposes. Contact and trip details are only shared with matched drivers
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">4. Location Information</h2>
              <p className="text-neutral-700 mb-4">
                Location data is essential for our service. We collect precise location during rides
                and general location when the app is in use. This data is used only to facilitate
                rides and errands, and not for continuous background tracking unless explicitly allowed
                by the user. You can manage location permissions in your device settings.
              </p>

            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">5. Data Security</h2>
              <p className="text-neutral-700 mb-4">
                We implement industry-standard security measures to protect your information,
                including encryption, secure servers, and regular security audits. While no system
                is completely secure, Drop ensures that personal and transactional data are
                encrypted and stored securely.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">6. Data Retention</h2>
              <p className="text-neutral-700 mb-4">
                We retain your information for as long as your account is active and as necessary
                to provide our services, comply with legal and regulatory requirements, enforce our
                agreements, and resolve disputes. When you request account deletion, Drop permanently
                removes your personal information from our active systems and anonymizes any remaining
                records required for internal auditing, fraud prevention, or legal compliance.
                Your phone number, email, and identifying details are erased so that you may create
                a new account in the future if you wish to use our services again.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">7. Your Rights</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Access and review the personal information we hold about you</li>
                <li>Request corrections to inaccurate or incomplete data</li>
                <li>
                  Request permanent deletion of your account and associated data at any time. Once
                  deleted, your personal information cannot be recovered, but you may sign up again
                  as a new user if you wish to return.
                </li>
                <li>Opt out of receiving promotional communications at any time</li>
                <li>
                  Control and update your location-sharing and notification preferences through your
                  device settings
                </li>
              </ul>
              <p className="text-neutral-700 mt-4">
                These rights may be exercised through the app or by contacting our support team,
                and are subject to applicable laws and regulations in your jurisdiction.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">8. Cookies and Analytics</h2>
              <p className="text-neutral-700 mb-4">
                We use cookies and similar technologies on our website to enhance user experience,
                analyze usage patterns, and provide personalized content. In our mobile apps, we
                may use analytics tools to collect information about app performance and user
                interactions in order to improve our services.
                You can manage cookie preferences through your browser settings and control
                app permissions through your device settings.
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