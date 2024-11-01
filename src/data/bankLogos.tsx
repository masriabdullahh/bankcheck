import React from 'react';

export const bankLogos = {
  mercury: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/mercury-bank-logo.png" alt="mercury-bank-logo" />
    </div>
  ),
  wise: (isDark: boolean) => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/relayfi.png" alt="relay-logo" />
    </div>
  ),
  relay: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/Wise-Logo.png" alt="wise-logo" />
    </div>
  ),
  payoneer: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/payoneer.svg" alt="payoneer-logo" />
    </div>
  ),
  revolut: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/Revolut-Logo.png" alt="payoneer-logo" />
    </div>
  ),
  slash: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/slash.png" alt="payoneer-logo" />
    </div>
  ),
  graph: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="images/graph.png" alt="payoneer-logo" />
    </div>
  )
};