
import mongoose from 'mongoose';

const neighborhoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  safety: Number,
  walkability: Number,
  schools: Number,
  nightlife: Number,
  rent: Number,
});

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

export default Neighborhood;
