'use client';

import React from 'react';

export default function SecurityLogTable({ logs }) {
  // Bug #6: Sort order is ascending instead of descending. Newest threats should be first.
  const sortedLogs = [...logs].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  // Bug #13: Missing Pagination! Loads all logs at once causing terminal freezing.
  // Participants should implement state for currentPage and itemsPerPage.

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 shadow-xl">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-800 text-xs uppercase text-slate-400">
          <tr>
            <th className="px-6 py-3 border-b border-slate-700">Timestamp</th>
            <th className="px-6 py-3 border-b border-slate-700">Event</th>
            <th className="px-6 py-3 border-b border-slate-700">Clearance</th>
            <th className="px-6 py-3 border-b border-slate-700">Source IP</th>
            <th className="px-6 py-3 border-b border-slate-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedLogs.map((log, idx) => (
            <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50">
              <td className="px-6 py-4">{new Date(log.timestamp).toLocaleString()}</td>
              <td className="px-6 py-4 font-medium">{log.event}</td>
              <td className="px-6 py-4 text-center">{log.accessLevelRequired}</td>
              <td className="px-6 py-4 font-mono text-xs">{log.sourceIP}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-xs ${log.success ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                  {log.success ? 'Granted' : 'Denied'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
