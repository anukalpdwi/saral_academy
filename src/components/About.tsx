import React from 'react';
import { Heart, Target, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Saral Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to bridge the gap in quality language education, 
            Saral Academy has been nurturing linguistic excellence for over two decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Established in 2001 in Hyderabad by Dr. Akhilesh Hathila, Saral Academy was born 
              from a recognition that students in ICSE and international schools often struggled 
              with Hindi and Sanskrit due to inadequate support in their regular curriculum.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What started as a mission to help local students has now evolved into a comprehensive 
              online language institute, serving learners across India and beyond. Our transition 
              to online education has allowed us to maintain our personalized approach while 
              reaching students who need quality language instruction regardless of their location.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-800 mb-2">Founder's Message</h4>
              <p className="text-gray-700 italic">
                "Every student has a unique learning style. Our role is not just to teach languages, 
                but to unlock each student's potential through personalized care and proven methodologies."
              </p>
              <p className="text-sm text-gray-600 mt-2">- Dr. Akhilesh Hathila</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">26+ Years</h4>
              <p className="text-sm text-gray-600">Educational Excellence</p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">3 Languages</h4>
              <p className="text-sm text-gray-600">Hindi, Sanskrit, English</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Personalized</h4>
              <p className="text-sm text-gray-600">Learning Approach</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">All Ages</h4>
              <p className="text-sm text-gray-600">No Age Barrier</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To make quality language education accessible to every learner, regardless of age, 
              location, or learning challenges, while preserving the rich heritage of Indian languages.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide personalized, comprehensive language instruction that builds confidence, 
              cultural understanding, and academic success through innovative teaching methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;