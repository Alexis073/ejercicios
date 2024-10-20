"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, puntosDeVida, habilidades, caracteristicas) {
        this.habilidades = [];
        this.caracteristicas = [];
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
        this.habilidades = habilidades;
        this.caracteristicas = caracteristicas;
        this.nivel = 1;
    }
    evolicionar(nivel, puntosDeVida, nuevasHabilidades) {
        this.nivel += nivel;
        this.puntosDeVida += puntosDeVida;
        nuevasHabilidades.forEach((habilidad) => {
            this.habilidades.push(habilidad);
        });
    }
    atacar() {
        return "Atacando";
    }
    defender() {
        return "Defendiendo";
    }
    toString() {
        return ("----- Personaje -----\n" +
            `Nombre: ${this.getNombre()}\n` +
            `Nivel: ${this.getNivel()}\n` +
            `Puntos de Vida: ${this.getPuntosDeVida()}\n` +
            `Habilidades: ${this.getHabilidades().join(", ")}\n`);
    }
    getNombre() {
        return this.nombre;
    }
    getNivel() {
        return this.nivel;
    }
    getPuntosDeVida() {
        return this.puntosDeVida;
    }
    getHabilidades() {
        return this.habilidades;
    }
    getCaracteristicas() {
        return this.caracteristicas;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setHabilidades(habilidades) {
        this.habilidades = habilidades;
    }
    setCaracteristicas(caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}
exports.Personaje = Personaje;