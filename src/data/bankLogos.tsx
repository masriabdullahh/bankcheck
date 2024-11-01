import React from 'react';

export const bankLogos = {
  mercury: (isDark: boolean) => (
    <img src="src/images/mercury-bank-logo.png" />
  ),
  wise: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#50B0B9' : '#00B9FF'} />
      <path d="M12 6l-4 6h8l-4-6zM8 13l4 6 4-6H8z" fill="white" />
    </svg>
  ),
  relay: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#2D2D2D' : '#000000'} />
      <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" />
    </svg>
  ),
  payoneer: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#D14836' : '#FF4B4B'} />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  ),
  revolut: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#2D2D2D' : '#191C1F'} />
      <path d="M8 8h8v8H8z" fill="white" />
    </svg>
  ),
  slash: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#6366F1' : '#4F46E5'} />
      <path d="M16 8L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  graph: (isDark: boolean) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill={isDark ? '#2D2D2D' : '#000000'} />
      <path d="M8 16l3-3 2 2 3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};