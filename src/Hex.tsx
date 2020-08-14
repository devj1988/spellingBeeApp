import React from "react";

export const Hex = (props: any) => {
    const width = 100;
    const color = "red";
    const sideLength = Math.sqrt(((width / 2) ** 2) * 2);
    return (
        <div>
            <div style={{
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
                height: sideLength - 20,
                backgroundColor: "red",
                textAlign: "center"
            }}>A</div>
            <div style={{
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