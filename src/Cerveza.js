import React from "react";
import { Emojione } from "react-emoji-render";

export function Cerveza(props) {
  return (
    <div
      className={props.active ? "beer-card active" : "beer-card"}
      onClick={() => props.handleClick(props.info.nombre)}>
      <div style={{ flex: 1, flexDirection: "row" }} className='content'>
        <h2 className='title'>{props.info.nombre}</h2>
        <p style={{ display: "inline" }}>{props.info.estilo}</p>
        <p>
          <Emojione
            text={props.ingles ? props.info.paísingles : props.info.país}
          />
        </p>
        {!props.active && (
          <>
            <p>
              {props.info.alcohol && "Alcohol "}
              {props.info.alcohol}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>{props.info.precio} </span>
              <span style={{ color: "grey", fontSize: "85%" }}>
                {props.info.formato && !props.ingles
                  ? props.info.formato.trim().split("-")[0]
                  : props.info.formato.trim().split("-")[1]}
              </span>
            </p>
          </>
        )}
      </div>

      {props.active && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              lineHeight: "15px",
            }}>
            {props.info.alcohol && (
              <p>
                <span style={{ fontWeight: "bold" }}>Alcohol </span>
                {props.info.alcohol}
              </p>
            )}
            {props.info.color && (
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {!props.ingles ? "Color" : "Colour"}
                </span>{" "}
                {props.info.color}
              </p>
            )}
            {props.info.amargor && (
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {!props.ingles ? "Amargor" : "Bitterness"}
                </span>{" "}
                {props.info.amargor}
              </p>
            )}
          </div>
        </>
      )}
      <div
        style={
          !props.active
            ? {
                backgroundImage: "url(" + props.info.imagen + ")",
                backgroundSize: "200px 200px",
                height: 200,
                width: 200,
                right: -50,
                top: 15,
                position: "absolute",
              }
            : {
                backgroundImage: "url(" + props.info.imagen + ")",
                backgroundSize: "200px 200px",
                height: 200,
                width: 200,
                position: "relative",
                margin: "0px auto",
              }
        }></div>
      {props.active && (
        <>
          <div style={{ lineHeight: "15px", textAlign: "center" }}>
            {props.info.descripcion && (
              <div>
                <p style={{ fontWeight: "bold" }}>
                  {!props.ingles
                    ? "Notas"
                    : props.info.descripcioningles && "Description"}
                </p>
                <p
                  style={{
                    lineHeight: "1.5em",
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  {!props.ingles
                    ? props.info.descripcion
                    : props.info.descripcioningles}
                </p>
              </div>
            )}
          </div>
          {!props.info.formato2 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                {props.info.disponible === "Sí" ? (
                  <span style={{ color: "#00BC29" }}>
                    {!props.ingles ? "Disponible" : "Available"}
                  </span>
                ) : (
                  <span style={{ color: "#B10D0D" }}>
                    {!props.ingles ? "Agotada" : "Unavailable"}
                  </span>
                )}
              </p>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {props.info.precio}{" "}
                </span>
                <span style={{ color: "grey", fontSize: "85%" }}>
                  {props.info.formato && !props.ingles
                    ? props.info.formato.trim().split("-")[0]
                    : props.info.formato.trim().split("-")[1]}
                </span>
              </p>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                }}>
                <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {props.info.disponible === "Sí" ? (
                    <span style={{ color: "#00BC29" }}>
                      {!props.ingles ? "Disponible" : "Available"}
                    </span>
                  ) : (
                    <span style={{ color: "#B10D0D" }}>
                      {!props.ingles ? "Agotada" : "Unavailable"}
                    </span>
                  )}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}>
                <div
                  style={{
                    lineBreak: 5,
                    flex: "1 1 0px",
                    textAlign: "center",
                    borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                    padding: 5,
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      textAlign: "center",
                    }}>
                    {props.info.precio}
                  </p>
                  <p
                    style={{
                      color: "grey",
                      fontSize: 11,
                    }}>
                    {props.info.formato && !props.ingles
                      ? props.info.formato.trim().split("-")[0]
                      : props.info.formato.trim().split("-")[1]}
                  </p>
                </div>
                {props.info.formato2 && (
                  <div
                    style={{
                      lineBreak: 5,
                      flex: "1 1 0px",
                      borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                      padding: 5,
                    }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        textAlign: "center",
                      }}>
                      {props.info.precio2}
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 11,
                        textAlign: "center",
                      }}>
                      {props.info.formato2 && !props.ingles
                        ? props.info.formato2.trim().split("-")[0]
                        : props.info.formato2.trim().split("-")[1]}
                    </p>
                  </div>
                )}
                {props.info.formato3 && (
                  <div
                    style={{
                      lineBreak: 5,
                      flex: "1 1 0px",
                      padding: 5,
                    }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        textAlign: "center",
                      }}>
                      {props.info.precio3}
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 11,
                        textAlign: "center",
                        lineHeight: 1,
                      }}>
                      {props.info.formato3 && !props.ingles
                        ? props.info.formato3.trim().split("-")[0]
                        : props.info.formato3.trim().split("-")[1]}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
