import mongoose from 'mongoose';

const SecurityLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  event: { type: String, required: true },
  accessLevelRequired: { type: Number, default: 1 },
  success: { type: Boolean, default: true },
  sourceIP: { type: String }
}, { timestamps: true });

export default mongoose.models.SecurityLog || mongoose.model('SecurityLog', SecurityLogSchema);
