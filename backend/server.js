// backend/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Neighborhood from './models/Neighborhood.js';

dotenv.config();




const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// API routes

// Add new neighborhood
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
        (Math.abs(nb.safety - user.safety) +
         Math.abs(nb.walkability - user.walkability) +
         Math.abs(nb.schools - user.schools) +
         Math.abs(nb.nightlife - user.nightlife) +
         Math.abs(nb.rent - user.budget) / 100);

      if (score > highestScore) {
        highestScore = score;
        bestMatch = nb;
      }
    });

    if (bestMatch) {
      res.json({ match: bestMatch, score: highestScore.toFixed(2) });
    } else {
      res.status(404).json({ error: 'No neighborhoods available to match.' });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

// Start server
// Temporary route to delete all neighborhoods — development only
// app.delete('/neighborhoods/delete-all', async (req, res) => {
//   try {
//     await Neighborhood.deleteMany({});
//     res.json({ message: "✅ All neighborhoods deleted successfully." });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
