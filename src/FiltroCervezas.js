import React from "react";
import { Emojione } from "react-emoji-render";

export function FiltroCervezas(props) {
  return (
    <div style={{ margin: 10 }}>
      <span
        style={
          !props.artesanales
            ? {
                color: "#9d9d9d",
                fontSize: 15,
                backgroundColor: "rgb(75 75 75)",
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: "4px 0px 0px 4px",
                paddingRight: 15,
                paddingLeft: 15,
                cursor: "pointer",
              }
            : {
                color: "white",
                backgroundColor: "rgb(89 89 89)",
                fontSize: 15,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: "4px 0px 0px 4px",
                paddingRight: 15,
                paddingLeft: 15,
                cursor: "pointer",
              }
        }
        onClick={() => props.handleClick(false)}>
        <Emojione text={props.ingles ? "Mass produced" : "Industriales"} />
      </span>

      <span
        style={
          props.artesanales
            ? {
                color: "#9d9d9d",
                fontSize: 15,
                backgroundColor: "rgb(75 75 75)",
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: "0px 4px 4px 0px",
                paddingRight: 15,
                paddingLeft: 15,
                cursor: "pointer",
              }
            : {
                color: "white",
                backgroundColor: "rgb(89 89 89)",
                fontSize: 15,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: "0px 4px 4px 0px",
                paddingRight: 15,
                paddingLeft: 15,
                cursor: "pointer",
              }
        }
        onClick={() => props.handleClick(true)}>
        <Emojione text={props.ingles ? "Craft" : "Artesanales"} />
      </span>
    </div>
  );
}
