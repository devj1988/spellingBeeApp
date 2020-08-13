import React, {useState} from "react";
import { Cell } from "./Cell";
import { UserControls } from "./UserControls";
import { Hex } from "./Hex";

export interface GridProps {
    center: string;
    sides: Array<string>;
    possibleWords: Array<string>;
}

export const Grid =  ({center, sides, possibleWords}: GridProps) => {

    const [currentWord, setCurrentWord] = useState("");
    const [wordsFound, setWordsFound] = useState<Array<string>>([]);
    const [message, setMessage] = useState({
        message: "",
        error: false,
        hidden: true
    });

    const handleCellClick = (letter: string) => {
        setCurrentWord(currentWord+letter);
        console.log(currentWord+letter);
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
                setMessage({
                    message: `${currentWord} is valid, yay!`,
                    error: false,
                    hidden: false
                });
                setTimeout(() => {
                    setMessage({
                        ...message,
                        hidden: true
                    });
                }, 2000);
        }
        setCurrentWord("");
    }

    const juggle = () => {
    }

    const cellArray =
        (<div>{ sides.map( (letter: string, i: number) => 
        <Cell key={i} 
            letter={letter}
            isCenter={false}
            handleClick={handleCellClick}></Cell>)}
            </div>);


    return  (
         <div>
             <div hidden={message.hidden}
                    style={{
                        backgroundColor: message.error? "red" : "green"
                    }}
                >
                 {message.message}
             </div>
            <Cell letter={center}
                isCenter={true}
                handleClick={handleCellClick} />
            {cellArray}
            {/* <Hex/> */}
            <UserControls handleSubmit={submit}
                handleJuggle={juggle}
                handleClear={clearCurrentWord}
                currentWord={currentWord}
            ></UserControls>
            <div>
                <div style={{
                    backgroundColor: wordsFound.length === possibleWords.length?
                    "green" : "white",
                    color: "black"
                    }}>
                {wordsFound.length > 0? 
                    wordsFound.length === possibleWords.length?
                        "You found all words"!:
                `${wordsFound.length} word${
                    wordsFound.length > 1? "s" : ""
                } found`: ""}
                </div>
                <ol>
                    {wordsFound.map(word => <li>{word}</li>)}
                </ol>
            </div>
        </div>);
}