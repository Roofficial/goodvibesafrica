import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      {/* Hero Section */}
      <section className="py-24 md:py-48 border-b border-white/5 relative overflow-hidden">
        {/* Brush Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full text-bloom">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[10rem] mb-8 tracking-tighter lowercase leading-[0.8]">
              live the <br />
              <span className="text-gradient-bloom brush-accent">journey</span>
            </h1>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em] mt-8">The Vision Behind Good Vibes Africa</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-40 bg-coal/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl tracking-tighter uppercase font-bold">OUR <span className="text-bloom">HEARTBEAT</span></h2>
              <div className="space-y-8 text-white/50 leading-relaxed text-xl font-light">
                <p>
                  Established in the heart of Kigezi, Good Vibes Africa is not just a recording studio. 
                  It is a <span className="text-white">sanctuary for creators</span>, a bridge between local talent and global audiences.
                </p>
                <p>
                  We believe that the environment is as important as the equipment. Our mission is to capture the raw energy of African music and polish it to world-class standards without losing its soul.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-bloom/10 -rotate-3 group-hover:rotate-0 transition-transform duration-700 rounded-2xl"></div>
              <div className="aspect-[4/5] overflow-hidden relative z-10 border border-white/5 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" 
                  alt="Studio View" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Story */}
      <section className="py-32 bg-coal/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] overflow-hidden grayscale brightness-75 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop"
                  alt="Burambira Heights"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-lake-blue/10 rounded-full blur-3xl"></div>
            </div>
            <div className="md:w-1/2">
              <span className="text-bloom font-bold tracking-widest text-xs uppercase mb-4 block">Our Home</span>
              <h2 className="text-4xl md:text-6xl mb-8 leading-none tracking-tighter">Burambira Heights</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Located at Burambira Heights, our studio sits in one of the most iconic creative spaces in Kabale, Uganda.
                </p>
                <p>
                  Burambira Heights was founded by <span className="text-white font-bold">Joe Kahiri</span> — the celebrated
                  musician behind Kahiri Music and founder of <span className="text-white font-bold">Qwela Band</span>.
                  His vision transformed this location into a cultural landmark, bringing together music, art, and community.
                </p>
                <p>
                  Good Vibes Africa is proud to call this space home, continuing the legacy by bringing new energy,
                  innovation, and creativity to the music scene.
                </p>
              </div>
              <div className="mt-12 p-8 border border-white/5 bg-white/5 rounded-2xl shadow-lg">
                <p className="font-bold uppercase tracking-widest text-xs text-bloom mb-2 italic">A Creative Hub</p>
                <p className="text-sm text-white/50">Experience the atmosphere where legends are born.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
