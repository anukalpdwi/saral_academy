import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya tharma',
      role: 'Parent of ICSE Student',
      content: 'Dr. Akhilesh\'s teaching method is incredible. My daughter went from struggling with Hindi to scoring 95% in her ICSE exams. The personalized attention and patient approach made all the difference.',
      rating: 5,
      location: 'Mumbai'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Working Professional',
      content: 'I always wanted to learn Sanskrit but never found the right teacher. The online classes at Saral Academy are perfect for my schedule, and I\'m amazed at how much I\'ve learned in just 6 months.',
      rating: 5,
      location: 'Bangalore'
    },
    {
      name: 'Meera Patel',
      role: 'International School Student',
      content: 'The English grammar classes helped me improve my writing skills tremendously. The one-on-one attention and customized curriculum were exactly what I needed for my Cambridge exams.',
      rating: 5,
      location: 'Delhi'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students and parents about their transformative learning experiences 
            with Saral Academy's personalized approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-orange-300" />
              </div>
              
              <div className="mb-6">
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
              
              <div className="border-t border-orange-200 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-orange-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Summary */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-lg mb-6 opacity-90">
            Over 1000+ students have achieved their language learning goals with us. 
            Your success story could be next!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Exam Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Personalized Attention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;