import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Callout Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🎓 Now accepting new students for Hindi and Sanskrit exam prep! Limited slots available.
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Saral Academy Logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/40x40?text=Logo';
                }}
              />
              <div>
                <h1 className="text-sm font-bold text-gray-800">༺꧁SARAL ACADEMY SCHOOL꧂༻
</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className={`transition-colors ${isActive('/courses') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Courses
              </Link>
              <Link 
                to="/teaching" 
                className={`transition-colors ${isActive('/teaching') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Teaching
              </Link>
              
              {/* Dropdown Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <span>More</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link 
                      to="/why-choose" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Why Choose Us
                    </Link>
                    <Link 
                      to="/testimonials" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Testimonials
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Gallery
                    </Link>
                    <Link 
                      to="/faq" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-orange-600" />
                <span className="text-gray-700">+91 9948332166</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/courses" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Courses</Link>
                <Link to="/teaching" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Teaching</Link>
                <Link to="/why-choose" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Why Choose Us</Link>
                <Link to="/testimonials" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
                <Link to="/gallery" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link to="/faq" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                <Link to="/contact" className="text-left text-gray-700 hover:text-orange-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 9948332166</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;