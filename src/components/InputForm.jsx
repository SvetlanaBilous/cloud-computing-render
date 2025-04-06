import { useState } from 'react';

function InputForm() {
  const [text, setText] = useState('');

  return (
    <div className="InputForm">
      <input
        type="text"
        placeholder="Enter your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => alert('Analyze clicked!')}>
        Analyze
      </button>
    </div>
  );
}

export default InputForm;