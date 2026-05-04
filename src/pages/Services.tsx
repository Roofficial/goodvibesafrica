import { Mic2, Headphones, Layers, Video, Share2, Megaphone, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Brand Brush Decor */}
      <div className="absolute top-[10%] -left-[5%] w-[400px] h-[400px] pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-bloom">
          <path d="M20 100C20 55.8172 55.8172 20 100 20C144.183 20 180 55.8172 180 100" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" fill="none" />
        </svg>
      </div>

      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      <section className="py-24 md:py-40 bg-gradient-to-b from-brand-black to-coal/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-9xl mb-8 tracking-tighter leading-none lowercase">
              Studio Time, <br />
              <span className="text-outline block md:inline opacity-30">Your</span>
              <span className="text-gradient-bloom brush-accent">Way</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-xl">
              We provide the tools, the space, and the expertise. You provide the vibe.
              Everything you need to go from a demo to a chart-topping hit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-12 group hover:border-lake-blue/30 transition-all">
              <Mic2 className="text-lake-blue mb-8 w-12 h-12" />
              <h3 className="text-3xl font-bold mb-6 tracking-tighter text-white">Recording Sessions</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Capture your sound in a professional recording booth with high-quality equipment
                and expert engineers ensuring clarity and precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-bloom" /> Professional Vocal Booth
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-bloom" /> High-End Pre-amps & Mics
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-bloom" /> Real-time Monitoring
                </li>
              </ul>
            </div>

            <div className="glass-card p-12 group hover:border-bloom/30 transition-all">
              <Headphones className="text-bloom mb-8 w-12 h-12" />
              <h3 className="text-3xl font-bold mb-6 tracking-tighter text-white">Producer Sessions</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Collaborate with experienced producers who guide your sound, structure your music,
                and help you achieve a polished final product.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-lake-blue" /> Arrangement & Composition
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-lake-blue" /> Instrument Tracking
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-lake-blue" /> Creative Direction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tour the Studio Gallery */}
      <section className="py-40 relative overflow-hidden bg-brand-black/40">
        <div className="absolute top-1/2 left-[10%] w-[600px] h-[600px] pointer-events-none opacity-5">
           <svg viewBox="0 0 200 200" className="w-full h-full text-bloom animate-[spin_100s_linear_infinite]">
             <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" fill="none" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-9xl tracking-tighter uppercase font-black leading-[0.8] mb-6">
              Tour the <br />
              <span className="text-outline opacity-40">Studio</span>
            </h2>
            <div className="flex items-center gap-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-[2px] bg-bloom"
              ></motion.div>
              <p className="text-bloom tracking-[0.4em] uppercase text-[10px] font-bold">The Sanctuary Equipment</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[250px]">
            {[
              { 
                title: "Vocal Sanctuary", 
                type: "Recording", 
                img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000",
                span: "md:col-span-4 md:row-span-2",
                stats: ["Neumann U87 Ai", "Avalon VT-737sp", "Acoustic Shielding"]
              },
              { 
                title: "Vintage Synths", 
                type: "Instruments", 
                img: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1000",
                span: "md:col-span-2 md:row-span-1",
                stats: ["Moog Matriarch", "Juno-60", "Prophet-5"]
              },
              { 
                title: "The Drum Pit", 
                type: "Live Room", 
                img: "https://images.unsplash.com/photo-1524230652367-95f2ff684526?q=80&w=1000",
                span: "md:col-span-2 md:row-span-2",
                stats: ["DW Collector Series", "Zildjian K Custom", "8-mic Array"]
              },
              { 
                title: "Analog Console", 
                type: "Control", 
                img: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?q=80&w=1000",
                span: "md:col-span-2 md:row-span-1",
                stats: ["48-Channel SSL", "Genelec Monitoring"]
              },
              { 
                title: "Guitar Wall", 
                type: "Instruments", 
                img: "https://images.unsplash.com/photo-1525201548112-999b1d1bcad1?q=80&w=1000",
                span: "md:col-span-2 md:row-span-1",
                stats: ["Fender Strat '62", "Gibson Les Paul", "Martin Acoustic"]
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${item.span} relative group overflow-hidden border border-white/5 bg-coal/40 cursor-crosshair rounded-2xl`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 group-hover:brightness-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-[1px] bg-bloom"></span>
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-bloom">{item.type}</span>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tighter text-white uppercase">{item.title}</h4>
                  
                  {/* Expanded Stats on Hover */}
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 flex flex-wrap gap-2">
                      {item.stats.map((stat, sIdx) => (
                        <span key={sIdx} className="text-[8px] font-medium text-white/40 border border-white/10 px-2 py-1 rounded-full uppercase tracking-widest bg-white/5">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-bloom/0 group-hover:border-bloom/50 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-bloom/0 group-hover:border-bloom/50 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 bg-coal/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4 leading-none tracking-tighter">Music Packages</h2>
            <p className="text-white/40 tracking-[0.3em] uppercase text-xs font-bold">End-to-End Excellence</p>
          </div>

          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Single Track",
                desc: "Perfect for artists looking to release one high-quality song. Includes recording, mixing, and mastering.",
                icon: Layers
              },
              {
                title: "EP Package",
                desc: "Ideal for developing a small collection (3–5 songs) of music with consistent quality and sound identity.",
                icon: Disc
              },
              {
                title: "Album Package",
                desc: "Full production experience (8–12 songs) with flexible planning and a complete musical journey.",
                icon: Music
              }
            ].map((pkg, idx) => (
              <motion.div key={idx} variants={itemVars} className="p-10 border border-white/5 bg-brand-black hover:border-bloom transition-all rounded-2xl shadow-lg">
                <pkg.icon className="text-bloom mb-8 w-10 h-10" />
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">{pkg.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{pkg.desc}</p>
                <div className="h-[2px] w-12 bg-bloom/20"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 tracking-widest uppercase border-b border-white/10 pb-6 text-center md:text-left">Add-On Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <Video className="text-lake-blue shrink-0" size={32} />
              <div>
                <h5 className="font-bold mb-3 uppercase tracking-wider text-sm">Music Video Partnerships</h5>
                <p className="text-sm text-white/40 leading-relaxed">Collaborate with talented local videographers to bring your music to life visually.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Share2 className="text-bloom shrink-0" size={32} />
              <div>
                <h5 className="font-bold mb-3 uppercase tracking-wider text-sm">Distribution Support</h5>
                <p className="text-sm text-white/40 leading-relaxed">Get your music on global platforms like Spotify, Apple Music, Boomplay, and more.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Megaphone className="text-white shrink-0" size={32} />
              <div>
                <h5 className="font-bold mb-3 uppercase tracking-wider text-sm">Marketing Bundle</h5>
                <p className="text-sm text-white/40 leading-relaxed">Boost your reach with social media promotion, branding, and professional cover art design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 text-center">
        <Link to="/booking" className="btn-primary">Book Your Session Now</Link>
      </div>
    </div>
  );
}

const Disc = ({ className, size }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Music = ({ className, size }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
