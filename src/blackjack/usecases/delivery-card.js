/**
 * Esta función permite pedir una carta de la baraja.
 * @param {Array<String>} deck - arreglo de string de cartas.
 * @returns {String} retorna la carta de la baraja.
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0) throw "No hay cartas en el deck";

  return deck.pop();
};
