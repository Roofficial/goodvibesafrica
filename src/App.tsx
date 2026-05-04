import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import IntroSequence from './components/IntroSequence';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if intro has been shown in this session
    return !sessionStorage.getItem('gva_intro_shown');
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('gva_intro_shown', 'true');
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroSequence onComplete={handleIntroComplete} />
        ) : (
          <div key="main-app" className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                </Routes>
              </AnimatePresence>
            </main>

            <Footer />
            <AudioPlayer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}
