'use client';

import React, { useState } from 'react';
import CriticalIndicator from './CriticalIndicator';

export default function SystemCard({ system }) {
  const [status, setStatus] = useState(system.status);

  // Bug #14: Restart Button requires double-click due to stale closure/bad state handling
  const handleRestart = () => {
    if (status !== 'offline') {
      setStatus('offline');
    }
    if (status === 'offline') {
      setStatus('online');
    }
  };

  // Bug #11: Defensive checks. powerLevel might be entirely missing/undefined due to seed data.
  // We call .toFixed(0) which throws a TypeError: Cannot read properties of undefined (reading 'toFixed') resulting in a 500 render crash.
  const powerGraph = system.powerLevel.toFixed(0);

  return (
    <div className={`p-4 rounded border shadow-md ${status === 'critical' ? 'bg-red-950 border-red-800' : 'bg-slate-800 border-slate-700'}`}>
      <h3 className="text-xl font-bold text-slate-100 mb-2">{system.name}</h3>
      <div className="flex justify-between text-sm mb-4">
        <span className="text-slate-400">Power: {powerGraph}%</span>
        <span className="text-slate-400">Assigned: {system.assignedDroid || 'None'}</span>
      </div>
      
      <CriticalIndicator isCritical={status === 'critical'} />

      <div className="mt-4 flex gap-2">
        <button 
          onClick={handleRestart}
          className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-xs text-white"
        >
          Restart System
        </button>
      </div>
    </div>
  );
}
