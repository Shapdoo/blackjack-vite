import _ from "underscore";

/**
 * Esta función crea una nueva baraja.
 * @param {Array<String>} tipos - tipos de carta normales, Ejem: ["C", "D", "H", "S"].
 * @param {Array<String>} especiales - tipos de cartas especiales, Ejem: ["A", "J", "Q", "K"].
 * @returns {Array<String>} baraja nueva.
 */
export const crearDeck = (tipos, especiales) => {

  if( !tipos || !especiales) throw new Error('Datos incorrectos', {tipos, especiales})
  if( tipos.length === 0 || especiales.length === 0) throw new Error('Datos incorrectos', {tipos, especiales})

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};
