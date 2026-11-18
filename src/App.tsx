/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Narrative from "./components/Narrative";
import Motto from "./components/Motto";
import Ticker from "./components/Ticker";
import Roadmap from "./components/Roadmap";
import WorldRegretDay from "./components/WorldRegretDay";
import RegretNFT from "./components/RegretNFT";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div className="bg-[#0A0A0B] min-h-screen selection:bg-[#FF3B30] selection:text-[#0A0A0B] relative">
      
      {/* Fixed Navigation Head */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative">
        <Hero />
        <Narrative />
        <Motto />
        <Ticker />
        <WorldRegretDay />
        <RegretNFT />
        <Roadmap />
        <ErrorBoundary>
          <Terminal />
        </ErrorBoundary>
      </main>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}
