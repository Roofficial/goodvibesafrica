import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, CheckCircle2, Music } from 'lucide-react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get('name');
    const service = formData.get('service');
    const date = formData.get('date');
    const time = formData.get('time');
    const phone = formData.get('phone');
    const notes = formData.get('notes');

    const message = `Hello Good Vibes Africa! I'd like to book a session.%0A%0A` +
      `*Artist/Name:* ${name}%0A` +
      `*Service:* ${service}%0A` +
      `*Date:* ${date}%0A` +
      `*Time:* ${time}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Notes:* ${notes}`;

    const whatsappUrl = `https://wa.me/256791439727?text=${message}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
    setSubmitted(true);
  };

  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      <section className="py-24 lg:py-40">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Book Your <span className="text-bloom">Session</span></h1>
                  
                  {/* Step Indicator */}
                  <div className="flex justify-center items-center gap-4 mb-8">
                    {[
                      { label: "Details", active: true },
                      { label: "Choice", active: true },
                      { label: "Finish", active: false }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border ${step.active ? 'bg-bloom border-bloom text-brand-black' : 'border-white/20 text-white/40'}`}>
                            {i + 1}
                          </div>
                          <span className={`text-[8px] uppercase tracking-widest mt-2 ${step.active ? 'text-white' : 'text-white/40'}`}>{step.label}</span>
                        </div>
                        {i < 2 && <div className="w-12 h-[1px] bg-white/10 mt-[-16px]"></div>}
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-8 md:p-16 border-t-8 border-t-bloom shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-8">
                      <h3 className="font-bold text-xs tracking-widest uppercase text-lake-blue mb-4">01. Your Information</h3>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Artist or Manager Name"
                          className="w-full bg-transparent border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="For confirmation"
                          className="w-full bg-transparent border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+256..."
                          className="w-full bg-transparent border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="font-bold text-xs tracking-widest uppercase text-lake-blue mb-4">02. Session Details</h3>
                      <div className="space-y-2 relative">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Select Service</label>
                        <select name="service" className="w-full bg-brand-black border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light appearance-none text-white/70 text-sm">
                          <option value="Studio Session">Studio Session (UGX 50k - 80k /hr)</option>
                          <option value="Producer Session">Producer Session (UGX 70k - 120k /hr)</option>
                          <option value="Single Track">Single Track Package (From 300k)</option>
                          <option value="EP Package">EP Package (From 1.2M)</option>
                          <option value="Album Package">Album Package (From 2.5M)</option>
                        </select>
                        <div className="absolute right-4 bottom-4 pointer-events-none text-bloom">▼</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block flex items-center gap-2">
                            <Calendar size={12} className="text-bloom" /> Preferred Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            required
                            className="w-full bg-brand-black border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light text-white/70 text-xs"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block flex items-center gap-2">
                            <Clock size={12} className="text-bloom" /> Preferred Time
                          </label>
                          <input
                            type="time"
                            name="time"
                            required
                            className="w-full bg-brand-black border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light text-white/70 text-xs"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Additional Notes</label>
                        <textarea
                          name="notes"
                          placeholder="Tell us about your genre, instruments, or special requests..."
                          className="w-full bg-transparent border border-white/10 p-4 focus:border-bloom transition-colors outline-none font-light min-h-[100px] resize-none text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-accent w-full py-5 text-sm flex items-center justify-center gap-4">
                    Send Booking Request <CheckCircle2 size={20} />
                  </button>
                  <p className="text-[9px] uppercase tracking-widest text-white/20 text-center mt-6">A member of our team will call you within 24 hours to finalize.</p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 glass-card p-16 rounded-xl border-bloom/20"
              >
                <div className="w-24 h-24 bg-bloom/20 rounded-full flex items-center justify-center mx-auto mb-10">
                  <CheckCircle2 size={48} className="text-bloom" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">Booking Received!</h2>
                <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-lg mx-auto">
                  Thank you for booking with Good Vibes Africa! Our team will contact you shortly to confirm your session.
                </p>
                <div className="w-16 h-[2px] bg-lake-blue mx-auto mb-10"></div>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold uppercase tracking-widest text-bloom border-b border-bloom pb-1"
                  >
                    Send Another Request
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Visual Support */}
      <section className="py-20 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-between items-center opacity-30">
            <Music size={40} className="text-bloom" />
            <div className="text-[8px] tracking-[1em] uppercase font-bold text-white/40">Excellence in Sound • Authenticity in Vibes</div>
            <Music size={40} className="text-lake-blue" />
         </div>
      </section>
    </div>
  );
}
