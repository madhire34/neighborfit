import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    safety: 5,
    walkability: 5,
    schools: 5,
    nightlife: 5,
    budget: 1000,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Find Your Best Neighborhood</h2>
      <form onSubmit={handleSubmit}>
        {['safety', 'walkability', 'schools', 'nightlife', 'budget'].map((field) => (
          <div key={field}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}:{" "}
              <input
                type="number"
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Match Me</button>
      </form>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Best Match: {result.match.name}</h3>
          <p>Match Score: {result.score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
