/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Flame } from "lucide-react";

export default function Hero() {
  const bulletLines = [
    "You sold too early.",
    "You faded the launch.",
    "You took profits.",
    "You watched it go 1000x."
  ];

  const handleScrollToTerminal = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("terminal");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.base44.com/images/public/6a42327e1a0605fec7567a02/81598817b_generated_3b69fa5b.png"
          alt="Brutalist concrete monolith in foggy salt flat"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 md:opacity-30 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/80 via-[#0A0A0B]/50 to-[#0A0A0B]" />
      </div>

      {/* Massive Watermark Label */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-display text-[22vw] lg:text-[24rem] text-[#E2E2E2] opacity-[0.03] whitespace-nowrap tracking-tighter select-none">
          $REGRET
        </span>
      </div>

      {/* Main Container Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-16 max-w-7xl mx-auto w-full">
        {/* Cinematic Header Text with Framer Motion slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <h1 className="text-display text-[clamp(2.5rem,8vw,9.5rem)] leading-[0.9] text-[#E2E2E2] tracking-tighter select-none">
            YOU ALREADY
            <br />
            OWN <span className="text-[#FF3B30] inline-block hover:scale-105 transition-transform duration-300">REGRET</span>
          </h1>
        </motion.div>

        {/* Narrative bullet lines staggered */}
        <div className="mt-12 md:mt-16 space-y-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.4
                }
              }
            }}
            className="space-y-2 md:space-y-3"
          >
            {bulletLines.map((line, idx) => (
              <motion.p
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="font-mono text-sm md:text-base lg:text-lg text-[#E2E2E2]/70 tracking-wide flex items-center gap-3"
              >
                <span className="text-[#FF3B30] font-bold select-none">&gt;</span>
                {line}
              </motion.p>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 pt-4 space-y-2 border-t border-[#454545]/20 max-w-md"
            >
              <p className="font-mono text-xl md:text-2xl text-[#E2E2E2] font-bold tracking-tight flex items-center gap-2">
                Congratulations.
                <Flame className="w-5 h-5 text-[#FF3B30] animate-pulse" />
              </p>
              <p className="font-mono text-xs md:text-sm text-[#E2E2E2]/50 leading-relaxed">
                You've been holding REGRET in your wallet all along.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Massive Brutalist Bottom Swipe Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="relative z-10 w-full"
      >
        <div className="heavy-rule-red" />
        <a
          href="#terminal"
          onClick={handleScrollToTerminal}
          className="group block w-full bg-[#FF3B30] hover:bg-[#E2342A] text-[#0A0A0B] text-display text-center text-xl md:text-3xl py-6 md:py-7 tracking-tight transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FF3B30] focus:ring-offset-4 focus:ring-offset-[#0A0A0B]"
        >
          <span className="inline-flex items-center gap-2 tracking-widest font-extrabold uppercase">
            CONFESS YOUR CRYPTO REGRETS NOW
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
