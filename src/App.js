import React, { useState } from "react";
import "./App.css";
import { FiltroCervezas } from "./FiltroCervezas";
import { SelectorIdioma } from "./SelectorIdioma";
import { ListaCervezas } from "./ListaCervezas";

function App() {
  const [ingles, setIngles] = useState(false);
  const [artesanales, setArtesanales] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={require("./logo.png")} alt='Erasmus Café' />
      </header>
      <SelectorIdioma handleClick={setIngles} ingles={ingles} />
      <FiltroCervezas
        handleClick={setArtesanales}
        artesanales={artesanales}
        ingles={ingles}
      />

      <ListaCervezas ingles={ingles} artesanales={artesanales} />
    </div>
  );
}

export default App;
