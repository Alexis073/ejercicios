"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Camion extends Vehiculo_1.Vehiculo {
    constructor(marca, modelo, anio, capacidadCarga) {
        super(marca, modelo, anio);
        this.capacidadCarga = capacidadCarga;
    }
    toString() {
        return `${super.toString()}, Capacidad de Carga: ${this.capacidadCarga} toneladas`;
    }
}
exports.Camion = Camion;
