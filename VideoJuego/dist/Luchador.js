"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const Personaje_1 = require("./Personaje");
class Luchador extends Personaje_1.Personaje {
    constructor(nombre, puntosDeVida, habilidades, caracteristicas, fuerza) {
        super(nombre, puntosDeVida, habilidades, caracteristicas);
        this.fuerza = fuerza;
        this.posiblesAtaques = [
            "Puño Relampago",
            "Lluvia de Patadas",
            "Gancho Mortal",
        ];
    }
    evolucionar(nivel, puntosDeVida, nuevasHabilidades, fuerzaExtra) {
        super.evolicionar(nivel, puntosDeVida, nuevasHabilidades);
        this.fuerza += fuerzaExtra;
    }
    toString() {
        return super.toString() + `Fuerza: ${this.getFuerza()}\n`;
    }
    getFuerza() {
        return this.fuerza;
    }
    setFuerza(fuerza) {
        this.fuerza = fuerza;
    }
}
exports.Luchador = Luchador;
