const capitalizar = (str) => {
  if (!str || typeof str !== "string") {
    return;
  }

  let name = str.toLowerCase().split(" ");

  let capitalizedName = name.map(
    (singledName) => singledName.charAt(0).toUpperCase() + singledName.slice(1)
  );

  return capitalizedName.join(" ");
};

export default (json) => {
  return json
    .map((user) => {
      const { nombre, apellido, apellido2 } = user;
      let completeName = [];

      if (!!nombre) {
        completeName.push(capitalizar(nombre));
      }
      if (!!apellido) {
        completeName.push(capitalizar(apellido));
      }
      if (!!apellido2) {
        completeName.push(capitalizar(apellido2));
      }

      return completeName.join(" ");
    })
    .join("<br>");
};
