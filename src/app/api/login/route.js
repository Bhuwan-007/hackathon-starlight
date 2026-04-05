import connectToDatabase from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import SecurityLog from '@/models/SecurityLog';

export async function POST(req) {
  try {
    await connectToDatabase();
    // Intentionally vulnerable to Mass Assignment (Bug #22) and NoSQL Injection (Bug #20)
    const body = await req.json();
    const { username, password } = body;

    // The vulnerability: if password is an object like {"$gte": ""}, it will match!
    let query = { name: username, destination: password };

    // Fake simulation of auth using Passenger table for simplicity
    const Passenger = (await import('@/models/Passenger')).default;
    const user = await Passenger.findOne(query);

    if (user) {
      await SecurityLog.create({ event: `Successful login by ${username}`, success: true });
      return NextResponse.json({ success: true, user });
    }

    await SecurityLog.create({ event: `Failed login attempt for ${username}`, success: false });
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
