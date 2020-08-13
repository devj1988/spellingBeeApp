import React, { useState, ReactText } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from './Grid';

const wordData = {
  center: "O",
  sides: ["P", "A", "E", "B", "T", "L"],
  possibleWords: ["PLOT"]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Like the NYTimes Spelling Bee.
        </p>
        <div>
          <div>Enter all words you can make using these letters.</div>
          <div>Each word should include the letter in the yellow cell.</div>
          <div>Words should be at least 4 letters long. </div>
          <div>Repetitions are allowed.</div>
        </div>
        <Grid {...wordData}>
        </Grid>
      </header>
    </div>
  );
}

export default App;
