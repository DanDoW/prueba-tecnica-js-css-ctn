const capitalizar = (str) => {
  // Previene errores en caso de que un valor no sea string
  if (typeof str !== "string") {
    return;
  }

  // Convertimos los caracteres a minúsculas y los separamos en caso de nombre compuesto
  let name = str.toLowerCase().split(" ");

  // Por cada nombre transformamos la primera letra en mayúscula
  let capitalizedName = name.map(
    (singledName) => singledName.charAt(0).toUpperCase() + singledName.slice(1)
  );

  // Convertimos el array en un string con espacios entre nombres
  return capitalizedName.join(" ");
};

export default (json) => {
  return (
    json
      .map((user) => {
        // Destructuramos los valores necesarios
        const { nombre, apellido, apellido2 } = user;
        // Preparamos un array para facilitar el espaciado entre nombre y apellidos
        let completeName = [];

        // Si el nombre y apellidos existen los capitalizamos
        if (!!nombre) {
          completeName.push(capitalizar(nombre));
        }
        if (!!apellido) {
          completeName.push(capitalizar(apellido));
        }
        if (!!apellido2) {
          completeName.push(capitalizar(apellido2));
        }

        // Juntamos nombre y apellidos con esapcios entre ellos
        return completeName.join(" ");
      })
      // Añadimos un salto de línea para facilitar la lectura
      .join("<br>")
  );
};
