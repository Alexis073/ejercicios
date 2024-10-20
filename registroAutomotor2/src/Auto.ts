import { Vehiculo } from "./Vehiculo";

export class Auto {
  private vehiculo: Vehiculo;

  constructor(marca: string, modelo: string, anio: number) {
    this.vehiculo = new Vehiculo(marca, modelo, anio);
  }

  public getVehiculo(): Vehiculo {
    return this.vehiculo;
  }

  public setVehiculo(vehiculo: Vehiculo): void {
    this.vehiculo = vehiculo;
  }

  public toString(): string {
    return `Auto: ${this.vehiculo.toString()}`;
  }
}
