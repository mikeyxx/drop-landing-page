import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Car, MapPin } from 'lucide-react';
// import dropLogo from "../assets/images/Drop.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Common classes for links
  const baseLinkClasses =
    "transition-colors font-medium";
  const inactiveClasses =
    "text-neutral-700 hover:text-primary-500";
  const activeClasses =
    "text-primary-600 font-semibold border-b-2 border-primary-600";

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-500 p-2 rounded-lg group-hover:bg-primary-600 transition-colors hidden md:block">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary-500 flex items-center">
              Dr
              <MapPin className="inline-block h-[1em] w-[1em] align-baseline text-primary-500" />
              p
            </span>
          </NavLink>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/driver-terms"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Driver Terms
            </NavLink>
            <NavLink
              to="/passenger-terms"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Passenger Terms
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Privacy
            </NavLink>
            <div className="flex items-center space-x-4">
              <button className="bg-secondary-400 text-white px-6 py-2 rounded-lg hover:bg-secondary-500 transition-colors font-semibold">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neutral-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 ${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/driver-terms"
                className={({ isActive }) =>
                  `block px-3 py-2 ${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Driver Terms
              </NavLink>
              <NavLink
                to="/passenger-terms"
                className={({ isActive }) =>
                  `block px-3 py-2 ${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Passenger Terms
              </NavLink>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `block px-3 py-2 ${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </NavLink>
              <div className="px-3 py-2">
                <button className="w-full bg-secondary-400 text-white px-6 py-2 rounded-lg hover:bg-secondary-500 transition-colors font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
