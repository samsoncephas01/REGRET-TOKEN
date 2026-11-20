/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div className="bg-[#0A0A0B] min-h-screen flex flex-col selection:bg-[#FF3B30] selection:text-[#0A0A0B] relative">
      {/* Fixed Navigation Head */}
      <Navbar />

      {/* Main Story Wall */}
      <main className="relative flex-1">
        <ErrorBoundary>
          <Terminal />
        </ErrorBoundary>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
