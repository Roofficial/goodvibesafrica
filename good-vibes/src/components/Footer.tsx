import { Music, MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-coal pt-20 pb-10 border-t border-white/5 relative">
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-bloom text-brand-black flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-lg z-20"
        title="Back to Top"
      >
        <span className="text-xl">↑</span>
      </button>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <motion.div 
              whileHover="hover"
              initial="initial"
              className="flex items-center gap-3 group relative"
            >
              <div className="relative">
                <motion.div 
                  variants={{
                    initial: { scale: 0.8, opacity: 0 },
                    hover: { scale: 1.5, opacity: 0.2, transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" } }
                  }}
                  className="absolute inset-0 bg-bloom rounded-full -z-10"
                />
                <div className="w-10 h-10 bg-bloom flex items-center justify-center rounded-sm transition-transform group-hover:rotate-6">
                  <Music className="text-brand-black" size={20} />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl tracking-tighter transition-colors group-hover:text-bloom">GOOD VIBES</span>
                <span className="text-[10px] tracking-[0.4em] text-white/30 font-bold">AFRICA</span>
              </div>
              
              {/* Animated Accent Line */}
              <motion.div 
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%", transition: { duration: 0.3 } }
                }}
                className="absolute -bottom-2 left-0 h-[1px] bg-bloom/50"
              />
            </motion.div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Music is more than sound—it’s a journey of vibrations, energy, and connection. Feel the vibes from Kigezi to the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-bloom hover:text-brand-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-bloom hover:text-brand-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-bloom hover:text-brand-black transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-lake-blue">Company</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-bloom transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-bloom transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-bloom transition-colors">Pricing</Link></li>
            <li><Link to="/booking" className="hover:text-bloom transition-colors">Book a Session</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-lake-blue">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-bloom shrink-0 mt-1" />
              <span>Burambira Heights, Kisoro Rd, Kabale, Uganda</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-bloom shrink-0" />
              <span>+256 __________</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-bloom shrink-0" />
              <span>info@goodvibes.africa</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-lake-blue">Resources</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#" className="hover:text-bloom transition-colors">Artist Guide</a></li>
            <li><a href="#" className="hover:text-bloom transition-colors">Production Tips</a></li>
            <li><a href="#" className="hover:text-bloom transition-colors">Equipment List</a></li>
            <li><Link to="/contact" className="hover:text-bloom transition-colors">Get Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-white/40 uppercase tracking-widest text-center md:text-left">
          <p>© GVA Holdings Limited</p>
          <p>GVA ‘Good Vibes Africa’ Holdings Limited (URSB: 80020001912048)</p>
        </div>
        <div className="flex gap-8 text-[10px] text-white/40 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
