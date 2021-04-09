import React, { useState } from "react";
import "./App.css";
import { SelectorIdioma } from "./SelectorIdioma";
import { ListaCervezas } from "./ListaCervezas";
function App() {
  const [ingles, setIngles] = useState(false);
  const [artesanales] = useState(false);
  return (
    <div className={"App"}>
      <header className='App-header'>
        <img src={require("./logo.png")} alt='Erasmus Café' />
        <h2
          className={'main-title'}>
          {ingles ? "Beer menu" : "Carta de cervezas"}
        </h2>
      </header>
      <SelectorIdioma handleClick={setIngles} ingles={ingles} />
      <ListaCervezas ingles={ingles} artesanales={artesanales} />
      <div
        className='footer'>
        <p>
          <span style={{ fontWeight: "bold",
          color:"#919191" }}>
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
