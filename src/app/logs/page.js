import React from 'react';
import connectToDatabase from '@/lib/mongodb';
import SecurityLog from '@/models/SecurityLog';
import SecurityLogTable from '@/components/SecurityLogTable';

export default async function LogsPage() {
  await connectToDatabase();
  // Fetching all logs from DB to feed to the component.
  // The component itself is missing pagination.
  const logs = await SecurityLog.find({}).lean();
  
  // Need to parse to simple objects for Next.js Server->Client component serialization
  const serializedLogs = logs.map(l => ({
     ...l,
     _id: l._id.toString(),
     timestamp: l.timestamp.toISOString()
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-4">Central Security Logs</h1>
      <p className="text-slate-400">Monitoring all automated terminal accesses and organic interactions.</p>
      
      <SecurityLogTable logs={serializedLogs} />
    </div>
  );
}
