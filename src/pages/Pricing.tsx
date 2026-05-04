import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    title: "Studio Session",
    subtitle: "(Per Hour)",
    price: "UGX 50,000 – 80,000",
    features: [
      "Professional Recording Booth",
      "Expert Sound Engineer",
      "High-Quality Mic Setup",
      "Standard Gear Access"
    ],
    highlight: false
  },
  {
    title: "Producer Session",
    subtitle: "(Per Hour)",
    price: "UGX 70,000 – 120,000",
    features: [
      "Hands-on Production Support",
      "Arrangement Assistance",
      "Expert Beat-making/Music Design",
      "Collaborative Insight"
    ],
    highlight: true,
    accent: "lake-blue"
  },
  {
    title: "Monthly Membership",
    price: "UGX 500,000 – 1M",
    features: [
      "15–20 Hours Per Month",
      "Priority Booking Status",
      "Reduced Package Rates",
      "Community Access"
    ],
    highlight: false
  },
  {
    title: "Single Track Package",
    price: "UGX 300,000 – 500,000",
    features: [
      "Full Recording Time",
      "Professional Mixing",
      "Mastering Included",
      "WAV & MP3 Export"
    ],
    highlight: false
  },
  {
    title: "EP Package (3–5 Songs)",
    price: "UGX 1.2M – 2M",
    features: [
      "Full EP Production",
      "Consistent Mixing Style",
      "Professional Mastering",
      "Metadata Setup"
    ],
    highlight: true,
    accent: "bloom"
  },
  {
    title: "Album Package (8–12 Songs)",
    price: "UGX 2.5M – 4.5M",
    features: [
      "Complete Production Journey",
      "Flexible Payment Options",
      "Priority Studio Schedule",
      "Distribution Consultation"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-9xl mb-8 tracking-tighter">Pricing</h1>
            <p className="text-white/40 tracking-[0.5em] uppercase text-sm font-bold">From Idea to Masterpiece</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col p-8 md:p-12 border transition-all duration-300 card-glow h-full ${card.highlight ? (card.accent === 'bloom' ? 'border-bloom bg-bloom/5' : 'border-lake-blue bg-lake-blue/5') : 'border-white/5 bg-coal/20'}`}
              >
                <div className="mb-10">
                  <h3 className="font-bold text-xs tracking-[0.3em] uppercase mb-4 text-white/50">
                    {card.title} {card.subtitle && <span className="text-[10px] lowercase italic">{card.subtitle}</span>}
                  </h3>
                  <p className={`text-2xl md:text-3xl font-bold tracking-tighter ${card.accent === 'bloom' ? 'text-bloom' : (card.accent === 'lake-blue' ? 'text-lake-blue' : 'text-white')}`}>
                    {card.price}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  {card.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-white/70">
                      <Check size={14} className={card.highlight ? (card.accent === 'bloom' ? 'text-bloom' : 'text-lake-blue') : 'text-white/30'} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className={`py-4 px-8 font-bold uppercase tracking-widest text-xs text-center transition-all ${card.highlight ? (card.accent === 'bloom' ? 'bg-bloom text-brand-black hover:bg-white' : 'bg-lake-blue text-brand-black hover:bg-white') : 'border border-white/20 hover:border-bloom hover:text-bloom'}`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bloom/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 tracking-tight uppercase">Custom Needs? Contact us for a tailored quote.</h2>
          <div className="flex justify-center gap-8">
            <Link to="/contact" className="btn-secondary">Message Us</Link>
            <Link to="/booking" className="btn-primary flex items-center gap-2">Choose Package <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
