import { Auto } from "./Auto";
import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
  private vehiculos: (Vehiculo | Auto)[] = [];

  public agregarVehiculo(vehiculo: Vehiculo | Auto): void {
    this.vehiculos.push(vehiculo);
  }

  public modificarVehiculo(
    index: number,
    vehiculoModificado: Vehiculo | Auto
  ): void {
    if (this.vehiculos[index]) {
      this.vehiculos[index] = vehiculoModificado;
    }
  }

  public darDeBajaVehiculo(index: number): void {
    if (this.vehiculos[index]) {
      this.vehiculos.splice(index, 1);
    }
  }

  public getVehiculos(): string {
    return this.vehiculos.map((vehiculo) => vehiculo.toString()).join("\n");
  }
}
