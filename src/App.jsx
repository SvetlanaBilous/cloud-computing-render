import './App.css';

// Import components
import InputForm from './components/InputForm';
import ResultBox from './components/ResultBox';
import { useState } from 'react';

function App() {

  // State to store the current sentiment result
  const [sentiment, setSentiment] = useState('');

  // Function to handle sentiment analysis (simulated with random choice)
  const handleAnalyze = async (text) => {

    // If input is empty or only spaces, clear result and return
    if (!text.trim()) {
      setSentiment('');
      return;
    }
    try {

      // Send a POST request to the backend's URL with the input text as JSON
      // The backend will analyze the sentiment and return the result
      const response = await fetch("https://cloud-computing-backend-open-cloud-computing-task4-backend.2.rahtiapp.fi/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
      });

      const data = await response.json();

      // Convert the result from lowercase to Capitalized (to match the interface style)
      const formatted = data.class.charAt(0).toUpperCase() + data.class.slice(1);
      setSentiment(formatted);

    } catch (error) {
      console.error("Analyze error:", error);
      setSentiment("Error");
    }

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