import React from "react";
export function SelectorIdioma(props) {
  return (
    <div style={{ margin: 20 }}>
      <span
        style={
          !props.ingles
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
        Español
      </span>
      <span
        style={
          props.ingles
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
        English
      </span>
    </div>
  );
}
