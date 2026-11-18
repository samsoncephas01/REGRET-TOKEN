/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  declare state: ErrorBoundaryState;
  declare props: Readonly<ErrorBoundaryProps>;
  declare setState: (state: ErrorBoundaryState) => void;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message || "Unexpected error loading stories.",
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="bg-[#0A0A0B] px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-3xl mx-auto border-[3px] border-[#FF3B30] bg-[#0F0F10] p-6 md:p-8 space-y-4 font-mono">
            <div className="flex items-center gap-2 text-[#FF3B30] text-xs font-bold uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>STORY WALL TEMPORARILY UNAVAILABLE</span>
            </div>
            <p className="text-xs text-[#E2E2E2]/80 leading-relaxed">
              We hit an error while syncing stories. Please reload or try again in a moment.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, errorMessage: null })}
              className="inline-flex items-center gap-2 bg-[#FF3B30] hover:bg-[#CC2F26] text-black font-bold text-xs uppercase px-4 py-2.5 tracking-wider cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              RETRY
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
