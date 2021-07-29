import React, { useState, useEffect } from "react";
import GetSheetDone from "get-sheet-done";
import { Cerveza } from "./Cerveza";
import { Menu } from "./Menu"

const trueChoices = ['SÍ', 'si', 'sí', 'Si', 'SI', 'sI', 'sÍ', 'Sí']

export function ListaCervezas(props) {
  const {ingles} = props
  const [cervezas, setCervezas] = useState([]);
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  const [barril, setBarril] = useState(true)

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
      const fallBack = '1EB7Ad7Swi82Ks0gjJPcpoNpTq7ZAdphTubOOlxmdSOg'
      GetSheetDone.labeledCols(
        process.env.REACT_APP_MAIN_UID || fallBack,
        2
      ).then((sheet) => {
        if (sheet.data[0]['titulo1'])
        setTitle(sheet.data[0]['titulo1'])
        if(sheet.data[0]['titulo2'])
          setTitle2(sheet.data[0]['titulo2'])
      }).catch(() => {
        GetSheetDone.labeledCols(
          process.env.REACT_APP_SECONDARY_UID || fallBack,
          2
        ).then((sheet) => {
          if (sheet.data[0]['titulo1'])
          setTitle(sheet.data[0]['titulo1'])
          if(sheet.data[0]['titulo2'])
            setTitle2(sheet.data[0]['titulo2'])
        })
      })
      GetSheetDone.labeledCols(
        process.env.REACT_APP_MAIN_UID || fallBack,
        1
      ).then((sheet) => {
        setCervezas(
          sheet.data.filter((e) => {
            return trueChoices.indexOf(e.aparece) >= 0
          }).map((e) => {
            e.active = false;
            return e;
          })
        );
      }).catch(() => {
        GetSheetDone.labeledCols(
          process.env.REACT_APP_SECONDARY_UID || fallBack
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
          <Menu barril={barril} handleClick={setBarril}></Menu>
          {cervezas.filter((y) => {
            if (barril)
              return trueChoices.indexOf(y['barril']) >= 0
            else
              return trueChoices.indexOf(y['barril']) < 0
          })
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
