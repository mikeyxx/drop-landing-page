import { Clock, Shield, Star, MapPin, CreditCard } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Ride,
                <span className="text-secondary-400"> Dropped </span>
                Right Here
              </h1>
              {/* <p className="text-xl text-primary-100 mb-8 max-w-lg">
                Experience seamless transportation with Drop. Safe, reliable rides
                at your fingertips, whenever you need them.
              </p> */}
              <p className="text-xl text-primary-100 mb-8 max-w-lg">
                Launching soon in Ibadan. Safe, reliable, and affordable rides built for our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="bg-secondary-400 text-white px-8 py-4 rounded-lg hover:bg-secondary-500 transition-colors font-semibold text-lg">
                  Book Your Ride
                </button> */}
                <button className="bg-secondary-400 text-white px-8 py-4 rounded-lg hover:bg-secondary-500 transition-colors font-semibold text-lg">
                  Join the Waitlist
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-500 transition-colors font-semibold text-lg">
                  Become a Driver (Apply Now)
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary-400 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Pickup Location</p>
                      <p className="text-primary-100">123 Main Street</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-300 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Drop-off Location</p>
                      <p className="text-primary-100">456 Business Ave</p>
                    </div>
                  </div>
                  <button className="w-full bg-secondary-400 text-white py-3 rounded-lg hover:bg-secondary-500 transition-colors font-semibold">
                    Find Your Ride
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-4">
              Why Choose Drop?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're committed to providing the best ride-hailing experience with
              safety, convenience, and affordability at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Background-checked drivers and 24/7 safety support"
              },
              {
                icon: Clock,
                title: "Quick Pickup Times",
                description: "Designed for fast pickups as we grow our driver network"
              },
              {
                icon: CreditCard,
                title: "Fair Pricing",
                description: "Transparent, competitive rates with no hidden fees"
              },
              {
                icon: Star,
                title: "4.9-star rating",
                description: "Built on rider safety and satisfaction as our top priorities"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
                <div className="bg-secondary-50 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-4">
              How Drop Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Getting around has never been easier. Just three simple steps to your destination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Request a Ride",
                description: "Open the app, enter your destination, and request a ride in seconds."
              },
              {
                step: "02",
                title: "Get Matched",
                description: "We'll connect you with a nearby driver and show you their arrival time."
              },
              {
                step: "03",
                title: "Enjoy the Ride",
                description: "Hop in and enjoy a safe, comfortable ride to your destination."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary-400 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-primary-500 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-100 mb-8">
              Join millions of users who trust Drop for their daily transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-secondary-400 px-8 py-4 rounded-lg hover:bg-neutral-50 transition-colors font-semibold text-lg">
                Download the App
              </button> */}
              <button className="bg-white text-secondary-400 px-8 py-4 rounded-lg hover:bg-neutral-50 transition-colors font-semibold text-lg">
                Join the Waitlist
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary-400 transition-colors font-semibold text-lg">
                Start Driving with Drop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              // { number: "2M+", label: "Happy Riders" },
              // { number: "50K+", label: "Active Drivers" },
              // { number: "100+", label: "Cities Served" },
              // { number: "4.9", label: "Average Rating" }
              { number: "Launching Soon", label: "Be among the first riders" },
              { number: "Now Recruiting", label: "Drivers wanted" },
              { number: "Expanding", label: "Cities coming online" },
              { number: "Our Promise", label: "Safe, reliable rides" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl lg:text-5xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;