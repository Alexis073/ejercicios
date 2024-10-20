export class Vehiculo {
  private marca: string;
  private modelo: string;
  private anio: number;

  constructor(marca: string, modelo: string, anio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getAnio(): number {
    return this.anio;
  }

  public setAnio(anio: number): void {
    this.anio = anio;
  }

  public toString(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.anio}`;
  }
}
