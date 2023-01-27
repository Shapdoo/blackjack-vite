/**
 * Esta función nos permite obtener el valor de una carta
 * @param {String} carta - carta. Ejm: "2D"
 * @returns {Number} valor de la carta. Ejem: 2
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
