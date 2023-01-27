import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * Esta funcion permite realizar el turno de la computadora.
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML referencia al html para colocar los puntos
 * @param {HTMLElement} divCartasComputadora referencia al html para colocar los puntos
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {
  if (!puntosMinimos) throw new Error("Puntos minimos requeridos.", { puntosMinimos });
  if (!deck) throw new Error("Deck es requerido.", { deck });

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta)
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
