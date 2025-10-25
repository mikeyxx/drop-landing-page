const Support = () => {
    return (
        <main className="min-h-[calc(100vh-80px)] flex flex-col justify-between bg-neutral-50">
            {/* Content */}
            <section className="flex-1">
                <div className="max-w-3xl mx-auto py-20 px-6 text-center">
                    <h1 className="text-4xl font-bold text-primary-700 mb-4">
                        How can we help you?
                    </h1>
                    <p className="text-neutral-700 mb-10">
                        Need help using Drop? We're here to make sure your experience runs smoothly.
                    </p>

                    <div className="bg-white shadow-sm rounded-2xl p-8 text-left space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-primary-600 mb-2">
                                📧 Email Support
                            </h2>
                            <p className="text-neutral-700">
                                Reach us anytime at{" "}
                                <a
                                    href="mailto:support@use-drop.com"
                                    className="text-primary-600 font-medium underline"
                                >
                                    support@use-drop.com
                                </a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-primary-600 mb-2">
                                📱 In-App Help
                            </h2>
                            <p className="text-neutral-700">
                                Chat with us directly from the Drop app.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-primary-600 mb-2">
                                📄 Policies & Terms
                            </h2>
                            <p className="text-neutral-700">
                                Review our{" "}
                                <a href="/privacy" className="text-primary-600 underline">
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a href="/driver-terms" className="text-primary-600 underline">
                                    Terms of Service
                                </a>{" "}
                                for more details.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Support;
