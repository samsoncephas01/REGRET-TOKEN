/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CornerDownRight, CheckCircle2, RefreshCw, Send, Sparkles, HeartCrack, Flame } from "lucide-react";
import { Confession } from "../types";

export default function Terminal() {
  const [fomoAmount, setFomoAmount] = useState<string>("1.0");
  const [regretAmount, setRegretAmount] = useState<string>("4,200,000,000");
  const [swapping, setSwapping] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [userConfession, setUserConfession] = useState<string>("");
  const [showConfessionBoard, setShowConfessionBoard] = useState<boolean>(true);

  // Initial Seed Confessions
  const [confessions, setConfessions] = useState<Confession[]>([
    {
      id: "1",
      text: "Sold 50,000,000 DOGE in 2019 to buy a second-hand Playstation 4.",
      timestamp: "3m ago",
      amountSol: 1.5,
      regretReceived: 6300000000,
      hash: "8xKj...9PqZ"
    },
    {
      id: "2",
      text: "Faded PEPE launch at $3M cap because 'it looked like high-tier slop'. Went 1000x.",
      timestamp: "12m ago",
      amountSol: 0.8,
      regretReceived: 3360000000,
      hash: "3vLm...k8Xy"
    },
    {
      id: "3",
      text: "Lost my 2013 laptop containing 12 BTC in a city landfill during a house move.",
      timestamp: "1h ago",
      amountSol: 10,
      regretReceived: 42000000000,
      hash: "1aWb...9Zz1"
    }
  ]);

  const logsEndRef = useRef<HTMLDivElement>(null);
  const rate = 4200000000; // 1 SOL = 4.2 Billion $REGRET

  // Scroll terminal logs to bottom
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Handle calculation
  const handleFomoChange = (val: string) => {
    setFomoAmount(val);
    const numeric = parseFloat(val);
    if (!isNaN(numeric) && numeric > 0) {
      const calculated = numeric * rate;
      setRegretAmount(calculated.toLocaleString());
    } else {
      setRegretAmount("0");
    }
  };

  const addLogWithDelay = (text: string, delay: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, text]);
        resolve();
      }, delay);
    });
  };

  const handleCommitConfession = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userConfession.trim()) return;

    setSwapping(true);
    setLogs([]);

    const solValue = parseFloat(fomoAmount) || 0.5;

    await addLogWithDelay("Initializing Remorse Handshake Logic...", 250);
    await addLogWithDelay("Connecting to global Decentralized Disappointment Matrix...", 350);
    await addLogWithDelay(`Filing emotional debt payload of approx. ${solValue} SOL...`, 400);
    await addLogWithDelay("Hashing regret footprint with zero-knowledge remorse algorithms...", 350);
    await addLogWithDelay(`Minting remorse weight of ${(solValue * rate).toLocaleString()} $REGRET to your conscious...`, 450);
    await addLogWithDelay("Consensus reached: Crypto regret logged successfully on the open wall ledger.", 300);

    setTimeout(() => {
      const newConfession: Confession = {
        id: Date.now().toString(),
        text: userConfession,
        timestamp: "Just now",
        amountSol: solValue,
        regretReceived: solValue * rate,
        hash: "reg_" + Math.random().toString(36).substring(2, 6).toUpperCase() + "..." + Math.random().toString(36).substring(2, 6).toUpperCase()
      };

      setConfessions([newConfession, ...confessions]);
      setUserConfession("");
      setSwapping(false);
      setLogs([]);
    }, 400);
  };

  return (
    <section id="terminal" className="relative bg-[#0A0A0B] px-6 md:px-16 lg:px-24 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Terminal Window */}
        <div className="border-[4px] border-[#454545] bg-[#0A0A0B] shadow-2xl relative overflow-hidden">
          
          {/* Terminal Window Header */}
          <div className="border-b-[4px] border-[#454545] px-6 py-4 flex items-center justify-between bg-[#0F0F10]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3.5 h-3.5 bg-[#FF3B30] border border-[#0A0A0B]" />
                <span className="w-3.5 h-3.5 bg-[#454545] border border-[#0A0A0B]" />
                <span className="w-3.5 h-3.5 bg-[#454545] border border-[#0A0A0B]" />
              </div>
              <span className="text-display text-sm md:text-base text-[#E2E2E2] tracking-widest font-bold uppercase ml-2">
                DECISION VOID CONFESS-O-TRON v3.0
              </span>
            </div>
            
            <div className="text-[10px] font-mono text-[#FF3B30] bg-red-950/20 px-3 py-1 border border-[#FF3B30]/30 rounded flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full" />
              <span>VOID CONNECTION ACTIVE</span>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-display text-2xl text-[#E2E2E2] tracking-tight font-extrabold uppercase">
                IMMORTALIZE YOUR CRYPTO DISAPPOINTMENT
              </h3>
              <p className="font-mono text-xs text-[#6978a0] leading-relaxed max-w-2xl">
                File your worst trade, missed launch, or early selling misery directly on our decentralized ledger wall. No wallets, no signups, no gas fees — just pure therapeutic emotional unloading.
              </p>
            </div>

            {/* FORM COMPONENT */}
            <form onSubmit={handleCommitConfession} className="space-y-6">
              
              {/* Confession Text Area */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#FF3B30] uppercase tracking-[0.2em] block font-bold">
                  // YOUR DEEPEST CRYPTO CONFESSION
                </label>
                <textarea
                  required
                  disabled={swapping}
                  value={userConfession}
                  onChange={(e) => setUserConfession(e.target.value)}
                  maxLength={250}
                  placeholder="e.g., Sold 50,000,000 DOGE in 2019 to buy a second-hand Playstation 4."
                  className="w-full bg-[#0F0F10] border-2 border-[#454545] focus:border-[#FF3B30] p-4 font-mono text-sm text-[#E2E2E2] h-28 focus:outline-none placeholder:text-[#454545] resize-none transition-colors"
                />
              </div>

              {/* Calculator Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0F0F10] p-4 border border-[#454545]/40">
                
                {/* Simulated SOL lost */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#6978a0] uppercase tracking-widest block font-bold">
                    ESTIMATED LOSS VALUE (SOL)
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    disabled={swapping}
                    value={fomoAmount}
                    onChange={(e) => handleFomoChange(e.target.value)}
                    className="w-full bg-[#0A0A0B] border border-[#454545] text-white font-mono text-sm px-3 py-2 focus:border-[#FF3B30] focus:outline-none placeholder:text-[#454545]"
                    placeholder="0.00"
                  />
                </div>

                {/* Simulated Regret generated */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#6978a0] uppercase tracking-widest block font-bold">
                    SIMULATED REMORSE VALUE ($REGRET)
                  </span>
                  <div className="w-full bg-[#0A0A0B] border border-[#454545] text-[#FF3B30] font-mono text-sm px-3 py-2 flex items-center select-none min-h-[38px] overflow-hidden">
                    {regretAmount}
                  </div>
                </div>

              </div>

              {/* Ticker rate note */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#6978a0]">
                <HeartCrack className="w-3.5 h-3.5 text-[#FF3B30] shrink-0" />
                <span>Exchange rate applies: 1 SOL of loss = 4,200,000,000 $REGRET generated on commit</span>
              </div>

              {/* LIVE CONSOLE LOGS */}
              {logs.length > 0 && (
                <div className="bg-[#050506] border-2 border-[#454545] p-4 font-mono text-xs text-[#E2E2E2]/80 space-y-2 max-h-[160px] overflow-y-auto rounded-none">
                  {logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#FF3B30] shrink-0 mt-0.5" />
                      <span>{log}</span>
                    </div>
                  ))}
                  <div ref={logsEndRef} />
                </div>
              )}

              {/* ACTION BUTTON */}
              <button
                type="submit"
                disabled={swapping || !userConfession.trim()}
                className={`w-full text-display text-lg md:text-xl py-5 transition-all duration-300 font-extrabold tracking-widest flex items-center justify-center gap-2 cursor-pointer select-none ${
                  swapping || !userConfession.trim()
                    ? "bg-[#454545] text-gray-500 cursor-not-allowed"
                    : "bg-[#FF3B30] hover:bg-[#CC2F26] text-[#0A0A0B] focus:outline-none focus:ring-4 focus:ring-[#FF3B30]"
                }`}
              >
                {swapping ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    ENCRYPTING EMOTIONS...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    COMMIT CRYPTO REMORSE TO THE VOID
                  </>
                )}
              </button>

            </form>

            <p className="font-mono text-center text-[10px] text-[#6978a0] tracking-wide select-none">
              * Committing confessions is completely free, secure, and permanent.
            </p>
          </div>
        </div>

        {/* INTERACTIVE CONFESSION LEDGER WALL */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowConfessionBoard(!showConfessionBoard)}
            className="font-mono text-xs uppercase text-[#6978a0] tracking-[0.25em] border border-[#454545] px-6 py-3 hover:border-[#FF3B30] hover:text-[#E2E2E2] transition-all bg-[#0F0F10] cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
            {showConfessionBoard ? "HIDE DECISION VOID WALL" : "VIEW DECENTRALIZED VOID WALL"}
          </button>

          <AnimatePresence>
            {showConfessionBoard && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 text-left space-y-4 max-w-2xl mx-auto overflow-hidden"
              >
                <div className="border border-[#454545] bg-[#0A0A0B] p-4 font-mono text-xs">
                  <div className="flex justify-between items-center border-b border-[#454545] pb-2 mb-4 text-[#6978a0] text-[10px]">
                    <span>MORTAL DEBT AND FOMO RECORD</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                      LIVE UPDATING REMORSE CONSENSUS
                    </span>
                  </div>

                  <div className="space-y-4 divide-y divide-[#454545]/40">
                    {confessions.map((confession) => (
                      <div key={confession.id} className="pt-3 first:pt-0">
                        <div className="flex flex-col sm:flex-row justify-between text-[9px] text-[#6978a0] mb-1.5 gap-1">
                          <span className="font-bold flex items-center gap-1 text-[#FF3B30]">
                            TX_HASH: {confession.hash}
                          </span>
                          <span>{confession.timestamp}</span>
                        </div>
                        <p className="text-[#E2E2E2] text-xs leading-relaxed italic mb-1.5">
                          "{confession.text}"
                        </p>
                        <div className="text-[10px] text-[#6978a0] flex gap-4 bg-[#0F0F10] px-3 py-1.5 w-fit border border-[#454545]/20">
                          <span className="flex items-center gap-1">
                            <Flame className="w-3 h-3 text-[#FF3B30]" />
                            Fomo: {confession.amountSol} SOL
                          </span>
                          <span>|</span>
                          <span>Remorse weight: {confession.regretReceived.toLocaleString()} $REGRET</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
