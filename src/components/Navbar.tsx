import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
  { name: 'Booking', path: '/booking' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md' : 'bg-brand-black/80'}`}
    >
      {/* Top Brand Marquee */}
      {!scrolled && (
        <div className="bg-bloom text-brand-black overflow-hidden border-b border-brand-black/10 py-1">
          <div className="animate-marquee whitespace-nowrap flex gap-10">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-[0.3em]">
                "Every beat carries a feeling, every melody sparks a mood. We believe in vibes that move you." — #GOODVIBESALLTHEWAY — 
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-bloom absolute -z-10 group-hover:rotate-180 transition-transform duration-1000">
              <path d="M90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <Music className="text-white group-hover:text-bloom transition-colors" size={20} />
          </div>
          <div className="flex flex-col leading-[0.8] relative top-[-1px]">
            <span className="font-heading font-bold text-lg tracking-tighter">GOOD VIBES</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40">AFRICA</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-bold transition-all relative py-1 hover:text-white ${location.pathname === link.path ? 'text-bloom after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-bloom' : 'text-white/50'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn-accent py-2 px-6 ml-4">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Menu</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-brand-black z-[100] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-bloom flex items-center justify-center rounded-sm">
                  <Music className="text-brand-black" size={18} />
                </div>
                <span className="font-heading font-bold text-lg tracking-tighter">GOOD VIBES</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={32} /></button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl uppercase tracking-tighter font-bold ${location.pathname === link.path ? 'text-bloom' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            >
              <Link to="/booking" className="btn-accent w-full block text-center py-5">
                Book a Session
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
