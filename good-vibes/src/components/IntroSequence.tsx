import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Music } from 'lucide-react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const PHASES = [
  {
    id: 'logo',
    content: (
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-bloom absolute animate-[spin_10s_linear_infinite]">
            <path d="M90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          <Music className="text-white relative z-10" size={40} />
        </div>
        <div className="flex flex-col items-center leading-none">
          <span className="font-heading font-bold text-4xl tracking-tighter text-white">GOOD VIBES</span>
          <span className="text-sm font-bold tracking-[0.8em] text-bloom mt-2">AFRICA</span>
        </div>
      </div>
    ),
    duration: 2500
  },
  {
    id: 'philosophy',
    content: (
      <div className="max-w-2xl px-10 text-center space-y-8">
        <span className="text-bloom font-bold tracking-[0.5em] text-[10px] uppercase">Core Philosophy</span>
        <h2 className="text-3xl md:text-5xl font-light italic leading-tight text-white/90">
          "Every beat carries a feeling, every melody sparks a mood. We believe in vibes that move you."
        </h2>
        <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
      </div>
    ),
    duration: 4000
  },
  {
    id: 'vision',
    content: (
      <div className="text-center space-y-4">
        <span className="text-white/40 font-bold tracking-[0.3em] text-[10px] uppercase">Established in Kigezi</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Kigezi's Premier <br />
          <span className="text-outline-white opacity-40">Creative</span> Hub
        </h2>
      </div>
    ),
    duration: 3000
  },
  {
    id: 'action',
    content: (
      <div className="text-center group cursor-pointer">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">READY TO FEEL THE VIBES?</h2>
        <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-[1px] bg-bloom"></span>
            <span className="text-xs font-bold tracking-[1em] text-white/50 uppercase">Entering Sanctuary</span>
            <span className="w-16 h-[1px] bg-bloom"></span>
        </div>
      </div>
    ),
    duration: 2000
  }
];

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    if (currentPhase < PHASES.length) {
      const timer = setTimeout(() => {
        if (currentPhase === PHASES.length - 1) {
          onComplete();
        } else {
          setCurrentPhase(prev => prev + 1);
        }
      }, PHASES[currentPhase].duration);
      return () => clearTimeout(timer);
    }
  }, [currentPhase, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-brand-black flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-bloom/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-lake-blue/5 rounded-full blur-[100px]"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={PHASES[currentPhase]?.id}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {PHASES[currentPhase]?.content}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {PHASES.map((_, i) => (
          <motion.div
            key={i}
            className="h-[2px] rounded-full bg-white/10 overflow-hidden"
            animate={{ width: i === currentPhase ? 40 : 12 }}
          >
            {i === currentPhase && (
              <motion.div 
                className="h-full bg-bloom"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: PHASES[i].duration / 1000, ease: "linear" }}
              />
            )}
            {i < currentPhase && <div className="w-full h-full bg-white/40" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
