import React, { useState } from 'react';
import PreferenceSurvey from './Components/PreferenceSurvey';
import MatchResults from './Components/MatchResults';
import './App.css';

function App() {
  const [matchedNeighborhood, setMatchedNeighborhood] = useState(null);

  const handleMatchFound = (result) => {
    setMatchedNeighborhood(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NeighborFit</h1>
        <p>Find Your Perfect Neighborhood in Bangalore</p>
      </header>
      <main>
        <PreferenceSurvey onMatchFound={handleMatchFound} />
        {matchedNeighborhood && (
          <MatchResults match={matchedNeighborhood} />
        )}
      </main>
    </div>
  );
}

export default App;