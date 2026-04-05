import connectToDatabase from '@/lib/mongodb';
import ShipSystem from '@/models/ShipSystem';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDatabase();
    
    // Bug #17: Missing JWT authentication block! This route should be restricted.
    // Participants need to add middleware / JWT check here.

    const body = await req.json();
    const { systemId, action, ...otherFields } = body;

    const system = await ShipSystem.findById(systemId);
    if (!system) {
        return NextResponse.json({ error: 'System not found' }, { status: 404 });
    }

    if (action === 'boost') {
        // Bug #19: Race condition!
        // A naive increment without pessimistic locking or $inc
        const currentPower = system.powerLevel || 0;
        system.powerLevel = currentPower + 10;
        await system.save();
    }

    // Bug #22: Mass assignment vulnerability!
    // Users can send random fields and we just apply them directly.
    Object.assign(system, otherFields);
    await system.save();

    return NextResponse.json({ success: true, system });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
