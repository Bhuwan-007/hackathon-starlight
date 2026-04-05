import React from 'react';
import ComunicationRelay from '@/components/CommunicationRelay';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-bold text-slate-100">Command Dashboard</h1>
        {/* Bug #9: React Hydration Error. Rendering a random/dynamic value on the server vs client causes a hydration mismatch */}
        <p className="text-slate-400 text-sm font-mono mt-1">Holonet Sync Timestamp: {new Date().getTime()}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-200">Passenger Manifest</h2>
            <p className="text-slate-400 text-sm mb-4">
               The passenger manifest API is offline. Engineering must implement a GET route to retrieve passenger records and add a client-side search.
            </p>
            {/* Bug #8: Implement search filter */}
            <input type="text" placeholder="Search manifest... (Requires backend patch)" className="w-full bg-slate-800 border border-slate-600 p-2 rounded text-slate-300" disabled />
         </div>

         <ComunicationRelay />
      </div>
    </div>
  );
}
