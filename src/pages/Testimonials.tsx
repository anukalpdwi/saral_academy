import React from 'react';
import { Star, Quote, Play } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
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
    },
    {
      name: 'Anita Desai',
      role: 'Senior Citizen',
      content: 'At 65, I thought it was too late to learn Hindi properly. Dr. Akhilesh proved me wrong! His patient teaching style and flexible schedule made it possible for me to fulfill my dream.',
      rating: 5,
      location: 'Pune'
    },
    {
      name: 'Vikram Singh',
      role: 'CBSE Student',
      content: 'Sanskrit was my weakest subject until I joined Saral Academy. The way complex grammar is explained with simple examples made everything clear. Scored 92% in boards!',
      rating: 5,
      location: 'Jaipur'
    },
    {
      name: 'Kavya Nair',
      role: 'College Student',
      content: 'Learning Hindi online seemed impossible, but the interactive sessions and personalized feedback made it engaging. Now I can confidently speak and write in Hindi.',
      rating: 5,
      location: 'Chennai'
    }
  ];

  const videoTestimonials = [
     {
      id: 1,
      name: 'Ms. Mahila Allapati',
      role: 'Myra mother',
      thumbnail: 'https://img.youtube.com/vi/pISgcG28Hk8/mqdefault.jpg',
      duration: '2:30',
      url: 'https://www.youtube.com/embed/pISgcG28Hk8?autoplay=1'
    },
    {
      id: 2,
      name: 'Pinki ji',
      role: 'Parent',
      thumbnail: 'https://img.youtube.com/vi/o0XzGlAAkJ8/mqdefault.jpg',
      duration: '1:45',
      url: 'https://www.youtube.com/embed/o0XzGlAAkJ8?autoplay=1'
    },
    {
      id: 3,
      name: 'Radha ji',
      role: 'Parent',
      thumbnail: 'https://img.youtube.com/vi/wIbaPqe6zJM/mqdefault.jpg',
      duration: '3:15',
      url: 'https://www.youtube.com/embed/wIbaPqe6zJM?autoplay=1'
    },
    {
      id: 4,
      name: 'Mr. Chaitanya',
      role: 'Vishesh’s Father',
      thumbnail: 'https://img.youtube.com/vi/Xq6lxEEUYlE/mqdefault.jpg',
      duration: '0:38',
      url: 'https://www.youtube.com/embed/Xq6lxEEUYlE?autoplay=1'
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
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">What Our Students Say</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students and parents about their transformative learning experiences 
              with Saral Academy's personalized approach.
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Video Testimonials</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {videoTestimonials.map((video) => (
                <a 
                  key={video.id} 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group cursor-pointer block"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src={video.thumbnail} 
                      alt={video.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Play className="w-8 h-8 text-orange-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{video.name}</h3>
                    <p className="text-gray-600">{video.role}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Written Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Student Reviews</h2>
            <div className="grid lg:grid-cols-2 gap-8">
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
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-orange-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories Summary */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Join Our Success Stories</h2>
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
    </div>
  );
};

export default Testimonials;
