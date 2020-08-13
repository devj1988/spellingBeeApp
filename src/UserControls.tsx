import React from "react";

export interface UserControlProps {
    handleSubmit: () => void;
    handleJuggle: () => void;
    handleClear: () => void;
    currentWord: string;
}

export class UserControls extends React.Component<UserControlProps> {

    render() {
        return (
            <div>
                <text>{this.props.currentWord}</text>
                <div>
                    <button onClick={this.props.handleSubmit}>Enter</button>
                    <button onClick={this.props.handleSubmit}>Shuffle</button>
                    <button onClick={this.props.handleClear}>Clear</button>
                </div>
            </div>
        )
    }
}