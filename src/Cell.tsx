import React from "react";

export interface CellProps {
    isCenter: boolean;
    letter: string;
    handleClick: (letter: string) => void;
}

export class Cell extends React.Component<CellProps> {

    render() {
        const width = 100;
            const color = this.props.isCenter? "yellow" : "white";
         const sideLength = Math.sqrt(((width/2)**2)*2);

        // return (
        //     <div style={{
        //         width: 40,
        //         height: 40,
        //         backgroundColor: this.props.isCenter? "yellow" : "white",
        //         borderWidth: 5,
        //         borderColor: "black",
        //         borderStyle: "solid",
        //         textAlign: "center",
        //         verticalAlign: "middle",
        //         color: "black",
        //         fontSize: "xx-large"
        //     }} onClick={() => {this.props.handleClick(this.props.letter)}}>
        //        {this.props.letter}
        //     </div>
        // )
        

    return (
        <div onClick={() => {this.props.handleClick(this.props.letter)}}>
        <div style = {{
            width: 0,
            height: 0,
            borderTop: `${width / 2}px solid transparent`,
            borderBottom: `${width / 2}px solid ${color}`,
            borderLeft: `${width / 2}px solid transparent`,
            borderRight: `${width / 2}px solid transparent`
        }
        }></div> 
            <div style={{
                width,
                height: sideLength-20,
                backgroundColor: color,
                textAlign: "center",
                        verticalAlign: "middle",
                        color: "black",
                        fontSize: "xx-large"
            }}>{this.props.letter}</div>
            <div style = {{
            width: 0,
            height: 0,
            borderTop: `${width / 2}px solid ${color}`,
            borderBottom: `${width / 2}px solid transparent`,
            borderLeft: `${width / 2}px solid transparent`,
            borderRight: `${width / 2}px solid transparent`
        }
        }></div> 
            </div>);

}
}