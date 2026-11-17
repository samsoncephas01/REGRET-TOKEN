/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell, Check, Clock } from "lucide-react";

export default function WorldRegretDay() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const focusReminderForm = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 300);
    }
  };

  return (
    <section id="world-regret-day" className="relative bg-[#0A0A0B] overflow-hidden mt-12 md:mt-20">
      <div className="heavy-rule" />
      
      {/* Absolute Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#FF3B30]/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-32 md:py-40">
        
        {/* Left Grid: Main Details & Branding */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF3B30] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF3B30] rounded-full animate-ping" />
              RELAUNCH SCHEDULE • DATE & TIME TBA
            </span>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-[#E2E2E2] tracking-tighter">
              WORLD
              <br />
              <span className="text-[#FF3B30]">REGRET</span> DAY
            </h2>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="font-mono text-xs font-bold text-[#FF3B30] bg-[#FF3B30]/10 border border-[#FF3B30]/30 px-2.5 py-1 tracking-widest uppercase flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF3B30]" />
                RELAUNCH DAY: TBA
              </span>
              <span className="font-mono text-xs text-[#6978a0] tracking-widest uppercase font-bold">
                • AWAITING NEW COORDINATES
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm md:text-base text-[#E2E2E2]/80 leading-relaxed max-w-xl"
          >
            A designated international crypto-holiday to collectively mourn every early sell, faded 1000x launch, compromised private key, and catastrophic margin liquidation. <strong className="text-white">Relaunch day is TBA</strong> — we will stand in solidarity when the new coordinates are locked to convert our shared losses into mental resilience and collective strength.
          </motion.p>

          {/* Interactive Interest Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md"
          >
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <p className="font-mono text-xs text-[#6978a0] uppercase tracking-wider">
                    Sign up to receive relaunch day announcements and community coordinates:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      ref={emailInputRef}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER EMAIL ADDRESS"
                      className="flex-1 bg-[#0F0F10] border-2 border-[#454545] text-white font-mono text-xs px-4 py-3.5 focus:border-[#FF3B30] focus:outline-none placeholder-[#454545] transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-[#FF3B30] hover:bg-[#CC2F26] text-black font-mono font-bold text-xs uppercase px-6 py-3.5 tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <Bell className="w-4 h-4" />
                      REMIND ME
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-950/20 border-2 border-emerald-500/30 p-4 font-mono text-xs text-emerald-400 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase tracking-wider mb-1">REMINDER CONFIRMED • RELAUNCH DAY TBA</p>
                    <p className="text-[#6978a0] leading-relaxed">We will dispatch alerts to your inbox as soon as the relaunch day is announced. Check your spam folder — it is where all true regret belongs.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Grid: Relaunch Status Box */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-[4px] border-[#454545] bg-[#0A0A0B] p-6 md:p-8 w-full max-w-sm space-y-6 shadow-2xl relative"
          >
            <div className="flex items-center justify-between border-b border-[#454545] pb-3 text-[#6978a0] font-mono text-[10px] tracking-widest uppercase">
              <span className="flex items-center gap-1.5 text-[#FF3B30]">
                <Clock className="w-3.5 h-3.5 text-[#FF3B30] animate-spin-slow" />
                RELAUNCH STATUS
              </span>
              <span className="text-[#FF3B30] font-bold">
                RELAUNCH DAY: TBA
              </span>
            </div>

            {/* Relaunch Day TBA Panel */}
            <div className="bg-[#0F0F10] border-2 border-[#FF3B30] p-6 text-center space-y-3 relative overflow-hidden shadow-[0_0_30px_rgba(255,59,48,0.2)]">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#FF3B30] tracking-widest uppercase">
                  SCHEDULE PENDING
                </span>
              </div>
              <div className="text-display text-2xl md:text-3xl text-white font-extrabold tracking-tight uppercase">
                RELAUNCH DAY: TBA
              </div>
              <p className="font-mono text-[11px] text-[#E2E2E2]/70 leading-relaxed">
                Official relaunch date and time will be announced soon. Stay tuned for updated coordinates.
              </p>
            </div>

            {/* Status indicators */}
            <div className="bg-[#0F0F10] border border-[#454545]/40 p-3 font-mono text-[10px] text-[#6978a0] space-y-2">
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-[#FF3B30] font-bold">
                  PENDING RELAUNCH
                </span>
              </div>
              <div className="flex justify-between">
                <span>RELAUNCH DAY:</span>
                <span className="text-[#F2A900] font-bold">TBA</span>
              </div>
              <div className="flex justify-between">
                <span>TIME:</span>
                <span className="text-[#F2A900] font-bold">TBA</span>
              </div>
              <div className="flex justify-between">
                <span>EVENT NAME:</span>
                <span className="text-[#E2E2E2] font-semibold">WORLD REGRET DAY</span>
              </div>
              <div className="flex justify-between">
                <span>ESTIMATED TURNOUT:</span>
                <span className="text-[#FF3B30] font-semibold">100% OF TRADERS</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-[#E2E2E2] font-semibold">THE DISAPPOINTMENT VOID</span>
              </div>
            </div>

            <button
              type="button"
              onClick={focusReminderForm}
              className="w-full py-3 bg-[#0F0F10] border-2 border-[#454545] hover:border-[#FF3B30] hover:text-white text-xs font-mono font-bold tracking-widest text-[#E2E2E2]/70 uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Bell className="w-4 h-4 text-[#FF3B30]" />
              NOTIFY ME WHEN TBA IS LOCKED
            </button>
          </motion.div>
        </div>

      </div>
      <div className="heavy-rule mt-32 md:mt-40" />
    </section>
  );
}
