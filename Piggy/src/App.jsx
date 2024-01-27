import React, { useState } from 'react';

const App = () => {
  const [userInput, getUserInput] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(undefined);

  useEffect(() => {
    if (userInput != null && userInput.trim() === "") {
      setAnswer(undefined);
    }
  }, [userInput]);

  const buttonClick = () => {
    console.log('Input Value:', userInput);
    try {
      setLoading(true);

      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json" }, 
        body: JSON.stringify({userInput}),
      };

      fetch("/api/ask", requestOptions).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        console.log('Data from server:', data);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    } catch {

    }
  };

  const inputChange = (e) => {
      getUserInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        disabled={loading}
        onChange={inputChange}
        placeholder="Enter your deepest darkest secret"
      />
      
      <button onClick={buttonClick}>Click me</button>
      <div className="spotlight__answer">{answer && <p>{answer}</p>}</div>

    </div>
  );
};

export default App;
