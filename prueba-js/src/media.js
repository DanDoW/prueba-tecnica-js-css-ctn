export default (json) => {
  // Declaramos la variable para controlar valores inválidos
  let exclude = 0;

  const total = json.reduce((accumulator, user) => {
    const { edad } = user;
    // Si el valor es inválido incrementamos el contador de exclude y no modificamos el total
    if (typeof edad !== "number" || edad < 0) {
      exclude++;
      return accumulator;
    }
    // Si el valor es válido añadimos la edad al total
    return accumulator + edad;
  }, 0);

  // En caso de que ningún valor sea válido gestionamos el error
  if (exclude == json.length) {
    return "No hay edades válidas";
  }

  // Damos el resultado de la media, recomendaría plantear aquí cómo avisar de los resultados que han sido excluidos
  return total / (json.length - exclude);
};
