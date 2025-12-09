// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles
} from "lucide-react";

// Update import paths if your component files are located elsewhere
// import PropTypes from "prop-types";

const NAV_ITEMS = ["About", "Products", "Testimonials", "Contact"];

function Navbar({ isScrolled = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // close menu when a link is clicked (mobile)
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <a
              href="/"
              aria-label="Go to home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent hover:scale-110 transition-transform inline-block"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
                DWI
              </span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-blue-600 transition-all relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Login
            </button>

            <button className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t px-4 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="block py-2 text-gray-700 hover:text-blue-600 hover:translate-x-2 transition-all"
            >
              {item}
            </a>
          ))}

          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all mt-4">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
