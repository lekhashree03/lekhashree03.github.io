// src/components/badge.jsx
import React from 'react';

export function Badge({ children, className = '' }) {
  return (
    <span
      className={
        `inline-block bg-blue-100 text-blue-800 
         px-3 py-1 rounded-full text-sm font-medium 
         ${className}`
          .replace(/\s+/g, ' ')
          .trim()
      }
    >
      {children}
    </span>
  );
}
