/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Narrative() {
  const sentences1 = [
    "We all had it.",
    "The coin we sold at 2x.",
    "The one that went 100x.",
    "The wallet we forgot.",
    "The seed phrase we lost.",
    "The buy button we never clicked."
  ];

  const sentences2 = [
    "The biggest position in crypto isn't Bitcoin.",
    "It isn't Ethereum.",
    "It isn't the institutions."
  ];

  const sentences3 = [
    "Every trader owns it.",
    "Today, we're tokenizing it."
  ];

  return (
    <section id="narrative" className="relative bg-[#0A0A0B] overflow-hidden">
      <div className="heavy-rule" />
      <div className="relative flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Left Column: Scroll Reveal Narrative Sentences */}
        <div className="flex-1 px-6 md:px-16 lg:px-24 py-32 md:py-40 space-y-6 md:space-y-8 max-w-3xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-display text-4xl md:text-5xl text-[#E2E2E2] tracking-tighter">
              THE NARRATIVE
            </h2>
            <div className="h-1 w-20 bg-[#FF3B30] mt-4" />
          </motion.div>

          {/* Block 1 */}
          <div className="space-y-4">
            {sentences1.map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0.1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-mono text-base md:text-xl lg:text-2xl text-[#E2E2E2] leading-relaxed select-none hover:text-[#FF3B30] transition-colors duration-300"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <div className="h-10 md:h-16" />

          {/* Block 2 */}
          <div className="space-y-4">
            {sentences2.map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0.1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-mono text-base md:text-xl lg:text-2xl text-[#E2E2E2]/90 leading-relaxed select-none hover:text-[#FF3B30] transition-colors duration-300"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <div className="h-10 md:h-16" />

          {/* The Big Punchline */}
          <motion.p
            initial={{ opacity: 0.15, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#FF3B30] tracking-tight uppercase select-none border-l-4 border-[#FF3B30] pl-6 py-2"
          >
            It's Regret.
          </motion.p>

          <div className="h-10 md:h-16" />

          {/* Block 3 */}
          <div className="space-y-4">
            {sentences3.map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0.1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-mono text-base md:text-xl lg:text-2xl text-[#E2E2E2]/80 leading-relaxed select-none hover:text-[#FF3B30] transition-colors duration-300"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Grayscale Asset Graphic */}
        <div className="hidden lg:flex lg:w-[450px] xl:w-[500px] items-center justify-center p-12 relative">
          <div className="sticky top-1/4 w-full select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative rounded-lg overflow-hidden border border-[#454545]/40"
            >
              <img
                src="https://media.base44.com/images/public/6a42327e1a0605fec7567a02/1f8717dc6_generated_f7bdba9f.png"
                alt="A single cold drop of water falling into a dark still pool"
                referrerPolicy="no-referrer"
                className="w-full h-auto opacity-70 filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B] opacity-80" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="heavy-rule" />
    </section>
  );
}
