import React from "react";

export interface UserControlProps {
    handleSubmit: () => void;
    handleJuggle: () => void;
    handleClear: () => void;
    handleReset: () => void;
    currentWord: string;
    isNewGame: boolean;
}

export class UserControls extends React.Component<UserControlProps> {

    render() {
        const txt = !this.props.isNewGame ?
            "" : this.props.currentWord || "Enter a word";
        return (
            <div>
                <text>{txt}</text>
                <div>
                    <button onClick={this.props.handleSubmit}>Enter</button>
                    <button onClick={this.props.handleJuggle}>Shuffle</button>
                    <button onClick={this.props.handleClear}>Clear</button>
                    <button onClick={this.props.handleReset}>Reset Game</button>
                </div>
            </div>
        )
    }
}