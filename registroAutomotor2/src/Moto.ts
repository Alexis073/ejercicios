import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
  private cilindrada: number;
  constructor(marca: string, modelo: string, anio: number, cilindrada: number) {
    super(marca, modelo, anio);
    this.cilindrada = cilindrada;
  }

  public toString(): string {
    return `${super.toString()}, Cilindrada: ${this.cilindrada} cc`;
  }
}
