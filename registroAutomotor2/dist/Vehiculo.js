"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAnio() {
        return this.anio;
    }
    setAnio(anio) {
        this.anio = anio;
    }
    toString() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.anio}`;
    }
}
exports.Vehiculo = Vehiculo;
