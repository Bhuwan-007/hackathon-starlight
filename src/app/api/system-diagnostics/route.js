import connectToDatabase from '@/lib/mongodb';
import SecurityLog from '@/models/SecurityLog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Bug #24: Optimize the Diagnostics Array
    // This query is extremely unoptimized, it loads ALL logs, 
    // sorts them in memory, and then just picks a random one.
    // Participants should optimize this using MongoDB indices and proper .sort().limit() at DB level.
    
    const allLogs = await SecurityLog.find();
    
    // Artificial lag to simulate the unoptimized db query
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const sorted = allLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const recentThreat = sorted[0];

    return NextResponse.json({ diagnostics: 'Optimal', recentThreat });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
