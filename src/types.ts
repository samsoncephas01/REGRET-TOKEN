/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Story {
  id: string;
  author: string;
  text: string;
  createdAt: Date | null;
}

export interface TickerMessage {
  text: string;
}
