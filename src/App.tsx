import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

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
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;