import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

const track = {
  title: "Kigezi Waves",
  artist: "Qwela feat. Joe Kahiri",
  cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
  duration: "3:45"
};

const Waveform = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="flex items-end gap-[2px] h-4">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{
            height: isPlaying 
              ? [4, Math.random() * 12 + 4, 4] 
              : 4
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05
          }}
          className="w-[2px] bg-bloom rounded-full"
        />
      ))}
    </div>
  );
};

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40 hidden lg:block"
    >
      <div className="glass-card p-4 rounded-lg flex items-center gap-6 w-96 shadow-2xl border-white/10 border-l-4 border-l-bloom">
        <div className="relative group overflow-hidden rounded-md shrink-0 w-16 h-16">
          <img src={track.cover} alt="Cover" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          <div className="absolute inset-0 bg-brand-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-white">
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div className="overflow-hidden">
              <p className="text-xs font-bold uppercase tracking-widest truncate">{track.title}</p>
              <p className="text-[10px] text-white/50 truncate">{track.artist}</p>
            </div>
            <div className="flex items-center gap-2">
              <Waveform isPlaying={isPlaying} />
              <Volume2 size={14} className="text-white/30" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: isPlaying ? "100%" : "33%" }}
                transition={{ duration: 225, ease: "linear" }}
                className="h-full bg-bloom"
              ></motion.div>
            </div>
            <span className="text-[10px] text-white/40 tabular-nums">1:12 / {track.duration}</span>
          </div>

          <div className="flex justify-center gap-4 mt-2 text-white/40">
            <SkipBack size={14} className="hover:text-white cursor-pointer" />
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause size={14} className="text-bloom" /> : <Play size={14} />}
            </button>
            <SkipForward size={14} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
