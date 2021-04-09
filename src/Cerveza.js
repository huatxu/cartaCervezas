import React, { useRef } from "react";
import { Emojione } from "react-emoji-render";
export const Cerveza = (props) => {
  const { active, info, ingles } = props
  const { artesanal, tipo, alcohol } = info
  const observed = useRef(null);
  const scrollToRef = (ref) => {
    if (!active)
      window.setTimeout(
        () => window.scrollTo(0, observed.current.offsetTop),
        100
      );
  };
  const getManufacture = () => {
      return ingles ? 'Craft' : 'Artesana'
  }
  const isCraft = () => {
    return ['Sí', 'si', 'SI', 'S', 'sí', 1, true, 'SÍ'].indexOf(artesanal) >= 0
  }
  const getType = () => {
    const type = tipo.split('-')
    return ingles ? type[1] : type[0]
  }
  return (
    <div
      ref={observed}
      className={active ? "beer-card active" : "beer-card"}
      onClick={() => {
        props.handleClick(info.nombre);
        scrollToRef(observed);
      }}>
      <div style={{ flex: 1, flexDirection: "row" }} className='content'>
        <h2 className='title'>{info.nombre}</h2>
        {isCraft() && 
        <p style={{ fontWeight: 'bold' }}>
          {getManufacture()}
        </p>}
        <p style={{ display: "inline", lineHeight: "15px" }}>
          {info.estilo} 
        </p>
        <p style={{ }}>
         {getType()}
        </p>
        <p>
          <Emojione
            text={ingles ? info.paísingles : info.país}
          />
        </p>
        {!active && (
          <>
            <p>
              {alcohol && "Alcohol "}
              {alcohol}
            </p>

            <p>
              <span style={{ fontWeight: "bold" }}>{info.precio} </span>
              <span style={{ color: "grey", fontSize: "85%" }}>
                {info.formato && !ingles
                  ? info.formato.trim().split("-")[0]
                  : info.formato.trim().split("-")[1]}
              </span>
            </p>
            <p
              style={{
                textAlign: "center",
                position: "relative",
                zIndex: 10,
                width: "100%",
                opacity: 0.7,
                fontWeight: "bold",
              }}>
              + info
            </p>
          </>
        )}
      </div>

      {active && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              lineHeight: "15px",
            }}>
            {alcohol && (
              <p>
                <span style={{ fontWeight: "bold" }}>Alcohol </span>
                {alcohol}
              </p>
            )}
            {info.color && (
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {!ingles ? "Color" : "Colour"}
                </span>{" "}
                {info.color}
              </p>
            )}
            {info.amargor && (
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {!ingles ? "Amargor" : "Bitterness"}
                </span>{" "}
                {info.amargor}
              </p>
            )}
          </div>
        </>
      )}
      <div
        style={
          !active
            ? {
                backgroundImage: "url(" + info.imagen + ")",
                backgroundSize: "200px 200px",
                height: 200,
                width: 200,
                right: -50,
                top: 15,
                position: "absolute",
              }
            : {
                backgroundImage: "url(" + info.imagen + ")",
                backgroundSize: "200px 200px",
                height: 200,
                width: 200,
                position: "relative",
                margin: "0px auto",
              }
        }></div>
      {active && (
        <>
          <div style={{ lineHeight: "15px", textAlign: "center" }}>
            {info.descripcion && (
              <div>
                <p style={{ fontWeight: "bold" }}>
                  {!ingles
                    ? "Notas"
                    : info.descripcioningles && "Description"}
                </p>
                {info.singluten === "Sí" && (
                  <p>{!ingles ? "Sin gluten" : "Gluten Free"}</p>
                )}
                <p
                  style={{
                    lineHeight: "1.5em",
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  {!ingles
                    ? info.descripcion
                    : info.descripcioningles}
                </p>
              </div>
            )}
          </div>
          {!info.formato2 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                {info.disponible.replace("í", "i").toLowerCase() ===
                "si" ? (
                  <span style={{ color: "#00BC29" }}>
                    {!ingles ? "Disponible" : "Available"}
                  </span>
                ) : (
                  <span style={{ color: "#B10D0D" }}>
                    {!ingles ? "Agotada" : "Unavailable"}
                  </span>
                )}
              </p>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {info.precio}{" "}
                </span>
                <span style={{ color: "grey", fontSize: "85%" }}>
                  {info.formato && !ingles
                    ? info.formato.trim().split("-")[0]
                    : info.formato.trim().split("-")[1]}
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
                  {info.disponible.toLowerCase().replace("í", "i") ===
                  "si" ? (
                    <span style={{ color: "#00BC29" }}>
                      {!ingles ? "Disponible" : "Available"}
                    </span>
                  ) : (
                    <span style={{ color: "#B10D0D" }}>
                      {!ingles ? "Agotada" : "Unavailable"}
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
                    {info.precio}
                  </p>
                  <p
                    style={{
                      color: "grey",
                      fontSize: 11,
                      lineHeight: 1,
                    }}>
                    {info.formato && !ingles
                      ? info.formato.trim().split("-")[0]
                      : info.formato.trim().split("-")[1]}
                  </p>
                </div>
                {info.formato2 && (
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
                      {info.precio2}
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 11,
                        textAlign: "center",
                        lineHeight: 1,
                      }}>
                      {info.formato2 && !ingles
                        ? info.formato2.trim().split("-")[0]
                        : info.formato2.trim().split("-")[1]}
                    </p>
                  </div>
                )}
                {info.formato3 && (
                  <div
                    style={{
                      lineBreak: 5,
                      flex: "1 1 0px",
                      padding: 5,
                      borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
                    }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        textAlign: "center",
                      }}>
                      {info.precio3}
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 11,
                        textAlign: "center",
                        lineHeight: 1,
                      }}>
                      {info.formato3 && !ingles
                        ? info.formato3.trim().split("-")[0]
                        : info.formato3.trim().split("-")[1]}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
      {active && (
        <p style={{ fontSize: 11, textAlign: "right" }}>
          {!ingles
            ? "+0,30€ suplemento en terraza"
            : "+0,30€ outside extra"}
        </p>
      )}
    </div>
  );
};
