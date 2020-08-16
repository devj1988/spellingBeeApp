import React from 'react';
import './App.css';
import { Grid } from './Grid';
import { puzzles } from "./puzzles";
import * as _ from "lodash";

function App() {
    const puzzleIndex = _.random(0, puzzles.puzzles.length - 1);
    const puzzle = puzzles.puzzles[puzzleIndex];

    return (
        <div className="App">
            <div>
                <header className="App-header">
                    <p>
                        Like the NYTimes Spelling Bee.
                    </p>
                    <div>
                        <div>Enter all words you can make using these letters.</div>
                        <div>Each word should include the letter in the yellow cell.</div>
                        <div>Words should be at least 4 letters long. </div>
                        <div>Letter repetitions are allowed.</div>
                        <p></p>
                        <div>Enter a word by clicking on the cells, then clicking enter.</div>
                        <div>The middle button shuffles the outer letters.</div>
                        <p />
                    </div>
                </header>
            </div>
            <div>
                <Grid {...puzzle} />
            </div>
        </div>
    );
}

export default App;
