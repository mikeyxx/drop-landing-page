import React from 'react';

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
                facilitate connections between you and qualified drivers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">2. Account Registration</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>You must be 18 years or older to create an account</li>
                <li>Provide accurate and current information</li>
                <li>Maintain security of your account credentials</li>
                <li>One account per person</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">3. Ride Booking and Payment</h2>
              <p className="text-neutral-700 mb-4">
                Ride requests are subject to driver availability. Pricing is calculated based 
                on time, distance, and demand. Payment is automatically processed through your 
                selected payment method. Cancellation fees may apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">4. Passenger Conduct</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Treat drivers and vehicles with respect</li>
                <li>Follow all local laws and regulations</li>
                <li>No smoking, drinking, or illegal activities</li>
                <li>Be ready at pickup location on time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">5. Safety and Liability</h2>
              <p className="text-neutral-700 mb-4">
                While Drop implements safety measures, you ride at your own risk. Report safety 
                concerns immediately through the app. Drop is not liable for actions of 
                independent driver partners.
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
                Drop reserves the right to suspend or terminate accounts for violations of these 
                terms, fraudulent activity, or behavior that compromises safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-500 mb-4">8. Contact Information</h2>
              <p className="text-neutral-700">
                For questions about these terms, contact our passenger support team at 
                <a href="mailto:support@drop.com" className="text-secondary-400 hover:text-secondary-500"> support@drop.com</a> 
                or call (555) 123-DROP.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerTerms;