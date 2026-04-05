import React from 'react';
import SystemCard from '@/components/SystemCard';
import connectToDatabase from '@/lib/mongodb';
import ShipSystem from '@/models/ShipSystem';

export default async function LifeSupportDashboard() {
  await connectToDatabase();
  const systems = await ShipSystem.find({}).lean();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-4">Life Support & Systems</h1>
      <p className="text-slate-400">Manage critical ship functions below.</p>

      {/* Bug #1: CSS Grid overlapping. Setting negative margins or bad grid areas */}
      {/* Intentionally broken Grid: block display instead of grid, or grid with overlapping columns */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_-10px_1fr] -space-x-8">
        {systems.map((sys) => (
          <SystemCard key={sys._id.toString()} system={JSON.parse(JSON.stringify(sys))} />
        ))}
      </div>
    </div>
  );
}
