import React, { useState, useEffect } from "react";
import GetSheetDone from "get-sheet-done";
import { Cerveza } from "./Cerveza";
export function ListaCervezas(props) {
  const [cervezas, setCervezas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
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
  const handleCategoryClick = (categoria) => {
    categoriaSeleccionada === categoria
      ? setCategoriaSeleccionada("")
      : setCategoriaSeleccionada(categoria);
  };
  const tiposDeCerveza = [...new Set(cervezas.map((e) => e.tipo))];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "100%",
          justifyContent: "center",
        }}>
        {tiposDeCerveza.map(
          (tipo) =>
            cervezas
              .filter((e) => e.tipo === tipo)
              .filter(
                (e) =>
                  (e.artesanal !== "No" && props.artesanales) ||
                  (e.artesanal === "No" && !props.artesanales)
              ).length > 0 && (
              <h2
                style={
                  tipo === categoriaSeleccionada
                    ? {
                        color: "#fff",
                        fontFamily: "Staatliches, sans-serif",
                        fontSize: 23,
                        marginBottom: 0,
                        marginTop: 20,
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        lineHeight: 1.5,
                        margin: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 5,
                      }
                    : {
                        color: "#fff",
                        fontFamily: "Staatliches, sans-serif",
                        fontSize: 23,
                        marginBottom: 0,
                        marginTop: 20,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        lineHeight: 1.5,
                        margin: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 5,
                        cursor: "pointer",
                      }
                }
                onClick={() => handleCategoryClick(tipo)}
                key={tipo}>
                {tipo && tipo.split("-").length > 1
                  ? !props.ingles
                    ? tipo.split("-")[0].trim()
                    : tipo.split("-")[1].trim()
                  : tipo.trim()}
              </h2>
            )
        )}
      </div>
      {((categoriaSeleccionada === "" &&
        cervezas.filter((e) => e.recomendada !== "No").length > 0) ||
        cervezas
          .filter((e) => e.tipo === categoriaSeleccionada)
          .filter(
            (e) =>
              (e.artesanal !== "No" && props.artesanales) ||
              (e.artesanal === "No" && !props.artesanales)
          ).length === 0) && (
        <>
          {props.ingles ? (
            <h2
              style={{
                color: "#fff",
                fontFamily: "Staatliches, sans-serif",
                fontSize: 26,
                marginBottom: 0,
                marginTop: 20,
              }}>
              Today we suggest
            </h2>
          ) : (
            <h2
              style={{
                color: "#fff",
                fontFamily: "Staatliches, sans-serif",
                fontSize: 26,
                marginBottom: 0,
                marginTop: 20,
              }}>
              Hoy te recomendamos
            </h2>
          )}
          {cervezas
            .filter((e) => e.recomendada !== "No")
            .map((y) => (
              <Cerveza
                key={y.nombre}
                info={y}
                active={y.active}
                ingles={props.ingles}
                handleClick={handleClick}
              />
            ))}
        </>
      )}
      {tiposDeCerveza.map((tipo) => {
        return cervezas
          .filter((e) => e.tipo === tipo)
          .filter(
            (e) =>
              (e.artesanal !== "No" && props.artesanales) ||
              (e.artesanal === "No" && !props.artesanales)
          )
          .filter((e) => categoriaSeleccionada === tipo)
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
          });
      })}
    </>
  );
}
