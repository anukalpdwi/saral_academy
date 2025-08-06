import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Teaching from './pages/Teaching';
import WhyChoose from './pages/WhyChoose';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';

// ScrollToTop component
const ScrollToTop = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Delay to ensure content renders
    // Clear hash to prevent anchor scrolling
    if (window.location.hash) {
      window.history.replaceState(null, document.title, window.location.pathname);
    }
    return () => clearTimeout(timer);
  }, [window.location.pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;