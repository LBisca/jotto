import React from 'react';
import logo from './logo.svg';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'party', letterMatchCount: 4 }]}
      />
    </div>
  );
}

export default App;
