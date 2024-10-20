import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  private capacidadCarga: number;
  constructor(
    marca: string,
    modelo: string,
    anio: number,
    capacidadCarga: number
  ) {
    super(marca, modelo, anio);
    this.capacidadCarga = capacidadCarga;
  }

  public toString(): string {
    return `${super.toString()}, Capacidad de Carga: ${
      this.capacidadCarga
    } toneladas`;
  }
}
