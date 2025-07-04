import React, { useState } from 'react';
import { matchNeighborhood } from '../Services/api';

const PreferenceSurvey = ({ onMatchFound }) => {
  const [preferences, setPreferences] = useState({
    safety: 5,
    walkability: 5,
    schools: 5,
    nightlife: 5,
    budget: 20000
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await matchNeighborhood(preferences);
      onMatchFound(result);
    } catch (error) {
      setError('Failed to find a matching neighborhood. Please try again.');
      console.error('Matching failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="preference-survey">
      <h2>Find Your Perfect Neighborhood</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="survey-input">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type="range"
              name={key}
              min="1"
              max="10"
              value={value}
              onChange={handleChange}
            />
            <span>{value}</span>
          </div>
        ))}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Finding...' : 'Find My Neighborhood'}
        </button>
      </form>
    </div>
  );
};

export default PreferenceSurvey;