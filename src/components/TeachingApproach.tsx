import React from 'react';
import { Brain, Eye, Ear, Hand, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

const TeachingApproach = () => {
  const learningStyles = [
    {
      icon: Eye,
      title: 'Visual Learning',
      description: 'Charts, diagrams, and visual aids for better comprehension',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Ear,
      title: 'Auditory Learning',
      description: 'Pronunciation practice, listening exercises, and verbal instruction',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Hand,
      title: 'Kinesthetic Learning',
      description: 'Interactive activities and hands-on learning experiences',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const focusAreas = [
    { icon: BookOpen, area: 'Reading', description: 'Text comprehension and fluency development' },
    { icon: Edit, area: 'Writing', description: 'Grammar, composition, and creative writing' },
    { icon: Headphones, area: 'Listening', description: 'Audio comprehension and pronunciation' },
    { icon: Brain, area: 'Comprehension', description: 'Critical thinking and analytical skills' }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Teaching Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every student is unique. Our personalized approach ensures that each learner receives 
            instruction tailored to their individual learning style and pace.
          </p>
        </div>

        {/* Assessment Process */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Assessment</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Before starting any course, we conduct a comprehensive assessment to understand 
              your current level, learning preferences, and specific goals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Initial Evaluation</h4>
              <p className="text-sm text-gray-600">Current skill level assessment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Learning Style</h4>
              <p className="text-sm text-gray-600">Identify preferred learning methods</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Goal Setting</h4>
              <p className="text-sm text-gray-600">Define learning objectives</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Custom Plan</h4>
              <p className="text-sm text-gray-600">Personalized curriculum design</p>
            </div>
          </div>
        </div>

        {/* Learning Styles Support */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Learning Styles We Support</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {learningStyles.map((style, index) => {
              const IconComponent = style.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${style.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 text-center mb-3">{style.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{style.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Focus Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Reading</h4>
              <p className="text-sm text-gray-600">Text comprehension and fluency</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Writing</h4>
              <p className="text-sm text-gray-600">Grammar and composition skills</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Listening</h4>
              <p className="text-sm text-gray-600">Audio comprehension practice</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Comprehension</h4>
              <p className="text-sm text-gray-600">Critical thinking development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import missing icons
import { BookOpen, Edit, Headphones } from 'lucide-react';

export default TeachingApproach;