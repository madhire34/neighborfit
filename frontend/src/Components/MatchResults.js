import React from 'react';

const MatchResults = ({ match }) => {
  if (!match) return null;

  return (
    <div className="match-results">
      <h2>Your Perfect Neighborhood</h2>
      <div className="neighborhood-details">
        <h3>{match.match.name}</h3>
        <div className="neighborhood-stats">
          <p>Safety: {match.match.safety}/10</p>
          <p>Walkability: {match.match.walkability}/10</p>
          <p>Schools: {match.match.schools}/10</p>
          <p>Nightlife: {match.match.nightlife}/10</p>
          <p>Rent: ₹{match.match.rent}/month</p>
        </div>
        <p>Match Score: {match.score}%</p>
      </div>
    </div>
  );
};

export default MatchResults;