import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    // Call your backend API here
    const response = await fetch('http://127.0.0.1:5000/submit-threat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ipOrUrl: input }),
    });

    const data = await response.json();
    setResult(data.result); // Assuming the result is in a 'result' field
  };

  return (
    <div className="App">
      <h1>Cybersecurity Threat Viewer</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter IP or URL"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
