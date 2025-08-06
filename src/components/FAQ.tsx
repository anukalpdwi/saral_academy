import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What ages do you teach?',
      answer: 'We welcome students of all ages! From young children (5+ years) to senior adults, there is no age barrier at Saral Academy. Our teaching methods are adapted to suit different age groups and learning capabilities.'
    },
    {
      question: 'Do you provide classes for ICSE/CBSE/International curriculum?',
      answer: 'Yes, we specialize in supporting students from ICSE, CBSE, and international schools (IB, Cambridge, etc.). Our curriculum is tailored to meet specific board requirements and we provide targeted exam preparation.'
    },
    {
      question: 'Is there a trial class available?',
      answer: 'Absolutely! We offer a free assessment session where we evaluate your current level, understand your learning goals, and provide a sample lesson. This helps both you and us determine the best approach for your learning journey.'
    },
    {
      question: 'How personalized is the course?',
      answer: 'Every course is completely personalized. We conduct an initial assessment, identify your learning style (visual, auditory, or kinesthetic), set specific goals, and create a custom curriculum. Our 1:1 to 1:3 student ratio ensures individual attention.'
    },
    {
      question: 'What technology do I need for online classes?',
      answer: 'You need a computer/tablet with a stable internet connection, webcam, and microphone. We use user-friendly video conferencing platforms and provide technical support to ensure smooth learning experience.'
    },
    {
      question: 'Can you help students with learning difficulties?',
      answer: 'Yes, we have extensive experience working with students who have Dyslexia, ADHD, attention issues, and other learning challenges. We use specialized teaching techniques and provide extra patience and support.'
    },
    {
      question: 'How flexible are the class timings?',
      answer: 'Very flexible! We offer classes from 10 AM to 8 PM IST, Monday through Saturday. We work with your schedule to find convenient time slots that work for both student and teacher.'
    },
    {
      question: 'What is the duration of each course?',
      answer: 'Course duration varies based on your goals and current level. Typically, courses range from 3-12 months. During the free assessment, we provide a realistic timeline based on your specific objectives.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our courses, teaching methods, and enrollment process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset rounded-lg"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help you 
              with any additional questions about our courses and teaching approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919948332166"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-colors duration-200"
              >
                Call Us: +91 9948332166
              </a>
              <a
                href="https://wa.me/919948332166"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;