import React from "react";
import "./cell.css";

export interface CellProps {
    isCenter: boolean;
    letter: string;
    handleClick: (letter: string) => void;
}

export class Cell extends React.Component<CellProps> {

    render() {
        const polygonClass = this.props.isCenter ? "polygon-center" : "polygon-outer";

        return (
            <div className="cell" >
                <svg width={104} height={104} viewBox="0 0 120 103.92304845413263" onClick={() => { this.props.handleClick(this.props.letter) }}>
                    <polygon points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
                        stroke="transparent" className={polygonClass}></polygon>
                    <text x="45%" y="57%" className="cell-text">{this.props.letter}</text>
                </svg></div>

        );
    }
}