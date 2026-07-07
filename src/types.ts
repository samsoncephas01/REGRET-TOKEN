/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Confession {
  id: string;
  text: string;
  timestamp: string;
  amountSol: number;
  regretReceived: number;
  hash: string;
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  balanceSol: number;
}

export interface TickerMessage {
  text: string;
}
