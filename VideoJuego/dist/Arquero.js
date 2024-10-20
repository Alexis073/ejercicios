"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre, puntosDeVida, habilidades, caracteristicas, agilidad) {
        super(nombre, puntosDeVida, habilidades, caracteristicas);
        this.agilidad = agilidad;
    }
    evolucionar(nivel, puntosDeVida, nuevasHabilidades, agilidadExtra) {
        super.evolicionar(nivel, puntosDeVida, nuevasHabilidades);
        this.agilidad += agilidadExtra;
    }
    toString() {
        return super.toString() + `Mana: ${this.getAgilidad()}\n`;
    }
    getAgilidad() {
        return this.agilidad;
    }
    setAgilidad(agilidad) {
        this.agilidad = agilidad;
    }
}
exports.Arquero = Arquero;
