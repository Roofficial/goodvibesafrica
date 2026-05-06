import { motion } from 'motion/react';
import { ArrowRight, Music, Mic2, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Brand Brush Decor */}
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] pointer-events-none opacity-20">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-bloom animate-[spin_60s_linear_infinite]">
            <path d="M180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
            <path d="M160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/60 to-brand-black z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
            alt="Studio Background"
            className="w-full h-full object-cover grayscale opacity-40 blur-[2px]"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-bloom inline-block font-bold tracking-[0.4em] uppercase text-xs mb-8">
              Kigezi's Premier Creative Hub
            </span>
            <h1 className="text-7xl md:text-[11rem] font-black mb-8 tracking-tighter leading-[0.8]">
              <span className="block text-outline opacity-40">FEEL THE</span>
              <span className="block text-gradient-bloom brush-accent">VIBES</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-light">
              Music is more than sound — it’s a journey of vibrations, energy, and connection.
              Every beat carries a feeling, every melody sparks a mood.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/booking" className="btn-accent flex items-center justify-center gap-3 px-12">
                Book a Session <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary px-12">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Tag */}
        <div className="absolute bottom-20 left-10 hidden xl:block">
          <div className="rotate-90 origin-left text-[10px] tracking-[1em] text-white/20 uppercase font-bold">
            #GOODVIBESALLTHEWAY
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-bloom/5 border-y border-white/5 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white/30 text-xs font-bold uppercase tracking-[0.5em] px-20">
              Good Vibes Africa • Studio Sessions • Production • Mastering • Distribution •
            </span>
          ))}
        </div>
      </div>

      {/* About Preview */}
      <section className="py-40 bg-coal/10 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full african-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-bloom/30"></div>
            <div className="aspect-square overflow-hidden group rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=1974&auto=format&fit=crop"
                alt="Artists"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-lake-blue p-10 hidden lg:block shadow-2xl">
              <p className="text-brand-black font-bold text-5xl leading-none">AFRICA<br /><span className="text-earth-blue">ROOTS</span></p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-bloom font-bold tracking-widest text-xs uppercase mb-6 block">Our Pulse</span>
            <h2 className="text-5xl md:text-7xl mb-10 leading-none tracking-tighter">from Kigezi <br />to the <span className="brush-accent">world</span></h2>
            <div className="space-y-8 text-white/50 leading-relaxed text-lg font-light">
              <p>
                At Good Vibes Africa, we don’t just record music — we create experiences.
                Our studio is built on passion, creativity, and a deep understanding of sound.
              </p>
              <p>
                Every artist who walks through our doors becomes part of a movement
                driven by authenticity and excellence.
              </p>
              <div className="p-6 border border-white/5 bg-white/5 rounded-2xl">
                <p className="text-bloom font-bold text-2xl tracking-tighter italic">"We believe in vibes that move you."</p>
              </div>
            </div>
            <Link to="/about" className="btn-secondary mt-12">
              Our Vision
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Artist Journey Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl mb-6 leading-none uppercase tracking-tighter">Artist <span className="text-outline block md:inline opacity-30">Journey</span></h2>
            <p className="text-bloom tracking-[0.5em] uppercase text-xs font-bold">The GVA Process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] bg-white/5 -z-10"></div>
            {[
              {
                step: "01",
                title: "Sonic Design",
                desc: "Consult with our team to choose the right session and producer for your unique sound.",
                icon: "🎨"
              },
              {
                step: "02",
                title: "Master Capture",
                desc: "Step into our professional booths and record with world-class engineering support.",
                icon: "🎧"
              },
              {
                step: "03",
                title: "Global Pulse",
                desc: "We polish your tracks with elite mixing and mastering, ready for global distribution.",
                icon: "🌍"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-12 hover-glow border-t-2 border-t-bloom/10"
              >
                <span className="font-heading text-bloom text-7xl font-bold opacity-10 block mb-8">{item.step}</span>
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-white/40 leading-relaxed mb-10 text-sm">{item.desc}</p>
                <div className="text-4xl">{item.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-40 bg-coal/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl mb-4 leading-none uppercase tracking-tighter">The <span className="text-outline opacity-30">Sanctuary</span></h2>
              <p className="text-white/40 text-lg uppercase tracking-widest font-light">Where creativity finds a home at Burambira Heights.</p>
            </div>
            <Link to="/services" className="btn-secondary mb-2 whitespace-nowrap">View Amenities</Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" alt="Control Room" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000" alt="Mic Setup" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000" alt="Mixing Console" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="col-span-2 overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?q=80&w=1000" alt="Vocal Booth" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 -skew-x-12 transform origin-top translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl mb-8 leading-none tracking-tighter italic">It’s All About <span className="text-bloom">The Vibes</span></h2>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Discover new sounds and musical masterpieces. Elevate your sound with the
              unique wonders of musical craftsmanship. Whether you're just starting out
              or already established, we help you create something unforgettable.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-4xl font-bold text-lake-blue mb-2 tracking-tighter">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Tracks Produced</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-bloom mb-2 tracking-tighter">150+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Artists Empowered</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" alt="Studio 1" className="w-full aspect-[4/5] object-cover grayscale brightness-50 rounded-2xl shadow-xl" />
            <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000" alt="Studio 2" className="w-full aspect-[4/5] object-cover grayscale brightness-75 translate-y-12 rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-16 md:p-32 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden text-brand-black rounded-[2rem] md:rounded-[4rem] shadow-2xl">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-bloom/10 -translate-x-12 translate-y-12 rounded-full"></div>
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter lowercase leading-none">ready to create <br /><span className="text-bloom italic">your sound?</span></h2>
              <p className="text-brand-black/60 text-xl font-light">Book your session today and start your musical journey with us.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10 scale-110">
              <Link to="/booking" className="btn-accent bg-brand-black text-white px-16 py-6 border-none">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
