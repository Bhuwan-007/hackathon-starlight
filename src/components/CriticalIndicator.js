import React from 'react';

export default function CriticalIndicator({ isCritical }) {
  if (!isCritical) return null;

  return (
    // Bug #4: Blinks green instead of red during a system failure.
    <div className="mt-2 text-xs font-bold uppercase tracking-widest text-[#00ffcc] animate-pulse">
      ⚠️ CRITICAL FAILURE ⚠️
    </div>
  );
}
