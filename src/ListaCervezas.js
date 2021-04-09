import React, { useState, useEffect } from "react";
import GetSheetDone from "get-sheet-done";
import { Cerveza } from "./Cerveza";

export function ListaCervezas(props) {
  const {ingles} = props
  const [cervezas, setCervezas] = useState([]);
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  const getTitle1 = () => {
    const splitted = title.split('-')
    return ingles ? splitted[1] : splitted[0]
  }
  const getTitle2 = () => {
    const splitted = title2.split('-')
    return ingles ? splitted[1] : splitted[0]
  }
  useEffect(() => {
    const recopilarDatos = async () => {
      GetSheetDone.labeledCols(
        "1EB7Ad7Swi82Ks0gjJPcpoNpTq7ZAdphTubOOlxmdSOg",
        2
      ).then((sheet) => {
        if (sheet.data[0]['titulo1'])
        setTitle(sheet.data[0]['titulo1'])
        if(sheet.data[0]['titulo2'])
          setTitle2(sheet.data[0]['titulo2'])
      }).catch(() => {
        GetSheetDone.labeledCols(
          "1s8qj2Zs0mbrgha6AlwQ1SRbNd6sOW-nUhi2ZBsT5Yxk",
          2
        ).then((sheet) => {
          if (sheet.data[0]['titulo1'])
          setTitle(sheet.data[0]['titulo1'])
          if(sheet.data[0]['titulo2'])
            setTitle2(sheet.data[0]['titulo2'])
        })
      })
      GetSheetDone.labeledCols(
        "1EB7Ad7Swi82Ks0gjJPcpoNpTq7ZAdphTubOOlxmdSOg",
        1
      ).then((sheet) => {
        setCervezas(
          sheet.data.map((e) => {
            e.active = false;
            return e;
          })
        );
      }).catch(() => {
        GetSheetDone.labeledCols(
          "1s8qj2Zs0mbrgha6AlwQ1SRbNd6sOW-nUhi2ZBsT5Yxk"
        ).then((sheet) => {
          setCervezas(
            sheet.data.map((e) => {
              e.active = false;
              return e;
            })
          );
        })
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
  return (
    <>
     {getTitle1() && <h2 className={'main-title'} style={{fontSize:20}}>{getTitle1()}</h2>}
      {getTitle2() && <h2 className={'main-title'} style={{fontSize:20}}>{getTitle2()}</h2>}
          {cervezas
            .map((y) => (
              <Cerveza
                key={y.nombre}
                info={y}
                active={y.active}
                ingles={ingles}
                handleClick={handleClick}
              />
            ))}
        </>
  );
}
