const test = () =>
  tiposDeCerveza.map((tipo) => {
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
              fontFamily: "Staatliches, sans-serif",
              fontSize: 35,
              marginBottom: 0,
              marginTop: 20,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              lineHeight: 1.5,
              width: "100%",
            }}
            onClick={() => handleCategoryClick(tipo)}
            key={tipo}>
            {!props.ingles
              ? tipo.split("-")[0].trim()
              : tipo.split("-")[1].trim()}
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
            if (categoriaSeleccionada === tipo)
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
