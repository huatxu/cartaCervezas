import React, { useState } from "react";
import "./App.css";
import { FiltroCervezas } from "./FiltroCervezas";
import { SelectorIdioma } from "./SelectorIdioma";
import { ListaCervezas } from "./ListaCervezas";
import AddToHomeScreen from "add-to-homescreen-react";

function App() {
  const [ingles, setIngles] = useState(false);
  const [artesanales, setArtesanales] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={require("./logo.png")} alt='Erasmus Café' />
      </header>
      <SelectorIdioma handleClick={setIngles} ingles={ingles} />
      <AddToHomeScreen />

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
