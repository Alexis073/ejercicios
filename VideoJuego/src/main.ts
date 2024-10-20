import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";

const Merlin = new Mago(
  "Merlin",
  120,
  ["Bola de Fuego", "Escudo Mágico", "Teletransporte"],
  ["Control de Elementos", "Alta Inteligencia"],
  100
);
const Legolas = new Arquero(
  "Legolas",
  150,
  ["Disparo Preciso", "Lluvia de Flechas", "Disparo en Movimiento"],
  ["Alta Precisión", "Gran Agilidad"],
  30
);

const Conan = new Luchador(
  "Conan",
  180,
  ["Golpe Poderoso", "Bloqueo", "Ráfaga de Ataques"],
  ["Alta Resistencia", "Gran Fuerza"],
  50
);

Merlin.evolucionar(2, 60, ["Lluvia de Fuego"], 30);
console.log(Merlin.toString());

Legolas.evolicionar(4, 140, ["Flecha Invisible"]);
console.log(Legolas.toString());

Conan.evolucionar(1, 25, ["Carga", "Defensa Imbatible"], 10);
console.log(Conan.toString());
