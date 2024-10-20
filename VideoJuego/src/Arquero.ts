import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
  private agilidad: number;

  constructor(
    nombre: string,
    puntosDeVida: number,
    habilidades: Array<string>,
    caracteristicas: Array<string>,
    agilidad: number
  ) {
    super(nombre, puntosDeVida, habilidades, caracteristicas);
    this.agilidad = agilidad;
  }

  public evolucionar(
    nivel: number,
    puntosDeVida: number,
    nuevasHabilidades: Array<string>,
    agilidadExtra: number
  ): void {
    super.evolicionar(nivel, puntosDeVida, nuevasHabilidades);
    this.agilidad += agilidadExtra;
  }

  public toString(): string {
    return super.toString() + `Mana: ${this.getAgilidad()}\n`;
  }

  public getAgilidad(): number {
    return this.agilidad;
  }

  public setAgilidad(agilidad: number) {
    this.agilidad = agilidad;
  }
}
