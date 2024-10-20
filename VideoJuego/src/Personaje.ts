export class Personaje {
  private nombre: string;
  private nivel: number;
  private puntosDeVida: number;
  private habilidades: Array<string> = [];
  private caracteristicas: Array<string> = [];

  constructor(
    nombre: string,
    puntosDeVida: number,
    habilidades: Array<string>,
    caracteristicas: Array<string>
  ) {
    this.nombre = nombre;
    this.puntosDeVida = puntosDeVida;
    this.habilidades = habilidades;
    this.caracteristicas = caracteristicas;
    this.nivel = 1;
  }

  public evolicionar(
    nivel: number,
    puntosDeVida: number,
    nuevasHabilidades: Array<string>
  ) {
    this.nivel += nivel;
    this.puntosDeVida += puntosDeVida;
    nuevasHabilidades.forEach((habilidad) => {
      this.habilidades.push(habilidad);
    });
  }

  public atacar(): string {
    return "Atacando";
  }

  public defender(): string {
    return "Defendiendo";
  }

  public toString(): string {
    return (
      "----- Personaje -----\n" +
      `Nombre: ${this.getNombre()}\n` +
      `Nivel: ${this.getNivel()}\n` +
      `Puntos de Vida: ${this.getPuntosDeVida()}\n` +
      `Habilidades: ${this.getHabilidades().join(", ")}\n`
    );
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getNivel(): number {
    return this.nivel;
  }

  public getPuntosDeVida(): number {
    return this.puntosDeVida;
  }

  public getHabilidades(): Array<string> {
    return this.habilidades;
  }

  public getCaracteristicas(): Array<string> {
    return this.caracteristicas;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public setHabilidades(habilidades: Array<string>) {
    this.habilidades = habilidades;
  }

  public setCaracteristicas(caracteristicas: Array<string>) {
    this.caracteristicas = caracteristicas;
  }
}
