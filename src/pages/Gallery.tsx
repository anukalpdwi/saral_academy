import React, { useState } from 'react';
import { Camera, Filter, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'teaching', name: 'Teaching Sessions' },
    { id: 'success', name: 'Student Success' },
    { id: 'events', name: 'Events & Celebrations' },
    { id: 'resources', name: 'Learning Resources' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Online Hindi Class Session',
      category: 'teaching',
      description: 'Interactive online Hindi learning session with personalized attention',
      image: '/poster1.png'
    },
    {
      id: 2,
      title: 'Student Achievement Certificate',
      category: 'success',
      description: 'ICSE student scoring 95% in Hindi after joining our program',
      image: '/poster2.png'
    },
    {
      id: 3,
      title: 'Sanskrit Learning Materials',
      category: 'resources',
      description: 'Comprehensive Sanskrit study materials and worksheets',
      image: '/saral3.jpeg'
    },
    {
      id: 4,
      title: 'Virtual Cultural Event',
      category: 'events',
      description: 'Online Hindi poetry recitation competition',
      image: '/saral4.jpeg'
    },
    {
      id: 5,
      title: 'One-on-One Teaching Session',
      category: 'teaching',
      description: 'Personalized English grammar session with individual attention',
      image: '/saral5.jpeg'
    },
    {
      id: 6,
      title: 'Student Progress Report',
      category: 'success',
      description: 'Monthly progress tracking and assessment results',
      image: '/saral6.jpg'
    },
    {
      id: 7,
      title: 'Digital Learning Platform',
      category: 'resources',
      description: 'Interactive online learning tools and resources',
      image: '/stu1.webp'
    },
    {
      id: 8,
      title: 'Teacher Appreciation Day',
      category: 'events',
      description: 'Students expressing gratitude to Dr. Akhilesh',
      image: '/stu2.webp'
    },
    {
      id: 9,
      title: 'Group Discussion Session',
      category: 'teaching',
      description: 'Small group Sanskrit discussion with 1:3 ratio',
      image: '/stu3.webp'
    },
    {
      id: 10,
      title: 'Exam Success Stories',
      category: 'success',
      description: 'Collection of successful exam results from our students',
      image: '/stu4.webp'
    },
    {
      id: 11,
      title: 'Hindi Textbooks Collection',
      category: 'resources',
      description: 'Curated Hindi learning books for different levels',
      image: '/1.webp'
    },
    {
      id: 12,
      title: 'Annual Achievement Ceremony',
      category: 'events',
      description: 'Virtual ceremony celebrating student achievements',
      image: '/2.webp'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Learning Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our vibrant learning community through photos of teaching sessions, 
              student achievements, events, and learning resources.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-fit group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for enlarged image */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                {(() => {
                  const item = galleryItems.find(item => item.id === selectedImage);
                  return item ? (
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-h-96 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>
          )}

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Learning Community</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Teaching Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Learning Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-gray-600">Cultural Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;