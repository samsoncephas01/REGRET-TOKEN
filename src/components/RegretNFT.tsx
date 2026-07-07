/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, HelpCircle, AlertCircle, Eye, RefreshCw, Layers } from "lucide-react";

export default function RegretNFT() {
  const [glitch, setGlitch] = useState(false);

  const mockMetadata = [
    { label: "COLLECTION", value: "TO BE DETERMINED (TBD)" },
    { label: "MINT PRICE", value: "TBD" },
    { label: "SUPPLY", value: "TBD" },
    { label: "BLOCKCHAIN", value: "SOLANA" },
  ];

  const utilities = [
    "Proof of Survival",
    "Proof of Regret",
    "Badge of Conviction",
    "Lifetime membership",
    "Every Scar Tells a Story"
  ];

  const emotionalRarities = [
    {
      emoji: "🟢",
      label: "FOMO Survivor",
      color: "#00E676",
      description: "Minted during absolute peak velocity, survived the inevitable 90% correction."
    },
    {
      emoji: "🔴",
      label: "Paper Hands",
      color: "#FF3B30",
      description: "Sold at the exact bottom, right before a 100x candle. An absolute classic."
    },
    {
      emoji: "🟣",
      label: "Diamond Hands",
      color: "#9333EA",
      description: "Held from peak to absolute zero. Never sold, never surrendered, never profited."
    },
    {
      emoji: "🟡",
      label: "Exit Liquidity",
      color: "#F2A900",
      description: "The ultimate counter-party. Gracefully bought bags from developers' wallets at 3 AM."
    },
    {
      emoji: "⚫",
      label: "Rug Survivor",
      color: "#4B5563",
      description: "Experienced the pure rush of dynamic smart contract rugpulls and lived to tell the story."
    },
    {
      emoji: "🔥",
      label: "Top Buyer",
      color: "#F97316",
      description: "Bought the absolute local ATH peak candle down to the exact Satoshi."
    },
    {
      emoji: "👻",
      label: "Ghost Wallet",
      color: "#38BDF8",
      description: "Forgotten private keys, compromised seed phrases, or pure silent watch-only watchlists."
    }
  ];

  return (
    <section id="regret-nft" className="bg-[#0A0A0B] relative overflow-hidden my-12 md:my-20">
      <div className="heavy-rule" />

      {/* Decorative Blur Accent */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-radial from-[#F2A900] to-transparent blur-3xl" />
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative z-10 py-24 md:py-32">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-display text-4xl md:text-5xl text-[#E2E2E2] mb-3 tracking-tighter uppercase font-extrabold"
          >
            5. REGRET NFT COLLECTION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs text-[#6978a0] uppercase tracking-[0.3em]"
          >
            // Immortalizing financial remorse on-chain
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Interactive NFT Preview (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onHoverStart={() => setGlitch(true)}
              onHoverEnd={() => setGlitch(false)}
              className="border-[4px] border-[#454545] bg-[#0F0F10] p-6 relative flex flex-col group select-none shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden"
            >
              {/* Corner Glitch / Decorative Bracket Elements */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF3B30]/40" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FF3B30]/40" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FF3B30]/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FF3B30]/40" />

              {/* Status Badge */}
              <div className="absolute top-6 right-6 z-20">
                <span className="font-mono text-xs bg-[#FF3B30] text-black px-3 py-1 font-extrabold tracking-widest uppercase animate-pulse shadow-[0_0_10px_rgba(255,59,48,0.4)]">
                  TBD
                </span>
              </div>

              {/* Holographic / Wireframe Canvas Area */}
              <div className="aspect-square bg-[#070708] border-2 border-[#454545] relative overflow-hidden flex items-center justify-center p-8 group">
                {/* Rotating holographic grids */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f22_1px,transparent_1px),linear-gradient(to_bottom,#1f1f22_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                
                {/* Animated rotating concentric shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-4/5 h-4/5 rounded-full border border-dashed border-[#FF3B30]/20 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-3/4 h-3/4 rounded-full border border-dashed border-[#F2A900]/30 flex items-center justify-center"
                  />
                </motion.div>

                {/* Main Glitch/Interactive Core Graphic */}
                <div className="relative text-center z-10 transition-transform duration-300 group-hover:scale-105">
                  <div className="text-display text-7xl font-extrabold tracking-widest text-[#E2E2E2]/10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    NFT
                  </div>
                  
                  <Layers className={`w-20 h-20 mx-auto transition-colors duration-300 ${
                    glitch ? "text-[#FF3B30]" : "text-[#454545] group-hover:text-[#F2A900]"
                  }`} />
                  
                  <p className="font-mono text-[10px] text-[#6978a0] tracking-widest mt-4 uppercase">
                    Hologram Placeholder
                  </p>
                </div>

                {/* Scanline Effect overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%]" />
              </div>

              {/* Bottom NFT Name & Creator */}
              <div className="mt-5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-[#6978a0] tracking-wider uppercase">// PROJECT REGRET</span>
                  <span className="font-mono text-[10px] text-[#FF3B30] bg-[#FF3B30]/10 px-2 py-0.5 border border-[#FF3B30]/20">UNRELEASED</span>
                </div>
                <h3 className="text-display text-lg text-[#E2E2E2] font-black uppercase tracking-tight">
                  TBD GENERATIVE MINTS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Specific Metadata & Utilities (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Metadata Status Panel */}
            <div className="border-[4px] border-[#454545] bg-[#0A0A0B]/60 p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#454545] pb-4">
                <Sparkles className="w-5 h-5 text-[#F2A900]" />
                <h4 className="font-mono text-xs text-[#E2E2E2] font-bold uppercase tracking-widest">
                  CONTRACT PARAMS & METADATA
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="space-y-3 md:col-span-6">
                  {mockMetadata.map((meta, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-[#1E1E20] pb-2 font-mono text-xs">
                      <span className="text-[#6978a0] tracking-wider">{meta.label}</span>
                      <span className="text-[#E2E2E2] font-bold tracking-tight text-right">{meta.value}</span>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-6 space-y-3 border-t md:border-t-0 md:border-l border-[#454545] pt-4 md:pt-0 md:pl-6">
                  <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase block mb-2 font-black">// UTILITY VALUES</span>
                  <ul className="space-y-2 font-mono text-xs text-[#E2E2E2]">
                    {utilities.map((util, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#E2E2E2]/90">
                        <span className="text-[#FF3B30] font-black">•</span>
                        <span className="uppercase tracking-tight">{util}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Emotional Rarity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-[#1E1E20]"
        >
          <div className="mb-10">
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase block mb-2 font-black">
              // EMOTIONAL METRICS
            </span>
            <h3 className="text-display text-2xl md:text-3xl text-[#E2E2E2] font-extrabold uppercase tracking-tight">
              RARITY TIED TO EMOTIONS
            </h3>
            <p className="font-mono text-xs text-[#6978a0] leading-relaxed max-w-2xl mt-2">
              Every item in the collection is dynamically minted with a unique rarity class corresponding to the psychological states of the modern degenerate trader.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emotionalRarities.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-[#454545] bg-[#0F0F10] p-5 relative overflow-hidden group hover:border-[#FF3B30]/50 transition-all duration-300"
              >
                {/* Micro corner highlight */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-[#FF3B30] transition-colors" />
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl select-none filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] py-1">
                    {item.emoji}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-mono text-xs text-white font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                      {item.label}
                      <span className="text-[8px] px-1 py-0.2 border border-[#454545] text-[#6978a0] group-hover:text-white group-hover:border-[#FF3B30]/30 transition-colors">
                        CLASS-{idx + 1}
                      </span>
                    </h4>
                    <p className="font-mono text-[11px] text-[#6978a0] leading-normal group-hover:text-[#E2E2E2]/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Warning Footer Accent */}
        <div className="mt-12 border-2 border-dashed border-[#FF3B30]/30 bg-[#FF3B30]/5 p-4 flex items-center gap-4">
          <HelpCircle className="w-5 h-5 text-[#FF3B30] shrink-0" />
          <p className="font-mono text-xs text-[#E2E2E2]/80 leading-relaxed">
            <span className="text-[#FF3B30] font-extrabold">DISCLAIMER:</span> Project REGRET NFTs are currently under conceptual evaluation. No contracts are deployed. Any announcement claiming an active mint is a malicious fraud. Live safely, trade carefully, protect your wallets.
          </p>
        </div>

      </div>
      <div className="heavy-rule" />
    </section>
  );
}
