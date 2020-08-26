import React, { useState, useEffect } from "react";
import GetSheetDone from "get-sheet-done";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={require("./logo.png")} />
      </header>
      <ListaCervezas />
    </div>
  );
}
function ListaCervezas(props) {
  const [cervezas, setCervezas] = useState([]);
  useEffect(() => {
    const recopilarDatos = async () => {
      GetSheetDone.labeledCols(
        "1EB7Ad7Swi82Ks0gjJPcpoNpTq7ZAdphTubOOlxmdSOg"
      ).then((sheet) => {
        setCervezas(
          sheet.data.map((e) => {
            e.active = false;
            return e;
          })
        );
      });
    };
    recopilarDatos();
  }, []);

  const handleClick = (e) => {
    setCervezas(
      cervezas.map((y) => {
        if (y.nombre === e) y.active = !y.active;
        else y.active = false;
        return y;
      })
    );
  };
  return cervezas.map((e) => {
    return (
      <Cerveza
        key={e.nombre}
        info={e}
        active={e.active}
        handleClick={handleClick}
      />
    );
  });
}

function Cerveza(props) {
  return (
    <div
      className={props.active ? "beer-card active" : "beer-card"}
      onClick={() => props.handleClick(props.info.nombre)}>
      <div style={{ flex: 1, flexDirection: "row" }} className='content'>
        <h2 className='title'>{props.info.nombre}</h2>
        <p style={{ display: "inline" }}>{props.info.tipo}</p>
        <p>{props.info.país}</p>
        {!props.active && (
          <>
            <p>{props.info.alcoholenvolumen} alcohol en volumen</p>
            <p style={{ fontWeight: "bold" }}>{props.info.precio}</p>
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
            <p>
              <span style={{ fontWeight: "bold" }}>Alcohol </span>
              {props.info.alcoholenvolumen}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Color</span>{" "}
              {props.info.color}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Amargor</span>{" "}
              {props.info.amargor}
            </p>
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
            {props.info.sabor && (
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Sabor</span>{" "}
                  {props.info.sabor}
                </p>
              </div>
            )}
            {props.info.aroma && (
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Aroma</span>{" "}
                  {props.info.aroma}
                </p>
              </div>
            )}
            {props.info.apariencia && (
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Apariencia</span>{" "}
                  {props.info.apariencia}
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
              Disponible:{" "}
              {props.info.disponible === "Sí" ? (
                <span style={{ color: "#00BC29" }}>Sí</span>
              ) : (
                <span style={{ color: "#B10D0D" }}>No</span>
              )}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
              {props.info.precio}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
