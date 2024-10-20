"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Auto {
    constructor(marca, modelo, anio) {
        this.vehiculo = new Vehiculo_1.Vehiculo(marca, modelo, anio);
    }
    getVehiculo() {
        return this.vehiculo;
    }
    setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }
    toString() {
        return `Auto: ${this.vehiculo.toString()}`;
    }
}
exports.Auto = Auto;
