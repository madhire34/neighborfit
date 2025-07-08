import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Neighborhood from './models/Neighborhood.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Match user preferences with best neighborhood
app.post('/match', async (req, res) => {
  try {
    const user = req.body;
    const neighborhoods = await Neighborhood.find();

    let bestMatch = null;
    let highestScore = -Infinity;

    neighborhoods.forEach(nb => {
      const score =
        100 -
        (
          Math.abs(nb.safety - user.safety) * 2 +
          Math.abs(nb.walkability - user.walkability) * 1.5 +
          Math.abs(nb.schools - user.schools) * 1.5 +
          Math.abs(nb.nightlife - user.nightlife) * 1.2 +
          Math.abs(nb.rent - user.budget) / 1000
        );

      if (score > highestScore) {
        highestScore = score;
        bestMatch = nb;
      }
    });

    if (bestMatch) {
      res.json({ match: bestMatch, score: highestScore.toFixed(1) });
    } else {
      res.status(404).json({ error: 'No neighborhoods available to match.' });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new neighborhood
app.post('/neighborhoods', async (req, res) => {
  try {
    const neighborhood = new Neighborhood(req.body);
    await neighborhood.save();
    res.status(201).json(neighborhood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all neighborhoods
app.get('/neighborhoods', async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find();
    res.json(neighborhoods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Root route for Render deployment
app.get('/', (req, res) => {
  res.send('✅ NeighborFit API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
