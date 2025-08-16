import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🪷</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Saral Academy</h3>
                <p className="text-sm text-gray-400">The School of Language Skills & Development</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students through personalized language education since 2001. 
              Learn Hindi, Sanskrit, and English with 26+ years of proven expertise.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with care for language learners by <a className='text-red-300' href="https://www.goldenbirdtech.com/"> The GoldenBird Tech</a></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/teaching"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Teaching Approach
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Our Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Hindi Language Classes</li>
              <li>Sanskrit Tutoring</li>
              <li>English Grammar & Conversation</li>
              <li>ICSE/CBSE Exam Preparation</li>
              <li>Personalized Learning Plans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">+91 9948332166</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">saralacademylanguageschool@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">10 AM - 8 PM (Mon-Sat)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Saral Academy Language School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-gray-500 text-sm">
            Founded in 2001 • 26+ Years of Educational Excellence • Dr. Akhilesh Hathila, Founder
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;