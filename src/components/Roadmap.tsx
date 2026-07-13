import React from "react";
import { motion } from "motion/react";
import { Users, Coins, Layers, Rocket, HeartHandshake, Compass, ArrowRight, ShieldAlert } from "lucide-react";

interface RoadmapStep {
  phase: string;
  title: string;
  items: string[];
  icon: React.ComponentType<any>;
  color: string;
  glowColor: string;
}

export default function Roadmap() {
  const journey: RoadmapStep[] = [
    {
      phase: "Phase 1",
      title: "Community",
      items: [
        "Build the community",
        "Viral memes",
        "Crypto confession campaigns",
        "X Spaces and partnerships"
      ],
      icon: Users,
      color: "#FF3B30", // Red
      glowColor: "rgba(255, 59, 48, 0.2)"
    },
    {
      phase: "Phase 2",
      title: "Token",
      items: [
        "Token launch",
        "Liquidity pool locked",
        "DEX & CEX Listings",
        "Sustained community growth"
      ],
      icon: Coins,
      color: "#F2A900", // Gold
      glowColor: "rgba(242, 169, 0, 0.2)"
    },
    {
      phase: "Phase 3",
      title: "Ecosystem",
      items: [
        "Exclusive NFT collection",
        "Creator collaborations",
        "Direct community rewards",
        "Global ambassador program"
      ],
      icon: Layers,
      color: "#00E676", // Mint Green
      glowColor: "rgba(0, 230, 118, 0.2)"
    },
    {
      phase: "Phase 4",
      title: "Redemption",
      items: [
        "REGRET Redemption Launchpad",
        "Curated founder launches",
        "Community vetting system",
        "Creator fundraising platform"
      ],
      icon: Rocket,
      color: "#9333EA", // Purple
      glowColor: "rgba(147, 51, 234, 0.2)"
    },
    {
      phase: "Phase 5",
      title: "Impact",
      items: [
        "Charity initiatives & support",
        "Real-world partnerships",
        "Global community events",
        "Long-term ecosystem growth"
      ],
      icon: HeartHandshake,
      color: "#38BDF8", // Sky Blue
      glowColor: "rgba(56, 189, 248, 0.2)"
    }
  ];

  return (
    <section id="roadmap" className="bg-[#0A0A0B] relative overflow-hidden py-16 md:py-24">
      {/* Brutalist heavy rule dividing sections */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#1E1E20]" />
      
      {/* Interactive background noise elements */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#FF3B30]/5 rounded-full filter blur-[100px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#38BDF8]/5 rounded-full filter blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        
        {/* Header Title Block */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase block mb-3 font-black">
              // EVOLUTION & EXPANSION
            </span>
            <h2 className="text-display text-4xl md:text-5xl text-white font-extrabold tracking-tight uppercase">
              THE <span className="text-[#FF3B30]">REGRET</span> JOURNEY
            </h2>
            <p className="font-mono text-sm text-[#6978a0] max-w-2xl mt-4 leading-relaxed">
              We aren't presenting empty promises or a pre-destined timeline. This is our strategic blueprint for turning trading grief, hindsight, and shared memories into the most culturally-rich community on Solana.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 border border-[#454545] px-4 py-2 bg-[#0F0F10] rounded-sm text-xs font-mono text-[#6978a0]">
            <Compass className="w-4 h-4 text-[#FF3B30] animate-spin-slow" />
            <span>ESTABLISHED ROADMAP v1.4</span>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Timeline Center/Side backbone line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[3px] bg-[#1E1E20] border-l border-dashed border-[#454545]/40" />

          {/* Cards container */}
          <div className="space-y-12 md:space-y-16">
            {journey.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet badge */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 md:top-6 z-10">
                    <div 
                      className="w-10 h-10 rounded-full bg-[#0A0A0B] border-[3px] flex items-center justify-center transition-all duration-300 shadow-lg group"
                      style={{ 
                        borderColor: step.color,
                        boxShadow: `0 0 15px ${step.glowColor}`
                      }}
                    >
                      <StepIcon className="w-4 h-4" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Card wrapper */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div 
                      className="border-[3px] border-[#454545] bg-[#0F0F10]/95 hover:bg-[#0A0A0B] p-6 md:p-8 relative transition-all duration-300 hover:border-white/30 group"
                      style={{
                        boxShadow: `hover:0 10px 30px -10px ${step.glowColor}`
                      }}
                    >
                      {/* Corner accents */}
                      <div className="absolute top-[-3px] right-[-3px] w-3 h-3 border-t-[3px] border-r-[3px] border-transparent group-hover:border-[#FF3B30] transition-colors duration-300" />
                      <div className="absolute bottom-[-3px] left-[-3px] w-3 h-3 border-b-[3px] border-l-[3px] border-transparent group-hover:border-[#FF3B30] transition-colors duration-300" />

                      {/* Phase flag */}
                      <div className="flex items-center justify-between mb-4">
                        <span 
                          className="font-mono text-xs font-black tracking-widest uppercase border px-2.5 py-0.5 rounded-sm"
                          style={{
                            color: step.color,
                            borderColor: `${step.color}30`,
                            backgroundColor: `${step.color}05`
                          }}
                        >
                          {step.phase}
                        </span>
                        <span className="font-mono text-[10px] text-[#454545]">
                          [ACTIVE_GOALS]
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-display text-2xl text-[#E2E2E2] font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>

                      {/* Roadmap Items */}
                      <ul className="space-y-3 font-mono text-xs text-[#6978a0]">
                        {step.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 group-hover:text-[#E2E2E2] transition-colors duration-300">
                            <span className="text-[#FF3B30] mt-0.5 shrink-0 select-none">//</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty visual spacer column to balance on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Global Blueprint warning note below */}
        <div className="mt-20 border-2 border-[#1E1E20] bg-[#0F0F10] p-6 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="flex items-center gap-4">
            <ShieldAlert className="w-8 h-8 text-[#FF3B30]/80 shrink-0" />
            <div>
              <p className="font-mono text-xs text-[#E2E2E2] font-bold uppercase">
                COMMUNITY DRIVEN EVOLUTION & DEPLOYMENT BLUEPRINT
              </p>
              <p className="font-mono text-[11px] text-[#6978a0]">
                Plans are subject to voting, extreme emotional trading volatility, community consensus, and collective market sentiment.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("terminal");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-auto font-mono text-xs text-black bg-white hover:bg-[#FF3B30] hover:text-white px-5 py-3 font-extrabold transition-all duration-300 flex items-center justify-center gap-2 select-none active:scale-95"
          >
            JOIN THE MOVEMENT <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
