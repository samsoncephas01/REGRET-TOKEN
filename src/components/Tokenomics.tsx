/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Coins, Flame, ShieldCheck, Heart, Users, Landmark, HeartCrack } from "lucide-react";

interface TokenAllocation {
  value: number;
  label: string;
  subLabel: string;
  color: string;
  glowColor: string;
  icon: React.ComponentType<any>;
}

export default function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartAngle, setDragStartAngle] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<SVGGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    setDragStartAngle(angle - rotation);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGGElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    setRotation(angle - dragStartAngle);
  };

  const handleTouchStart = (e: React.TouchEvent<SVGGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const touch = e.touches[0];
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    setDragStartAngle(angle - rotation);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<SVGGElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const touch = e.touches[0];
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    setRotation(angle - dragStartAngle);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const allocations: TokenAllocation[] = [
    {
      value: 40,
      label: "Community & Growth",
      subLabel: "Marketing, partnerships, community rewards",
      color: "#F2A900", // Gold
      glowColor: "rgba(242, 169, 0, 0.4)",
      icon: Users,
    },
    {
      value: 20,
      label: "Liquidity",
      subLabel: "Locked liquidity for stability",
      color: "#00E676", // Mint Green
      glowColor: "rgba(0, 230, 118, 0.4)",
      icon: Flame,
    },
    {
      value: 15,
      label: "Treasury",
      subLabel: "Project development & operations",
      color: "#9333EA", // Purple/Violet
      glowColor: "rgba(147, 51, 234, 0.4)",
      icon: Landmark,
    },
    {
      value: 15,
      label: "Charity",
      subLabel: "Giving back to the community & global causes",
      color: "#FF3B30", // Red
      glowColor: "rgba(255, 59, 48, 0.4)",
      icon: Heart,
    },
    {
      value: 10,
      label: "Team",
      subLabel: "Core team & contributors (Locked on Streamflow for 3 months)",
      color: "#94A3B8", // Slate Gray
      glowColor: "rgba(148, 163, 184, 0.4)",
      icon: ShieldCheck,
    },
  ];

  // SVG parameters
  const radius = 70;
  const circumference = 2 * Math.PI * radius; // ~439.82

  let accumulatedPercent = 0;

  const footerTags = [
    "No Hype. Just Movement",
    "100% Transparency",
    "Locked LP Stability",
    "Real-World Impact",
    "Community Driven"
  ];

  return (
    <section id="tokenomics" className="bg-[#0A0A0B] relative overflow-hidden my-12 md:my-20">
      <div className="heavy-rule" />
      
      {/* Background Decorative Accent */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-radial from-[#FF3B30] to-transparent blur-3xl" />
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative z-10 py-24 md:py-32">
        
        {/* Title Block */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-display text-4xl md:text-5xl text-[#E2E2E2] mb-3 tracking-tighter uppercase font-extrabold"
          >
            4. TOKENOMICS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs text-[#6978a0] uppercase tracking-[0.3em]"
          >
            // Controlled allocation of momentum
          </motion.p>
        </div>

        {/* 2-Column Chart/Breakdown Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-[4px] border-[#454545] bg-[#0F0F10]/40 p-8 md:p-12">
          
          {/* Column 1: Custom SVG Donut Chart */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] select-none">
              
              {/* Dynamic SVG Donut */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform -rotate-90 origin-center transition-transform duration-500"
              >
                <defs>
                  {/* Metallic gold gradient for the center logo */}
                  <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE259" />
                    <stop offset="50%" stopColor="#FFA751" />
                    <stop offset="100%" stopColor="#FF8E53" />
                  </linearGradient>

                  {/* Dark inner shadows & subtle glows */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base background ring */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke="#1E1E20"
                  strokeWidth="16"
                />

                {/* Render Segment Paths */}
                {allocations.map((alloc, idx) => {
                  const dashOffset = circumference - (accumulatedPercent / 100) * circumference;
                  const dashArray = `${(alloc.value / 100) * circumference} ${circumference}`;
                  accumulatedPercent += alloc.value;

                  const isHovered = activeIndex === idx;

                  return (
                    <motion.circle
                      key={idx}
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke={alloc.color}
                      strokeWidth={isHovered ? 24 : 16}
                      strokeDasharray={dashArray}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="butt"
                      className="transition-all duration-300 cursor-pointer"
                      style={{
                        filter: isHovered ? `drop-shadow(0 0 8px ${alloc.glowColor})` : "none",
                        opacity: activeIndex === null || isHovered ? 1 : 0.4,
                      }}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: parseFloat(dashOffset.toString()) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
                    />
                  );
                })}

                {/* Central Donut Center Plate */}
                <g
                  transform="translate(100, 100)"
                  className={`${isDragging ? "cursor-grabbing" : "cursor-grab"} select-none`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleEnd}
                  onMouseLeave={handleEnd}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleEnd}
                  onTouchCancel={handleEnd}
                >
                  {/* Outer coin border */}
                  <circle r="46" fill="#0A0A0B" stroke="#454545" strokeWidth="2" />
                  
                  {/* Textured circle */}
                  <circle r="41" fill="#0F0F10" />

                  {/* Cracked glow indicator beneath R */}
                  <circle
                    r="36"
                    fill="none"
                    stroke={activeIndex !== null ? allocations[activeIndex].color : "#FF3B30"}
                    strokeWidth="1"
                    className="transition-colors duration-500 opacity-20"
                    style={{
                      filter: "blur(2px)",
                    }}
                  />

                  {/* Rotatable group wrapping the big R */}
                  <g transform={`rotate(${rotation})`} className="transition-transform duration-75">
                    {/* Big Metallic-Glow R letter in the middle */}
                    <text
                      x="0"
                      y="15"
                      textAnchor="middle"
                      className="font-extrabold select-none transition-all duration-300"
                      style={{
                        fontSize: "44px",
                        fill: activeIndex !== null ? allocations[activeIndex].color : "url(#goldMetallic)",
                        filter: `drop-shadow(0 0 10px ${
                          activeIndex !== null ? allocations[activeIndex].glowColor : "rgba(255, 167, 81, 0.4)"
                        })`,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      R
                    </text>
                  </g>
                </g>
              </svg>
            </div>

            {/* Allocation Text underneath Center */}
            <div className="text-center mt-6 h-6">
              {activeIndex !== null ? (
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-sm uppercase font-extrabold tracking-widest"
                  style={{ color: allocations[activeIndex].color }}
                >
                  {allocations[activeIndex].label}: {allocations[activeIndex].value}%
                </motion.p>
              ) : (
                <p className="font-mono text-xs text-[#6978a0] uppercase tracking-widest">
                  Hover chart segments or allocations
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Allocation Details List */}
          <div className="lg:col-span-7 space-y-4">
            {allocations.map((alloc, idx) => {
              const IconComponent = alloc.icon;
              const isHovered = activeIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`flex items-start md:items-center gap-4 p-4 border-2 transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "border-[#FF3B30] bg-[#1E1E20]/40 translate-x-2"
                      : "border-[#454545] bg-[#0A0A0B]/60 hover:border-[#6978a0]/60"
                  }`}
                  style={{
                    boxShadow: isHovered ? `0 0 15px ${alloc.glowColor}` : "none",
                  }}
                >
                  {/* Percentage Block */}
                  <div
                    className="font-mono text-2xl md:text-3xl font-extrabold select-none shrink-0 w-16 text-right"
                    style={{ color: alloc.color }}
                  >
                    {alloc.value}%
                  </div>

                  {/* Vertical separator line */}
                  <div className="w-[1px] h-10 bg-[#454545] hidden md:block shrink-0" />

                  {/* Icon indicator */}
                  <div className="p-2 border border-[#454545] bg-[#0A0A0B] text-white/80 shrink-0">
                    <IconComponent className="w-5 h-5" style={{ color: alloc.color }} />
                  </div>

                  {/* Details block */}
                  <div className="space-y-1">
                    <h4 className="text-display text-sm md:text-base text-white font-extrabold uppercase tracking-tight">
                      {alloc.label}
                    </h4>
                    <p className="font-mono text-[11px] md:text-xs text-[#6978a0]">
                      {alloc.subLabel}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Highlight footer tags */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
          {footerTags.map((tag, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, borderColor: "#FF3B30", scale: 1.02 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-[#454545] px-2 py-3 font-mono text-[9px] md:text-[10px] text-[#E2E2E2] uppercase tracking-widest text-center hover:text-[#E2E2E2] transition-colors duration-300 flex items-center justify-center gap-1 bg-[#0A0A0B]/40"
            >
              <HeartCrack className="w-3 h-3 text-[#FF3B30] shrink-0" />
              <span>{tag}</span>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="heavy-rule" />
    </section>
  );
}

