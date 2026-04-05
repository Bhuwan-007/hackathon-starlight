import React from 'react';

// Bug #2: Typo in the name of the Comm Relay. 'ComunicationRelay'
export default function ComunicationRelay() {
  return (
    <div className="bg-slate-800 p-6 rounded-md shadow-lg border border-slate-700 mt-6">
      <h2 className="text-lg font-semibold text-slate-100 mb-2 mt-0">Communication Relay</h2>
      <p className="text-slate-400 text-sm mb-4">
        Long-range sensors detect an incoming transmission...
      </p>
      
      {/* Bug #10: SOS Distress Beacon Form missing (Build a form component) */}
      <div className="p-4 border border-blue-900 bg-blue-950 rounded text-center">
        <p className="text-blue-300 text-xs uppercase tracking-wider mb-2">Emergency Channel Open</p>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded hover:bg-slate-600 disabled:opacity-50">
          Transmit Distress Signal
        </button>
      </div>
    </div>
  );
}
