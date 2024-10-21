"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personaje_1 = require("./Personaje");
class Mago extends Personaje_1.Personaje {
    constructor(nombre, puntosDeVida, habilidades, caracteristicas, mana) {
        super(nombre, puntosDeVida, habilidades, caracteristicas);
        this.mana = mana;
        this.posiblesAtaques = ["Rayo", "Explosión de Hielo"];
    }
    evolucionar(nivel, puntosDeVida, nuevasHabilidades, manaExtra) {
        super.evolicionar(nivel, puntosDeVida, nuevasHabilidades);
        this.mana += manaExtra;
    }
    toString() {
        return super.toString() + `Mana: ${this.getMana()}\n`;
    }
    getMana() {
        return this.mana;
    }
    setMana(mana) {
        this.mana = mana;
    }
}
exports.Mago = Mago;
