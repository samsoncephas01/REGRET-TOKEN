/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUp, Twitter, Send, Globe, Music, Instagram } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0B] overflow-hidden">
      <div className="heavy-rule-red" />
      
      {/* Background Rain City Silhouette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.base44.com/images/public/6a42327e1a0605fec7567a02/05f7261a2_generated_6715b905.png"
          alt="Lone silhouette looking out at rain-slicked city at 3 AM"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 md:opacity-15 filter grayscale select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/85 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="space-y-16">
          
          {/* Big Massive Watermark */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.15, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-display text-[clamp(4rem,15vw,11rem)] leading-none text-[#E2E2E2] select-none pointer-events-none tracking-tighter"
          >
            $REGRET
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 border-t border-[#454545]/30">
            
            {/* Disclaimer & Context block */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-display text-2xl md:text-3xl text-[#E2E2E2] tracking-tighter select-none font-bold">
                The only bag everyone already owns.
              </p>
              <p className="font-mono text-xs text-[#6978a0] leading-relaxed max-w-xl">
                No roadmap. No utility. No promises. Just emotional damage. $REGRET is a meme coin with absolutely no intrinsic value, built on Solana. It is created for entertainment, emotional validation, and collective trading hindsight. This is not financial advice. You already knew that.
              </p>
            </div>

            {/* Socials Link Columns */}
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase text-[#FF3B30] tracking-[0.2em] block font-bold">
                // EXTERNAL LINKS
              </span>
              <div className="flex flex-col gap-4 font-mono text-xs">
                <a
                  href="https://x.com/REGRET_TOKEN1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#FF3B30] transition-colors focus:outline-none w-fit group"
                >
                  <Twitter className="w-4 h-4 text-[#FF3B30]/60 group-hover:text-[#FF3B30]" />
                  <span>X / TWITTER</span>
                </a>
                <a
                  href="https://t.me/REGRET_all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#FF3B30] transition-colors focus:outline-none w-fit group"
                >
                  <Send className="w-4 h-4 text-[#FF3B30]/60 group-hover:text-[#FF3B30]" />
                  <span>TELEGRAM CHANNEL</span>
                </a>
                <a
                  href="https://t.me/+qXR8MgZYm6I5YjJk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#FF3B30] transition-colors focus:outline-none w-fit group"
                >
                  <Send className="w-4 h-4 text-[#FF3B30]/60 group-hover:text-[#FF3B30]" />
                  <span>TELEGRAM GROUP</span>
                </a>
                <a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#FF3B30] transition-colors focus:outline-none w-fit group"
                >
                  <Globe className="w-4 h-4 text-[#FF3B30]/60 group-hover:text-[#FF3B30]" />
                  <span>DEXSCREENER</span>
                </a>
                <a
                  href="https://www.tiktok.com/@regret_token1?_r=1&_t=ZS-97hIA5ZszFU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#FF3B30] transition-colors focus:outline-none w-fit group"
                >
                  <Music className="w-4 h-4 text-[#FF3B30]/60 group-hover:text-[#FF3B30]" />
                  <span>TIKTOK</span>
                </a>
                <a
                  href="https://www.instagram.com/regret_token1?igsh=M280Y2NzYm1ncjQ4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#FF3B30] transition-colors focus:outline-none w-fit group"
                >
                  <Instagram className="w-4 h-4 text-[#FF3B30]/60 group-hover:text-[#FF3B30]" />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright Row & Back to Top */}
          <div className="pt-8 border-t border-[#454545]/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left font-mono text-[10px] text-[#6978a0]">
              <p>© 2025 $REGRET — POWERED BY FOMO</p>
              <span className="hidden sm:inline">|</span>
              <p>EXIT LIQUIDITY FOR YOUR EMOTIONS</p>
            </div>

            <button
              onClick={handleScrollTop}
              className="font-mono text-[10px] text-[#FF3B30] hover:text-white flex items-center gap-1 border border-[#FF3B30]/30 hover:border-[#FF3B30] px-3 py-1.5 transition-all cursor-pointer uppercase tracking-wider"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              BACK TO VOID TOP
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
