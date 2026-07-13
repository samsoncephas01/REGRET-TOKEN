/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldAlert } from "lucide-react";
import logoImg from "../assets/images/logo_header_1782936219270.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Use a small timeout to allow the menu collapse transition to begin and state to update.
    // This prevents mobile browsers from aborting the smooth-scroll due to instant layout changes.
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#454545]/40 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo Branding */}
        <a
          href="#"
          id="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center text-display text-2xl text-[#E2E2E2] hover:text-[#FF3B30] transition-colors focus:outline-none tracking-tighter group"
        >
          <img
            src={logoImg}
            alt="$REGRET Logo"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#FF3B30]/40 shadow-[0_0_15px_rgba(255,59,48,0.3)] object-cover group-hover:scale-110 group-hover:border-[#FF3B30] transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Menu Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <button
            id="nav-btn-narrative"
            onClick={() => scrollToSection("narrative")}
            className="font-mono text-xs tracking-[0.2em] text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors focus:outline-none cursor-pointer"
          >
            NARRATIVE
          </button>
          <button
            id="nav-btn-tokenomics"
            onClick={() => scrollToSection("tokenomics")}
            className="font-mono text-xs tracking-[0.2em] text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors focus:outline-none cursor-pointer"
          >
            TOKENOMICS
          </button>
          <button
            id="nav-btn-charity"
            onClick={() => scrollToSection("charity")}
            className="font-mono text-xs tracking-[0.2em] text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors focus:outline-none cursor-pointer"
          >
            CHARITY
          </button>
          <button
            id="nav-btn-regretday"
            onClick={() => scrollToSection("world-regret-day")}
            className="font-mono text-xs tracking-[0.2em] text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors focus:outline-none cursor-pointer"
          >
            REGRET DAY
          </button>
          <button
            id="nav-btn-nft"
            onClick={() => scrollToSection("regret-nft")}
            className="font-mono text-xs tracking-[0.2em] text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors focus:outline-none cursor-pointer"
          >
            REGRET NFT
          </button>
          <button
            id="nav-btn-roadmap"
            onClick={() => scrollToSection("roadmap")}
            className="font-mono text-xs tracking-[0.2em] text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors focus:outline-none cursor-pointer"
          >
            ROADMAP
          </button>
          <button
            id="nav-btn-buy"
            onClick={() => scrollToSection("terminal")}
            className="font-mono text-xs tracking-[0.2em] text-[#FF3B30] hover:text-[#E2E2E2] font-semibold transition-colors focus:outline-none cursor-pointer"
          >
            CONFESSION WALL
          </button>
        </div>

        {/* Mobile Hamburger Control */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E2E2E2] hover:text-[#FF3B30] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0F0F10] border-b border-[#454545] overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8 font-mono">
              <button
                id="mob-nav-narrative"
                onClick={() => scrollToSection("narrative")}
                className="text-left text-sm tracking-widest text-[#E2E2E2]/70 hover:text-[#FF3B30] transition-colors py-1"
              >
                // NARRATIVE
              </button>
              <button
                id="mob-nav-tokenomics"
                onClick={() => scrollToSection("tokenomics")}
                className="text-left text-sm tracking-widest text-[#E2E2E2]/70 hover:text-[#FF3B30] transition-colors py-1"
              >
                // TOKENOMICS
              </button>
              <button
                id="mob-nav-charity"
                onClick={() => scrollToSection("charity")}
                className="text-left text-sm tracking-widest text-[#E2E2E2]/70 hover:text-[#FF3B30] transition-colors py-1"
              >
                // CHARITY
              </button>
              <button
                id="mob-nav-regretday"
                onClick={() => scrollToSection("world-regret-day")}
                className="text-left text-sm tracking-widest text-[#E2E2E2]/70 hover:text-[#FF3B30] transition-colors py-1"
              >
                // REGRET DAY
              </button>
              <button
                id="mob-nav-nft"
                onClick={() => scrollToSection("regret-nft")}
                className="text-left text-sm tracking-widest text-[#E2E2E2]/70 hover:text-[#FF3B30] transition-colors py-1"
              >
                // REGRET NFT
              </button>
              <button
                id="mob-nav-roadmap"
                onClick={() => scrollToSection("roadmap")}
                className="text-left text-sm tracking-widest text-[#E2E2E2]/70 hover:text-[#FF3B30] transition-colors py-1"
              >
                // ROADMAP
              </button>
              <button
                id="mob-nav-terminal"
                onClick={() => scrollToSection("terminal")}
                className="text-left text-sm tracking-widest text-[#FF3B30] hover:text-white transition-colors py-1 font-bold"
              >
                // CONFESSION WALL
              </button>
              
              <div className="flex items-center gap-2 text-[10px] text-[#454545] justify-center mt-2">
                <ShieldAlert className="w-3 h-3" />
                <span>MEME COIN SPECULATION ONLY</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
