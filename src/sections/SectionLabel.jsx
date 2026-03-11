import React from 'react';

export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="glow-dot" />
      <span className="font-mono text-xs md:text-sm text-indigo-200 drop-shadow-lg tracking-[0.2em] uppercase">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
    </div>
  );
}
