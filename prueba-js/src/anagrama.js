const simplify = (str) => {
  return (
    str
      // Al buscar una expresión regular para evitar los problemas con las tildes he encontrado esta solución que incluye el
      // normalize para separar las tildes y diéresis de sus caracteres
      .normalize("NFD")
      // simplificamos el string convirtiendo los caracteres a minúsculas
      .toLowerCase()
      // convertimos el string en array
      .split("")
      // eliminamos cualquier carácter que no sea una letra simple
      .map((l) => (/^[a-z]$/i.test(l) ? l : ""))
      // ordenamos los caracteres
      .sort()
      // convertimos de nuevo en string para facilitar la comparación
      .join("")
  );
};

export default (word1, word2) => {
  return simplify(word1) == simplify(word2);
};
