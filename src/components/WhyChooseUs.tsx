import React from 'react';
import { Heart, Shield, Clock, Users, Brain, Award, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Overcome Learning Difficulties',
      description: 'Specialized support for students with Dyslexia, ADHD, and attention challenges',
      color: 'from-red-400 to-pink-500',
      features: ['Individualized strategies', 'Patience & understanding', 'Proven methodologies']
    },
    {
      icon: Shield,
      title: 'Supportive Environment',
      description: 'Safe, encouraging space where every student feels comfortable to learn and grow',
      color: 'from-green-400 to-emerald-500',
      features: ['Non-judgmental approach', 'Positive reinforcement', 'Confidence building']
    },
    {
      icon: Users,
      title: 'No Age Barrier',
      description: 'From young children to senior adults - language learning has no age limit',
      color: 'from-blue-400 to-indigo-500',
      features: ['Child-friendly methods', 'Adult learning techniques', 'Senior-adapted pace']
    },
    {
      icon: Clock,
      title: 'Online Convenience',
      description: 'Learn from home with flexible scheduling that fits your lifestyle',
      color: 'from-purple-400 to-violet-500',
      features: ['Home comfort', 'Flexible timing', 'No travel required']
    }
  ];

  const stats = [
    { number: '26+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Students Taught', icon: Users },
    { number: '3', label: 'Languages Offered', icon: Brain },
    { number: '98%', label: 'Success Rate', icon: Star }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Saral Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that personalized attention, proven methodologies, 
            and genuine care can make in your language learning journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Focus Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Special Focus</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand that every student is unique, and we're committed to providing 
              the individual support needed for success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Personalized Plans</h4>
              <p className="text-gray-600">Every curriculum is tailored to individual learning needs and goals</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Friendly Classes</h4>
              <p className="text-gray-600">Warm, encouraging environment that makes learning enjoyable</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Grammar Focus</h4>
              <p className="text-gray-600">Strong foundation in grammar rules and practical application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;