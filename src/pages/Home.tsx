import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Clock, BookOpen, CheckCircle, Play, Award, Heart, Target, X, Calendar, Clock as ClockIcon, Instagram, Facebook, Youtube , Linkedin} from 'lucide-react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const openModal = (url) => {
    setSelectedVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl('');
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const courseHighlights = [
    {
      title: 'Hindi Language',
      description: 'From basic conversation to advanced literature',
      icon: '🇮🇳',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Sanskrit Language',
      description: 'Traditional grammar with modern teaching',
      icon: '🕉️',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'English Language',
      description: 'Grammar, conversation & exam preparation',
      icon: '🗣️',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const galleryImages = [
    { id: 1, src: '/poster1.png', alt: 'Online Class Session', category: 'Teaching' },
    { id: 2, src: '/poster2.png', alt: 'Student Achievement', category: 'Success' },
    { id: 3, src: '/saral3.jpeg', alt: 'Learning Materials', category: 'Resources' },
    { id: 4, src: '/saral4.jpeg', alt: 'Cultural Event', category: 'Culture' },
    { id: 5, src: '/saral5.jpeg', alt: 'Group Discussion', category: 'Teaching' },
    { id: 6, src: '/saral6.jpg', alt: 'Award Ceremony', category: 'Success' }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Ms. Akhila Allapati',
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
    },
    {
      id: 5,
      name: 'Abhinav',
      role: '10th Grade Student',
      thumbnail: 'https://img.youtube.com/vi/SziimTav7d0/mqdefault.jpg',
      duration: '0:38',
      url: 'https://www.youtube.com/embed/SziimTav7d0'
    }
  ];

  const socialMediaLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/saral.academy.school/', color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/saralacademy', color: 'hover:bg-blue-600' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@SaralAcademyLanguageSchool', color: 'hover:bg-red-600' },
    { name: 'X', icon: X, url: 'https://x.com/SaralHindiSikho', color: 'hover:bg-gray-800' },
    { name: 'Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/akhilesh-hathila/', color: 'hover:bg-gray-800' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-screen flex items-center mt-5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-[20px] lg:text-4xl font-bold text-gray-800 leading-tight">
                  Welcome to <br /><span className="text-transparent bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text">꧁SARAL ACADEMY SCHOOL꧂</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  The School of Language Skills & Development
                </p>
                <p className="text-lg text-gray-700 max-w-xl">
                  Saral Academy Language School makes learning simple, effective, and accessible. Whether you’re an Indian going abroad or a foreigner in India, we help you communicate confidently. Our online courses cover <span className='font-bold'>English, Hindi,
                   regional Indian, and global languages</span> like French, German, and Spanish. With real-life conversations, cultural insights, and practical vocabulary, plus expert trainers and flexible support, we prepare you for smooth communication across borders.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">27+ Years</p>
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
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Book a Free Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/about"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <img src="/founder2.jpg" alt="Dr. Akhilesh Hathila" className="w-full h-full object-cover" />
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
                      <span className="font-semibold text-orange-600">Hyderabad (Online)</span>
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

      {/* School Days & Timings */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">School Days & Timings</h2>
            <p className="text-lg text-gray-600">Structured schedules to fit your learning needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Monday to Friday</h3>
              </div>
              <p className="text-gray-700 text-lg">3:30 p.m. to 7:00 p.m.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Saturday & Sunday</h3>
              </div>
              <p className="text-gray-700 text-lg">9:00 a.m. to 1:00 p.m.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Language Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive language programs designed to meet your individual learning needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {courseHighlights.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center text-2xl mb-6`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h3>
                <p className="text-gray-700 mb-6">{course.description}</p>
                <Link 
                  to="/courses"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/courses"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-colors duration-200"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Saral Academy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience personalized learning with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Learning Support</h3>
              <p className="text-gray-600">Specialized help for Dyslexia, ADHD, and attention challenges</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Age Barrier</h3>
              <p className="text-gray-600">From children to senior adults - everyone is welcome</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Plans</h3>
              <p className="text-gray-600">Custom curriculum based on individual assessment</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Online Convenience</h3>
              <p className="text-gray-600">Learn from home with flexible scheduling</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/why-choose"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Teachings & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Teach & Value</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond languages, we nurture holistic growth and cultural understanding
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                We are not only teaching and spreading the value of our National Language Hindi but with that we teach children:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Useful Mantras for everyday life</li>
                <li>Value of Indian culture & other cultures</li>
                <li>Slokas and Ancient stories</li>
                <li>Value of values</li>
                <li>Yog and Philosophy</li>
                <li>Lifestyle (Ancient & Modern)</li>
                <li>The actual use of language:
                  <ul className="list-disc list-inside ml-6">
                    <li>Reading understanding</li>
                    <li>Writing understanding</li>
                    <li>Listening understanding</li>
                    <li>Speaking understanding</li>
                  </ul>
                </li>
                <li>Basic and Advanced Grammar & History of Grammar</li>
              </ul>
            </div>
            <div className="space-y-6 text-center">
              <p className="text-2xl font-semibold text-gray-800 italic">
                Learn, Teach, Explore and Make others get benefited
              </p>
              <p className="text-xl text-gray-700">
                Your single support can change lives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our students and parents about their learning journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                onClick={() => openModal(video.url)}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Thumbnail+Not+Found';
                    }}
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
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-colors duration-200"
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Video Playback */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-2xl p-4 max-w-3xl w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={selectedVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Learning Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into our vibrant learning community and achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-end justify-center">
                    <p className="text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm mb-2">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/gallery"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-colors duration-200"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">27+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-orange-100">Languages Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their language learning goals with Saral Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-colors duration-200"
            >
              Book Free Assessment
            </Link>
            <a
              href="tel:+919948332166"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
            >
              Call Now: +91 9948332166
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Social Media Icons */}
      <footer className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-700 ${social.color} transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-center max-w-md">
              Follow us on social media for updates, learning tips, and community events at Saral Academy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;