import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import droplogo from "../assets/images/drop-logo-white.svg"

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={droplogo} alt='' width={100} height={80} />
            </div>

            <p className="text-primary-100 mb-6 max-w-md">
              Your reliable ride-hailing service. Safe, convenient, and affordable transportation
              whenever you need it.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-primary-100">
                <Mail className="h-4 w-4" />
                <span>support@use-drop.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/driver-terms" className="text-primary-100 hover:text-white transition-colors">
                  Driver Terms
                </Link>
              </li>
              <li>
                <Link to="/passenger-terms" className="text-primary-100 hover:text-white transition-colors">
                  Passenger Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-100">
              <li>Ride Booking</li>
              <li>Errand Requests</li>
              <li>Driver Partnership</li>
              <li>24/7 Support</li>
              <li>Safety First</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-100 text-sm">
            © 2026 DropQuest. All rights reserved.
          </p>
          <p className="text-primary-100 text-sm mt-2 md:mt-0">
            Made with ❤️ for better transportation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;