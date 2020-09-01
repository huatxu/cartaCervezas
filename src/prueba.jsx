cervezas
    .filter((e) => e.tipo === categoriaSeleccionada)
    .filter(
        (e) =>
            (e.artesanal !== "No" && props.artesanales) ||
            (e.artesanal === "No" && !props.artesanales)
    ).length === 0