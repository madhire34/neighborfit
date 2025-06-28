import React, { useState } from 'react';

function App() {
  const [preferences, setPreferences] = useState({
    safety: 5,
    walkability: 5,
    schools: 5,
    nightlife: 5,
    budget: 1000
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:5000/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(preferences),
    });
    const data = await res.json();
    alert('Top neighborhood: ' + data.bestMatch);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Find Your Neighborhood</h1>
      {['safety', 'walkability', 'schools', 'nightlife'].map((item) => (
        <div key={item}>
          <label>{item}</label>
          <input
            type="range"
            name={item}
            min="1"
            max="10"
            value={preferences[item]}
            onChange={handleChange}
          />
        </div>
      ))}
      <div>
        <label>Budget ($)</label>
        <input
          type="number"
          name="budget"
          value={preferences.budget}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Find Match</button>
    </div>
  );
}

export default App;