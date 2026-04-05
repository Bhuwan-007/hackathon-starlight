import mongoose from 'mongoose';

const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  cabinNumber: { type: String, required: true },
  status: { type: String, enum: ['safe', 'missing'], default: 'safe' },
  destination: { type: String, required: true },
  isVIP: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Passenger || mongoose.model('Passenger', PassengerSchema);
