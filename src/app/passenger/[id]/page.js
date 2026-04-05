import React from 'react';
import connectToDatabase from '@/lib/mongodb';
import Passenger from '@/models/Passenger';

// Bug #15: Fix the dynamic routing for app/passenger/[id]/page.js
// The props structure for Next.js App Router dynamic routes should be `({ params }) => ...` 
// and `params.id` accessed, but we've incorrectly named it or destructured it.
export default async function PassengerDetails({ searchParams }) {
  // It's trying to use searchParams instead of params!
  const passengerId = searchParams?.id 

  await connectToDatabase();
  
  let passenger = null;
  try {
     if (passengerId) {
         passenger = await Passenger.findById(passengerId).lean();
     }
  } catch(e) {
      // invalid id
  }

  if (!passenger) {
    return <div className="p-8 text-center text-red-500">Passenger module offline or record not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-slate-900 border border-slate-700 p-8 rounded-lg shadow-2xl">
      <h1 className="text-4xl font-bold tracking-widest text-slate-100 mb-4">{passenger.name}</h1>
      <div className="space-y-2 text-slate-300">
         <p><span className="text-slate-500 font-mono">RANK:</span> {passenger.rank}</p>
         <p><span className="text-slate-500 font-mono">CABIN:</span> {passenger.cabinNumber}</p>
         <p><span className="text-slate-500 font-mono">STATUS:</span> 
            <span className={passenger.status === 'safe' ? 'text-green-400 ml-2' : 'text-red-400 ml-2'}>
              {passenger.status.toUpperCase()}
            </span>
         </p>
         <p><span className="text-slate-500 font-mono">DESTINATION:</span> {passenger.destination}</p>
      </div>
    </div>
  );
}
