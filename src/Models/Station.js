import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  namePlanet: String
});

export default mongoose.model('Station', StationSchema);