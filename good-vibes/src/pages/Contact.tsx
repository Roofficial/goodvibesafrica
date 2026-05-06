import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl mb-8 tracking-tighter"
          >
            Get in <span className="text-lake-blue">Touch</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            We’d love to hear from you. Whether you're ready to record or just have a question, reach out and let’s talk music.
          </p>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-coal flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-bloom" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-2">Address</h4>
                  <p className="text-xl leading-snug">Burambira Heights, Kisoro Rd<br />Kabale, Uganda</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-coal flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-lake-blue" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-2">Phone</h4>
                  <p className="text-xl leading-snug">+256 __________</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-coal flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-2">Email</h4>
                  <p className="text-xl leading-snug">info@goodvibes.africa</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-coal/30 border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-bloom"></div>
               <p className="text-white italic text-lg leading-relaxed mb-4">"A space where legends are born and vibes are eternal."</p>
               <span className="text-[10px] font-bold uppercase tracking-widest text-bloom">— GVA Holdings Limited</span>
            </div>
          </div>

          <div className="glass-card p-10 md:p-16">
            <h3 className="text-3xl font-bold mb-10 tracking-tighter uppercase">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-bloom transition-colors outline-none text-lg font-light"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-bloom transition-colors outline-none text-lg font-light"
                  placeholder="contact@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Message</label>
                <textarea
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-bloom transition-colors outline-none text-lg font-light min-h-[150px] resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Embedded Map Visual Replacement (Minimal aesthetic) */}
      <section className="h-[400px] bg-coal relative overflow-hidden grayscale brightness-50">
          <div className="absolute inset-0 african-pattern opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-bloom mx-auto mb-4" />
              <p className="font-bold text-2xl tracking-[0.2em]">KABALE, UGANDA</p>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-2">Find us at Burambira Heights</p>
            </div>
          </div>
      </section>
    </div>
  );
}
