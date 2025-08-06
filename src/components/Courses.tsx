import React from 'react';
import { BookOpen, Users, Clock, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Hindi Language',
      subtitle: 'Beginner to Advanced',
      description: 'Comprehensive Hindi learning program covering all aspects from basic conversation to advanced literature.',
      features: [
        'Devanagari script mastery',
        'Grammar and composition',
        'Literature appreciation',
        'ICSE/CBSE exam preparation',
        'Conversation skills'
      ],
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      icon: '🇮🇳'
    },
    {
      title: 'Sanskrit Language',
      subtitle: 'School Syllabus + Grammar Focused',
      description: 'Traditional Sanskrit education with modern teaching methods, perfect for school students and enthusiasts.',
      features: [
        'Sanskrit grammar (Vyakarana)',
        'Shloka and stotra learning',
        'School curriculum support',
        'Classical text reading',
        'Pronunciation guidance'
      ],
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      icon: '🕉️'
    },
    {
      title: 'English Language',
      subtitle: 'Grammar, Conversation & Exam-Oriented',
      description: 'Complete English language program focusing on practical communication and academic excellence.',
      features: [
        'Grammar fundamentals',
        'Conversation practice',
        'Writing skills development',
        'Exam preparation',
        'Pronunciation improvement'
      ],
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      icon: '🗣️'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Courses Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized curriculum designed to meet individual learning needs with comprehensive 
            coverage of reading, writing, listening, and comprehension skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className={`bg-gradient-to-br ${course.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center text-2xl mb-6`}>
                {course.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-orange-600 font-semibold mb-4">{course.subtitle}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>
              
              <div className="space-y-3">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Course Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Course Highlights</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Small Batch Size</h4>
              <p className="text-gray-600">Maximum 1:3 teacher-student ratio for personalized attention</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Customized Curriculum</h4>
              <p className="text-gray-600">Tailored learning plans based on individual assessments</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Flexible Timing</h4>
              <p className="text-gray-600">Classes available from 10 AM to 8 PM to suit your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;