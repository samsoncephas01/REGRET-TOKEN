/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TickerMessage } from "../types";

export default function Ticker() {
  const tickerPhrases: TickerMessage[] = [
    { text: "TOKENIZING BAD DECISIONS" },
    { text: "EVERY WALLET HAS REGRET" },
    { text: "THE ONLY COIN EVERYONE WISHES THEY BOUGHT SOONER" },
    { text: "BUY NOW. REGRET LATER." },
    { text: "YOUR BIGGEST BAG HAS ALWAYS BEEN REGRET" },
    { text: "NO ALPHA. ONLY HINDSIGHT." },
    { text: "EXIT LIQUIDITY FOR YOUR EMOTIONS" },
    { text: "POWERED BY FOMO" },
  ];

  // We duplicate the list to ensure seamless endless looping
  const combinedPhrases = [...tickerPhrases, ...tickerPhrases, ...tickerPhrases];

  return (
    <section id="ticker-banner" className="bg-[#0A0A0B] py-6 overflow-hidden border-y-[4px] border-[#454545]">
      <div className="flex animate-ticker whitespace-nowrap cursor-default select-none hover:[animation-play-state:paused] transition-all duration-300">
        {combinedPhrases.map((phrase, index) => (
          <span key={index} className="flex items-center shrink-0">
            <span className="text-display text-xs md:text-sm lg:text-base text-[#E2E2E2]/40 hover:text-[#FF3B30] uppercase tracking-widest px-6 md:px-10 transition-colors duration-200">
              {phrase.text}
            </span>
            <span className="w-2.5 h-2.5 bg-[#FF3B30] rounded-full shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
