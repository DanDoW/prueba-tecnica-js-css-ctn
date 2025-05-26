export default (json) => {
  let exclude = 0;
  const total = json.reduce((accumulator, user) => {
    const { edad } = user;
    if (typeof edad !== "number" || edad < 0) {
      exclude++;
      return accumulator;
    }
    return accumulator + edad;
  }, 0);

  if (exclude == json.length) {
    return "No hay edades válidas";
  }

  return total / (json.length - exclude);
};
