import React from 'react';

export const bankLogos = {
  mercury: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="src/images/mercury-bank-logo.png" alt="mercury-bank-logo" />
    </div>
  ),
  wise: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 " fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#50B0B9' : '#00B9FF'} />
      <path d="M12 6l-4 6h8l-4-6zM8 13l4 6 4-6H8z" fill="white" />
    </svg>
  ),
  relay: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="src/images/relayfi.png" alt="relay-logo" />
    </div>
  ),
  payoneer: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="src/images/payoneer.svg" alt="payoneer-logo" />
    </div>
  ),
  revolut: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="src/images/Revolut-Logo.png" alt="payoneer-logo" />
    </div>
  ),
  slash: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="src/images/slash.png" alt="payoneer-logo" />
    </div>
  ),
  graph: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="src/images/graph.png" alt="payoneer-logo" />
    </div>
  )
};