const DriverTerms = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-primary-500 mb-8">
            Terms and Conditions for Drivers
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              <strong>Last updated:</strong> January 15, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">1. Driver Partnership</h2>
              <p className="text-neutral-700 mb-4">
                By joining Drop as a driver partner, you agree to provide transportation services
                to passengers through our platform. You understand that you are an independent
                contractor, not an employee of Drop.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">2. Vehicle Requirements</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                {/* <li>Vehicle must be model year 2015 or newer</li> */}
                <li>Must pass safety and cleanliness inspections</li>
                <li>Valid registration and insurance required</li>
                <li>Regular maintenance and upkeep is your responsibility</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">3. Driver Requirements</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Valid driver's license</li>
                <li>Pass comprehensive background check</li>
                <li>Maintain professional conduct at all times</li>
                {/* <li>Complete Drop driver training program</li> */}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">4. Earnings and Payments</h2>
              <p className="text-neutral-700 mb-4">
                Driver earnings are calculated based on time, distance, and demand. Drop retains
                a service fee from each ride. Payments are processed weekly via direct deposit
                to your bank account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">5. Safety and Insurance</h2>
              <p className="text-neutral-700 mb-4">
                Drop provides additional insurance coverage during active rides. However, drivers
                must maintain their own personal auto insurance. Report all incidents immediately
                through the driver app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">6. Termination</h2>
              <p className="text-neutral-700 mb-4">
                Either party may terminate this agreement at any time. Drop reserves the right
                to deactivate driver accounts for violations of these terms, safety concerns,
                or poor service ratings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">7. Contact Information</h2>
              <p className="text-neutral-700">
                For questions about these terms, contact our driver support team at
                <a href="mailto:drivers@drop.com" className="text-secondary-400 hover:text-secondary-500"> drivers@drop.com</a>
                or call (555) 123-DROP.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverTerms;