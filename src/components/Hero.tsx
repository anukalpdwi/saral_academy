import React from 'react';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Welcome to <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Saral Academy</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                The School of Language Skills & Development 
              </p>
              <p className="text-lg text-gray-700 max-w-xl">
                Learn Hindi, Sanskrit, and English from the comfort of your home with 26+ years of educational excellence and personalized teaching approach.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">26+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">1:1 to 1:3</p>
                  <p className="text-sm text-gray-600">Student Ratio</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Flexible</p>
                  <p className="text-sm text-gray-600">Schedule</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Book a Free Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl">👨‍🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Dr. Akhilesh Hathila</h3>
                  <p className="text-gray-600">Founder & Principal Educator</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Founded</span>
                    <span className="font-semibold text-orange-600">2001, Hyderabad</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Current Base</span>
                    <span className="font-semibold text-orange-600">Nashik (Online)</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Languages</span>
                    <span className="font-semibold text-orange-600">Hindi • Sanskrit • English</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-200 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;