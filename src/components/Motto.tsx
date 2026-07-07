/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Motto() {
  return (
    <section id="motto" className="bg-[#0A0A0B] px-6 md:px-16 lg:px-24 py-36 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#FF3B30] blur-xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 0.4, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase text-[#6978a0]"
        >
          // Our Motto
        </motion.p>

        <div className="space-y-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display text-3xl md:text-5xl lg:text-6xl text-[#E2E2E2] leading-tight font-extrabold tracking-tight select-none"
          >
            "We don't build hype.
            <br />
            We build a movement."
          </motion.blockquote>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-display text-3xl md:text-5xl lg:text-6xl text-[#FF3B30] leading-tight font-extrabold tracking-tight select-none"
          >
            We all have it.
            <br />
            Now we tokenize.
          </motion.blockquote>
        </div>

        {/* Scaling Red Line Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-24 h-1 bg-[#FF3B30] mx-auto mt-16"
        />
      </div>
    </section>
  );
}
