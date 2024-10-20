"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    modificarVehiculo(index, vehiculoModificado) {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculoModificado;
        }
    }
    darDeBajaVehiculo(index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    }
    getVehiculos() {
        return this.vehiculos.map((vehiculo) => vehiculo.toString()).join("\n");
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
