import React, { useState, useEffect } from "react";
import GetSheetDone from "get-sheet-done";
import { Cerveza } from "./Cerveza";
export function ListaCervezas(props) {
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
  const tiposDeCerveza = [...new Set(cervezas.map((e) => e.tipo))];
  return tiposDeCerveza.map((tipo) => {
    return (
      <>
        {cervezas
          .filter((e) => e.tipo === tipo)
          .filter(
            (e) =>
              (e.artesanal !== "No" && props.artesanales) ||
              (e.artesanal === "No" && !props.artesanales)
          ).length > 0 && (
          <h2
            style={{
              color: "#fff",
              fontFamily: "Staatliches, cursive",
              fontSize: 35,
              marginBottom: 0,
              marginTop: 20,
            }}
            key={tipo}>
            {tipo}
          </h2>
        )}
        {cervezas
          .filter((e) => e.tipo === tipo)
          .filter(
            (e) =>
              (e.artesanal !== "No" && props.artesanales) ||
              (e.artesanal === "No" && !props.artesanales)
          )
          .map((y) => {
            return (
              <Cerveza
                key={y.nombre}
                info={y}
                active={y.active}
                ingles={props.ingles}
                handleClick={handleClick}
              />
            );
          })}
      </>
    );
  });
}
