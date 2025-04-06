import { useState } from 'react';

// Component to handle text input and trigger sentiment analysis
function InputForm({ onAnalyze }) {

  // State to store the current text input value
  const [text, setText] = useState('');

  // Function called when the "Analyze" button is clicked
  const handleClick = () => {

    // Call the function passed from App with the input text
    onAnalyze(text);

    // Clear the input field after analysis
    setText('');
  };

  return (
    <div className="InputForm">
        
      {/* Text input field */}
      <input
        type="text"
        placeholder="Enter your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Button to trigger analysis */}
      <button onClick={handleClick}>
        Analyze
      </button>
    </div>
  );
}

export default InputForm;