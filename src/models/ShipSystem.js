import mongoose from 'mongoose';

const ShipSystemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  status: { type: String, enum: ['online', 'offline', 'critical'], default: 'online' },
  powerLevel: { type: Number, default: 100 },
  assignedDroid: { type: String, default: null }
}, { timestamps: true });

export default mongoose.models.ShipSystem || mongoose.model('ShipSystem', ShipSystemSchema);
