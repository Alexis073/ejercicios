import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
  private fuerza: number;

  constructor(
    nombre: string,
    puntosDeVida: number,
    habilidades: Array<string>,
    caracteristicas: Array<string>,
    fuerza: number
  ) {
    super(nombre, puntosDeVida, habilidades, caracteristicas);
    this.fuerza = fuerza;
    this.posiblesAtaques = [
      "Puño Relampago",
      "Lluvia de Patadas",
      "Gancho Mortal",
    ];
  }

  public evolucionar(
    nivel: number,
    puntosDeVida: number,
    nuevasHabilidades: Array<string>,
    fuerzaExtra: number
  ): void {
    super.evolicionar(nivel, puntosDeVida, nuevasHabilidades);
    this.fuerza += fuerzaExtra;
  }

  public toString(): string {
    return super.toString() + `Fuerza: ${this.getFuerza()}\n`;
  }

  public getFuerza(): number {
    return this.fuerza;
  }

  public setFuerza(fuerza: number) {
    this.fuerza = fuerza;
  }
}
