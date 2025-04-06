import './App.css';

// Import components
import InputForm from './components/InputForm';
import ResultBox from './components/ResultBox';
import { useState } from 'react';

function App() {

  // State to store the current sentiment result
  const [sentiment, setSentiment] = useState('');

  // Function to handle sentiment analysis (simulated with random choice)
  const handleAnalyze = (text) => {

    // If input is empty or only spaces, clear result and return
    if (!text.trim()) {
      setSentiment('');
      return;
    }

    // Simulated sentiment options
    const options = ['Positive', 'Neutral', 'Negative'];

    // Pick a random result from the options
    const randomResult = options[Math.floor(Math.random() * options.length)];

    // Update sentiment state with the result
    setSentiment(randomResult);
  };

  return (
    
    <div className="App">
      {/* App title */}
      <h1>Sentiment Analyzer</h1>

      {/* InputForm component handles text input and triggers analysis */}
      <InputForm onAnalyze={handleAnalyze} />

      {/* ResultBox displays the analysis result */}
      <ResultBox sentiment={sentiment} />
    </div>
  );
}

export default App;