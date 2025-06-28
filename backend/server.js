const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample neighborhood data
const neighborhoods = [
  {
    name: "Greenwood",
    safety: 8,
    walkability: 7,
    schools: 9,
    nightlife: 4,
    rent: 1200
  },
  {
    name: "Downtown",
    safety: 5,
    walkability: 9,
    schools: 6,
    nightlife: 9,
    rent: 1500
  },
  {
    name: "Hillside",
    safety: 9,
    walkability: 5,
    schools: 7,
    nightlife: 3,
    rent: 1000
  }
];

// Match algorithm
app.post('/match', (req, res) => {
  const user = req.body;
  let bestMatch = null;
  let highestScore = -Infinity;

  neighborhoods.forEach(nb => {
    const score =
      Math.abs(nb.safety - user.safety) +
      Math.abs(nb.walkability - user.walkability) +
      Math.abs(nb.schools - user.schools) +
      Math.abs(nb.nightlife - user.nightlife) +
      Math.abs(nb.rent - user.budget) / 100;

    const inverseScore = 100 - score;
    if (inverseScore > highestScore) {
      highestScore = inverseScore;
      bestMatch = nb.name;
    }
  });

  res.json({ bestMatch });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
