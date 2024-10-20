"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Moto extends Vehiculo_1.Vehiculo {
    constructor(marca, modelo, anio, cilindrada) {
        super(marca, modelo, anio);
        this.cilindrada = cilindrada;
    }
    toString() {
        return `${super.toString()}, Cilindrada: ${this.cilindrada} cc`;
    }
}
exports.Moto = Moto;
