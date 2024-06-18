import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const value = 'People';
  const text = "Hello, Myself Saniya Chivate currently enrolled in btech cs branch and it is exciting.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text[charIndex]);
      charIndex++;

      if (charIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="App">
      <div>
        <h1>Hello {value}</h1>
        <h2>Welcome to my static Web Application using React!</h2>
        <p>{displayedText}</p>
      </div>
    </div>
  );
}

export default App;
