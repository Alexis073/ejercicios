import { Personaje } from "./Personaje";

export class Mago extends Personaje {
  private mana: number;

  constructor(
    nombre: string,
    puntosDeVida: number,
    habilidades: Array<string>,
    caracteristicas: Array<string>,
    mana: number
  ) {
    super(nombre, puntosDeVida, habilidades, caracteristicas);
    this.mana = mana;
    this.posiblesAtaques = ["Rayo", "Explosión de Hielo"];
  }

  public evolucionar(
    nivel: number,
    puntosDeVida: number,
    nuevasHabilidades: Array<string>,
    manaExtra: number
  ): void {
    super.evolicionar(nivel, puntosDeVida, nuevasHabilidades);
    this.mana += manaExtra;
  }

  public toString(): string {
    return super.toString() + `Mana: ${this.getMana()}\n`;
  }

  public getMana(): number {
    return this.mana;
  }

  public setMana(mana: number) {
    this.mana = mana;
  }
}
