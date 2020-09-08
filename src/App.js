import React, { useState } from "react";
import "./App.css";
import { FiltroCervezas } from "./FiltroCervezas";
import { SelectorIdioma } from "./SelectorIdioma";
import { ListaCervezas } from "./ListaCervezas";

function App() {
  const [ingles, setIngles] = useState(false);
  const [artesanales, setArtesanales] = useState(false);

  return (
    <div className={"App"}>
      <header className='App-header'>
        <img src={require("./logo.png")} alt='Erasmus Café' />
        <h2
          style={{
            color: "#fff",
            fontFamily: "Staatliches, sans-serif",
            fontSize: 35,
            marginBottom: 0,
            marginTop: 20,
          }}>
          {ingles ? "Beer menu" : "Carta de cervezas"}
        </h2>
      </header>
      <SelectorIdioma handleClick={setIngles} ingles={ingles} />

      <FiltroCervezas
        handleClick={setArtesanales}
        artesanales={artesanales}
        ingles={ingles}
      />
      <ListaCervezas ingles={ingles} artesanales={artesanales} />
      <div
        style={{
          color: "white",
          fontSize: 11,
          lineBreak: 0,
          justifySelf: "flex-end",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginTop: 20,
        }}>
        <p
          style={{
            color: "white",
            fontSize: 11,
            lineBreak: 0,
          }}>
          <span style={{ fontWeight: "bold", color: "#919191" }}>
            Erasmus Bruin Café
          </span>{" "}
          © {new Date().getFullYear()}
        </p>
        <p style={{ color: "white", fontSize: 11, lineHeight: 0 }}>
          Calle Meléndez, 7, Salamanca
        </p>
      </div>
    </div>
  );
}

export default App;
