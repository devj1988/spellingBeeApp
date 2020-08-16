import React from "react";
import { ReactComponent as Refresh } from "./refresh-svgrepo-com.svg";
import "./Grid.css";

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
            "" : this.props.currentWord || "";
        return (
            <div className="user-controls">
                <div className="user-controls-text">{txt}</div>
                <div className="button-row">
                    <button onClick={this.props.handleSubmit} className="common-btn">Enter</button>
                    <button onClick={this.props.handleJuggle} className="shuffle-btn">
                        <Refresh className="shuffle-svg" />
                    </button>
                    <button onClick={this.props.handleClear} className="common-btn">Clear</button>
                </div>
            </div>
        )
    }
}