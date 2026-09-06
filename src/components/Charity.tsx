/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Heart, Brain, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Activity } from "lucide-react";

export default function Charity() {
  return (
    <section id="charity" className="relative bg-[#0A0A0B] overflow-hidden mt-12 md:mt-20">
      <div className="heavy-rule" />
      
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-dashed border-[#FF3B30]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 py-32 md:py-40">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#FF3B30]/30 bg-[#FF3B30]/5 text-[#FF3B30] font-mono text-xs uppercase tracking-widest font-bold"
          >
            <Heart className="w-4 h-4 fill-[#FF3B30] animate-pulse" />
            REGRET Gives Back // Mental Health Resilience
          </motion.div>
          
          <h2 className="text-display text-4xl md:text-6xl text-[#E2E2E2] tracking-tighter uppercase font-extrabold">
            Turning REGRET into Resilience
          </h2>
          <div className="w-20 h-1 bg-[#FF3B30] mx-auto mt-4" />
        </div>

        {/* Narrative & Slogans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4 font-mono text-sm md:text-base text-[#E2E2E2]/70"
          >
            <p className="border-l-2 border-[#FF3B30] pl-4 italic text-[#E2E2E2]/90">
              "We can't change the trades we regret."
            </p>
            <p className="border-l-2 border-[#FF3B30] pl-4 italic text-[#E2E2E2]/90">
              "We can't buy back the Bitcoin we sold too early."
            </p>
            <p className="border-l-2 border-[#FF3B30] pl-4 italic text-[#E2E2E2]/90">
              "We can't undo the opportunities we missed."
            </p>
            <p className="font-bold text-[#FF3B30] text-base md:text-lg pt-2">
              But together, we can empower youth with mental strength and resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 bg-[#0F0F10] border-2 border-[#454545] p-6 md:p-8 font-mono text-xs md:text-sm text-[#6978a0] leading-relaxed relative overflow-hidden"
          >
            <p>
              At REGRET, we recognize that emotional volatility, burnout, and mental anguish are real battles. That's why a dedicated 5% Charity Treasury and creator rewards are channeled directly toward youth mental health resilience programs, counseling initiatives, and charitable wellness courses.
            </p>
          </motion.div>

        </div>

        {/* Commitment Cards Grid: Mental Health Resilience Youth Charitable Cause */}
        <div className="space-y-6 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-[#6978a0] font-bold">
              // Our Commitment: Mental Health Resilience Youth Charitable Cause
            </h3>
            <span className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-wider bg-[#FF3B30]/10 border border-[#FF3B30]/20 px-2.5 py-1">
              5% ALLOCATED ON-CHAIN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Mental Health Resilience & Crisis Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-2 border-[#454545] bg-[#0A0A0B] p-6 md:p-8 space-y-4 hover:border-[#FF3B30] transition-colors group relative"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl" role="img" aria-label="brain">🧠</span>
                <Brain className="w-5 h-5 text-[#6978a0]/40 group-hover:text-[#FF3B30] transition-colors" />
              </div>
              <h4 className="text-display text-lg text-white font-bold uppercase tracking-tight">
                Mental Health Resilience & Crisis Support
              </h4>
              <ul className="font-mono text-xs text-[#6978a0] space-y-2.5 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF3B30] shrink-0 font-bold">&gt;</span>
                  <span>24/7 youth mental health counseling & crisis intervention hotlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF3B30] shrink-0 font-bold">&gt;</span>
                  <span>Trauma recovery & psychological resilience development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF3B30] shrink-0 font-bold">&gt;</span>
                  <span>Destigmatizing financial distress, trading anxiety & depression</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Youth Emotional Wellness & Resilience Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-2 border-[#454545] bg-[#0A0A0B] p-6 md:p-8 space-y-4 hover:border-[#00E676] transition-colors group relative"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl" role="img" aria-label="graduation">🎓</span>
                <GraduationCap className="w-6 h-6 text-[#6978a0]/40 group-hover:text-[#00E676] transition-colors" />
              </div>
              <h4 className="text-display text-lg text-white font-bold uppercase tracking-tight">
                Youth Resilience Courses & Education
              </h4>
              <ul className="font-mono text-xs text-[#6978a0] space-y-2.5 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#00E676] shrink-0 font-bold">&gt;</span>
                  <span>Mindfulness, stress management & emotional coping workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E676] shrink-0 font-bold">&gt;</span>
                  <span>Digital learning courses on emotional intelligence & mental fortitude</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E676] shrink-0 font-bold">&gt;</span>
                  <span>School, campus & community-based youth wellness programs</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Community Peer Support & Outreach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-2 border-[#454545] bg-[#0A0A0B] p-6 md:p-8 space-y-4 hover:border-[#38BDF8] transition-colors group relative"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl" role="img" aria-label="hands">🤝</span>
                <HeartHandshake className="w-5 h-5 text-[#6978a0]/40 group-hover:text-[#38BDF8] transition-colors" />
              </div>
              <h4 className="text-display text-lg text-white font-bold uppercase tracking-tight">
                Peer Support & Community Care
              </h4>
              <ul className="font-mono text-xs text-[#6978a0] space-y-2.5 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8] shrink-0 font-bold">&gt;</span>
                  <span>Safe spaces & peer-led recovery circles for struggling youth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8] shrink-0 font-bold">&gt;</span>
                  <span>Direct grants & sponsorship for frontline mental health non-profits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8] shrink-0 font-bold">&gt;</span>
                  <span>Youth mentorship, life coaching & long-term emotional wellbeing</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Transparency Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#0F0F10] border-[4px] border-[#454545] p-6 md:p-10">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3B30] font-bold block">
              // Transparency
            </span>
            <h4 className="text-display text-2xl text-white font-extrabold uppercase">
              Full Documented Ledger
            </h4>
            <p className="font-mono text-xs md:text-sm text-[#6978a0] leading-relaxed">
              Every mental health grant and charitable disbursement will be publicly documented. The REGRET community will always know:
            </p>
            <ul className="font-mono text-xs text-[#E2E2E2] space-y-2 list-none pl-0">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full" />
                Where mental health funds were deployed.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full" />
                How much was donated in Solana / USD equivalent.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full" />
                The direct impact and youth lives supported.
              </li>
            </ul>
            <p className="font-mono text-[10px] text-red-500 font-semibold tracking-wider uppercase pt-2 select-none">
              No hidden promises. Full on-chain transparency.
            </p>
          </div>

          <div className="border border-[#454545]/40 bg-[#0A0A0B] p-6 text-center space-y-4">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
            <h5 className="text-display text-lg text-white font-bold uppercase tracking-wide">
              Our Promise
            </h5>
            <p className="font-mono text-xs text-[#E2E2E2] italic leading-relaxed max-w-sm mx-auto">
              "Every regret becomes someone else's emotional strength and resilience."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
