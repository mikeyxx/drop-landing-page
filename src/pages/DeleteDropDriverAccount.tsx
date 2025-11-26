const DeleteDropDriverAccount = () => {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 lg:p-12">
                    <h1 className="text-4xl font-bold text-primary-500 mb-8">
                        Delete Your Drop Driver Account
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-neutral-600 mb-6">
                            <strong>Last updated:</strong> November 26, 2025
                        </p>

                        {/* Overview */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                Overview
                            </h2>
                            <p className="text-neutral-700 mb-4">
                                If you are a driver using <strong>Drop Driver – Drive & Deliver</strong> and wish to
                                permanently delete your driver account and related data, you may request deletion at
                                any time. Deleting your account removes personal information, driver verification
                                details, trip and delivery history, payout details, and other data associated with
                                your driver profile.
                            </p>

                            <p className="text-neutral-700">
                                Developer: <strong>MikeyOG</strong> (<em>DevMikey</em>) | Website:{" "}
                                <a
                                    href="https://use-drop.com"
                                    className="text-secondary-400 hover:text-secondary-500"
                                >
                                    use-drop.com
                                </a>
                            </p>
                        </section>

                        {/* In-app deletion */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                How to request account deletion in the Drop Driver app
                            </h2>
                            <p className="text-neutral-700 mb-4">
                                Drivers can delete their accounts directly from within the app. To delete your Drop
                                Driver account:
                            </p>

                            <ol className="list-decimal list-inside text-neutral-700 space-y-2 mb-4">
                                <li>Open the <strong>Drop Driver</strong> app on your device.</li>
                                <li>
                                    Go to <strong>Menu → Profile → Delete Account</strong>.
                                </li>
                                <li>Follow the on-screen instructions to confirm account deletion.</li>
                                <li>
                                    Once confirmed, your request will be completed immediately.
                                </li>
                            </ol>

                            <p className="text-neutral-700">
                                You may be required to verify your identity or the phone number associated with your
                                driver account before the deletion can be processed.
                            </p>
                        </section>

                        {/* Email deletion */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                Request account deletion without app access
                            </h2>

                            <p className="text-neutral-700 mb-4">
                                If you no longer have access to the Drop Driver app, you can still request account
                                deletion by emailing:
                            </p>

                            <p className="text-neutral-700 mb-4">
                                <a
                                    href="mailto:support@use-drop.com?subject=Driver%20Account%20Deletion%20Request"
                                    className="text-secondary-400 hover:text-secondary-500"
                                >
                                    support@use-drop.com
                                </a>
                            </p>

                            <p className="text-neutral-700 mb-4">Include the following information:</p>

                            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                                <li>Your full legal name</li>
                                <li>The phone number or email associated with your driver account</li>
                                <li>A statement confirming your request for permanent deletion</li>
                                <li>
                                    Any verification information we may request to confirm account ownership and
                                    compliance
                                </li>
                            </ul>

                            <p className="text-neutral-700">
                                After verification, your request will be processed according to the policy below.
                            </p>
                        </section>

                        {/* What data is deleted */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                What data will be deleted?
                            </h2>
                            <p className="text-neutral-700 mb-4">
                                When your account is deleted, the following information will be permanently removed:
                            </p>

                            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                                <li>Personal profile information (name, email, phone number)</li>
                                <li>Driver verification information</li>
                                <li>Vehicle details and uploaded documents</li>
                                <li>Trip and delivery history</li>
                                <li>Payout records & earnings history</li>
                                <li>In-app support messages (unless required to retain)</li>
                                <li>Any other data uniquely associated with your driver account</li>
                            </ul>

                            <p className="text-neutral-700">
                                Anonymous aggregated data may be retained for analytics and safety purposes, but it
                                will not contain personally identifiable information.
                            </p>
                        </section>

                        {/* Timeline */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">Processing timeframe</h2>
                            <p className="text-neutral-700 mb-4">
                                Verified driver deletion requests are processed within{" "}
                                <strong>30 days</strong>. You will receive a confirmation email once your account
                                and data have been successfully deleted. Additional verification may extend this
                                timeframe.
                            </p>
                        </section>

                        {/* Reversal */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                Can deletion be reversed?
                            </h2>
                            <p className="text-neutral-700 mb-4">
                                No. Once a driver account is permanently deleted, the action cannot be reversed. If
                                you submitted a deletion request by mistake, email us immediately at{" "}
                                <a
                                    href="mailto:support@use-drop.com"
                                    className="text-secondary-400 hover:text-secondary-500"
                                >
                                    support@use-drop.com
                                </a>
                                —however, we may not be able to restore deleted data.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                Contact information
                            </h2>

                            <p className="text-neutral-700 mb-2">
                                For questions or support, please contact:
                            </p>

                            <p className="text-neutral-700 mb-2">
                                Email:{" "}
                                <a
                                    href="mailto:support@use-drop.com"
                                    className="text-secondary-400 hover:text-secondary-500"
                                >
                                    support@use-drop.com
                                </a>
                            </p>

                            <p className="text-neutral-700 mb-2">
                                Phone: <strong>(+234) 913 495 3138</strong>
                            </p>

                            <p className="text-neutral-700 mt-4">
                                Developer: <strong>MikeyOG</strong> (<em>DevMikey</em>)
                            </p>
                        </section>

                        {/* Legal */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
                                Legal & regulatory requirements
                            </h2>
                            <p className="text-neutral-700 mb-4">
                                Certain financial or transactional information may be retained as required by law,
                                such as fraud prevention, safety compliance, or tax-related records. Any retained
                                information will be stored securely and only for the minimum period legally allowed.
                            </p>

                            <p className="text-neutral-700">
                                Learn more in our{" "}
                                <a
                                    href="/privacy"
                                    className="text-secondary-400 hover:text-secondary-500"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteDropDriverAccount;
