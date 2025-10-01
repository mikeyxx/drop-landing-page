const PassengerTerms = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-primary-500 mb-8">
            Terms and Conditions for Passengers
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              <strong>Last updated:</strong> January 15, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">1. Service Agreement</h2>
              <p className="text-neutral-700 mb-4">
                Drop provides a technology platform that connects passengers with independent
                driver partners. We do not provide transportation services directly, but rather
                facilitate connections between you and qualified drivers. Drivers are independent contractors, and Drop does not guarantee availability at all times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">2. Account Registration</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Passengers of all ages may ride with Drop. However, accounts must be created and managed by individuals 18 years or older, or with the consent of a parent/guardian.</li>
                <li>Provide accurate and current information</li>
                <li>Maintain security of your account credentials</li>
                <li>One account per person</li>
                <li>Passengers must provide a valid phone number</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">3. Ride Booking and Payment</h2>
              <p className="text-neutral-700 mb-4">
                Ride requests are subject to driver availability. Fares are calculated based on time,
                distance, and negotiation between passenger and driver, starting from a base price.
                Payment must be made directly to the driver at the end of the trip or errand, either in
                cash or via bank transfer. Cancellation fees may apply in the future as the platform evolves.
              </p>

            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">4. Passenger Conduct</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Treat drivers and vehicles with respect</li>
                <li>Follow all local laws and regulations</li>
                <li>No smoking, drinking, or illegal activities</li>
                <li>Be ready at pickup location on time</li>
                <li>Passengers are responsible for ensuring sufficient funds to complete payment at the end of the ride/errand</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">5. Safety and Liability</h2>
              <p className="text-neutral-700 mb-4">
                While Drop implements safety measures such as driver verification and background checks,
                passengers use the platform at their own risk. Drop does not provide insurance coverage
                for passengers at this stage. All safety concerns should be reported immediately through
                the app. Drop is not liable for the actions of independent driver partners.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">6. Ratings and Feedback</h2>
              <p className="text-neutral-700 mb-4">
                You may rate and provide feedback on your ride experience. Maintain respectful
                communication. Consistently low ratings from drivers may result in account
                restrictions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">7. Account Suspension</h2>
              <p className="text-neutral-700 mb-4">
                Drop reserves the right to suspend or terminate passenger accounts for violations of these
                terms, fraudulent activity, refusal to pay drivers at the end of a trip or errand, or any
                behavior that compromises safety or disrupts the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">8. Contact Information</h2>
              <p className="text-neutral-700">
                For questions about these terms, contact our passenger support team at
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

export default PassengerTerms;