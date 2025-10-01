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
                contractor, not an employee of Drop. Drivers are responsible for taxes, licenses, and compliance with local laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">2. Vehicle Requirements</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                {/* <li>Vehicle must be model year 2015 or newer</li> */}
                <li>Must pass safety and cleanliness inspections</li>
                <li>Valid registration and insurance required</li>
                <li>Regular maintenance and upkeep is your responsibility</li>
                <li>Local regulatory compliance</li>
                <li>Vehicle ownership/authorization</li>
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
                Drivers receive payments for completed rides and errands directly from passengers
                at the end of each trip, either in cash or via bank transfer.
              </p>
              <p className="text-neutral-700 mb-4">
                Drop charges a commission on each trip. Drivers are responsible for paying their
                accumulated commissions to Drop on a weekly basis by making a bank transfer to
                Drop’s designated account details, which are provided in-app.
              </p>
              <p className="text-neutral-700 mb-4">
                Failure to remit commissions on time may result in suspension or deactivation of
                driver accounts until all outstanding amounts are cleared.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">5. Safety and Insurance</h2>
              <p className="text-neutral-700 mb-4">
                Drivers are required to maintain valid personal auto insurance at all times.
                Drop may provide additional insurance coverage during active rides or errands. Report all incidents immediately
                through the driver app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">6. Termination</h2>
              <p className="text-neutral-700 mb-4">
                Drop reserves the right to suspend or deactivate driver accounts for reasons including,
                but not limited to, regulatory non-compliance, fraud, unsafe behavior, repeated passenger
                complaints, or violation of these Terms.
              </p>
              <p className="text-neutral-700 mb-4">
                Drivers may terminate their participation at any time by discontinuing use of the platform.
                Any outstanding commission payments owed to Drop must be settled before account termination
                is considered complete.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">7. Contact Information</h2>
              <p className="text-neutral-700">
                For questions about these terms, contact our driver support team at
                <a href="mailto:support@use-drop.com" className="text-secondary-400 hover:text-secondary-500"> support@use-drop.com</a>{' '}
                or call (+234) 09134953138.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverTerms;