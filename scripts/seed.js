import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Adjust path due to ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Assuming models are compiled as ES modules or we can redefine schema for seed
import Passenger from '../src/models/Passenger.js';
import ShipSystem from '../src/models/ShipSystem.js';
import SecurityLog from '../src/models/SecurityLog.js';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define MONGODB_URI in .env.local");
  process.exit(1);
}

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB.');

    // Clear existing
    await Passenger.deleteMany({});
    await ShipSystem.deleteMany({});
    await SecurityLog.deleteMany({});

    // Seed Passengers with duplicates (Bug #12 - Purge Clone Records)
    const passengers = [
      { name: 'Lyra Erso', rank: 'Captain', cabinNumber: 'A1', status: 'safe', destination: 'Coruscant', isVIP: true },
      { name: 'Kaelen', rank: 'Engineer', cabinNumber: 'B4', status: 'missing', destination: 'Alderaan', isVIP: false },
      { name: 'R2-D2', rank: 'Astromech', cabinNumber: 'Cargo-1', status: 'safe', destination: 'N/A', isVIP: false },
      { name: 'Lyra Erso', rank: 'Captain', cabinNumber: 'A1', status: 'safe', destination: 'Coruscant', isVIP: true }, // DUPLICATE
    ];
    await Passenger.insertMany(passengers);

    // Seed Systems (Bug #11 - Missing powerLevel for one system to trigger 500)
    const systems = [
      { name: 'Life Support', status: 'online', powerLevel: 85, assignedDroid: 'R2-D2' },
      { name: 'Hyperdrive', status: 'offline', powerLevel: 0, assignedDroid: 'T3-M4' },
      { name: 'Navicomputer', status: 'critical', powerLevel: 15, assignedDroid: null },
      { name: 'Reactor Core', status: 'online', assignedDroid: 'R5-D4' } // MISSING powerLevel
    ];
    await ShipSystem.insertMany(systems);

    // Seed a bunch of Security Logs for Pagination bug
    const logs = [];
    for (let i = 0; i < 50; i++) {
        logs.push({
            event: i % 5 === 0 ? 'Unauthorized Access Attempt' : 'Routine Scan',
            accessLevelRequired: i % 5 === 0 ? 5 : 1,
            success: i % 5 !== 0,
            sourceIP: `192.168.1.${i % 10}`,
            timestamp: new Date(Date.now() - i * 1000 * 60 * 60 * 24)
        });
    }
    await SecurityLog.insertMany(logs);

    console.log('Database seeded successfully! (With intentional bugs)');
    process.exit(0);

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
