import React, { useState } from "react";
import { Cell } from "./Cell";
import { UserControls } from "./UserControls";
import * as _ from "lodash";
import "./Grid.css";

export interface GridProps {
    center: string;
    sides: Array<string>;
    possibleWords: Array<string>;
}

export const Grid = ({ center, sides, possibleWords }: GridProps) => {

    console.log({ center, sides, possibleWords });

    const [currentWord, setCurrentWord] = useState("");
    const [wordsFound, setWordsFound] = useState<Array<string>>([]);
    const [message, setMessage] = useState({
        message: "",
        error: false,
        hidden: true
    });
    const [sideLetters, setSideLetters] = useState<Array<string>>(sides);

    const handleCellClick = (letter: string) => {
        setCurrentWord(currentWord + letter);
        console.log(currentWord + letter);
    }

    const clearCurrentWord = () => {
        setCurrentWord("");
    }

    const submit = () => {
        const validWord = possibleWords.find(word => word === currentWord);
        if (!validWord) {
            const message = currentWord.length < 4 ? "Word should be at least 4 letters long"
                : `${currentWord} was not found in the dictionary`
            setMessage({
                message,
                error: true,
                hidden: false
            });
        } else if (currentWord in wordsFound) {
            setMessage({
                message: `${currentWord} is already added :(`,
                error: true,
                hidden: false
            });
        } else {
            const newList: Array<string> = [...wordsFound];
            newList.push(currentWord);
            setWordsFound(wordsFound.concat(currentWord));
            if (wordsFound.length + 1 < possibleWords.length) {
                setMessage({
                    message: `${currentWord} is valid, yay!`,
                    error: false,
                    hidden: false
                });
            }
        }
        setTimeout(() => {
            setMessage({
                ...message,
                hidden: true
            });
        }, 2000);
        setCurrentWord("");
    }

    const juggle = () => {
        setSideLetters(_.shuffle(sides));
    }

    const resetGame = () => {
        setWordsFound([]);
        setCurrentWord("");
        setMessage({
            ...message,
            hidden: true
        });
    }

    const cellArray = sideLetters.map((letter: string, i: number) =>
        <Cell key={i}
            letter={letter}
            isCenter={false}
            handleClick={handleCellClick}></Cell>);
    const centerCell = <Cell key={7}
        letter={center}
        isCenter={true}
        handleClick={handleCellClick}></Cell>;
    const top = _.slice(cellArray, 0, 2);
    const bottom = _.slice(cellArray, -4);

    return (
        <div className="grid">
            <div hidden={message.hidden} className={message.error ? "message-error" : "message"}>
                {message.message}
            </div>

            <div className="grid-body">
                <div className="grid-left">
                    <div className="hive">
                        {top}
                        {centerCell}
                        {bottom}
                    </div>
                    <UserControls handleSubmit={submit}
                        handleJuggle={juggle}
                        handleClear={clearCurrentWord}
                        currentWord={currentWord}
                        handleReset={resetGame}
                        isNewGame={!(wordsFound.length === possibleWords.length)}
                    ></UserControls>
                </div>
                <div className="grid-right">
                    <div className="wordlist">
                        <div className={wordsFound.length === possibleWords.length ? "wordlist-header wordlist-header-green" :
                            "wordlist-header wordlist-header-white"
                        }>
                            {wordsFound.length > 0 ?
                                wordsFound.length === possibleWords.length ?
                                    "You found all words"! :
                                    `${wordsFound.length} word${
                                    wordsFound.length > 1 ? "s" : ""
                                    } found` : ""}
                        </div>
                        <ol className="wordsFoundList">
                            {wordsFound.map(word => <li>{word}</li>)}
                        </ol>
                    </div></div>
            </div>
        </div>);
}