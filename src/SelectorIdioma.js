import React from "react";
import { Emojione } from "react-emoji-render";

export function SelectorIdioma(props) {
  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        right: -10,
        backgroundColor: "rgb(89 89 89)",
        cursor: "pointer",
        borderRadius: "7px",
        width: 30,
        zIndex: 10,
        height: 30,
      }}
      onClick={() =>
        props.ingles ? props.handleClick(false) : props.handleClick(true)
      }>
      {!props.ingles ? (
        <span
          style={{
            color: "white",
            fontSize: 15,
            marginTop: 7,
          }}>
          <Emojione text='🇪🇸' />
        </span>
      ) : (
        <span
          style={{
            top: 20,
            color: "white",
            fontSize: 15,
            marginTop: 7,
          }}>
          <Emojione text='🇬🇧' />
        </span>
      )}
    </div>
  );
}
