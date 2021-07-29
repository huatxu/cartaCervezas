import React from "react";

const menuItem = {
    display: "flex",
    color: "rgb(255, 255, 255)",
    fontFamily: "Staatliches, sans-serif",
    fontSize: 23,
    margin: 4,
    lineHeight: 1.5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: "rgb(64, 64, 64)",
    cursor: "pointer"
}

const active = {
    backgroundColor: "rgb(120, 120, 120)"
}

export function Menu(props) {
    const barrilStyle = props.barril ? { ...menuItem, ...active} : menuItem
    const bottleStyle = !props.barril ? { ...menuItem, ...active} : menuItem

    return (
        <div style={{display: "flex", flexWrap: "wrap", maxWidth: "100%", justifyContent: "center", marginTop: 14}}>
            <div style={barrilStyle} onClick={() => { props.handleClick(true) }}>Barril</div>
            <div style={bottleStyle} onClick={() => { props.handleClick(false) }}>Botella</div>
        </div>
    )
}