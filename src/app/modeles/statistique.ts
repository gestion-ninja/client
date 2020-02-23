import { Entity } from './entity'

export class Statistique extends Entity {

  ninjutsu: number

  taijutsu: number

  genjutsu: number

  intelligence: number

  force: number

  vitesse: number

  endurance: number

  sceau: number

  get total(): number {
    return this.ninjutsu
    + this.taijutsu
    + this.genjutsu
    + this.intelligence
    + this.force
    + this.vitesse
    + this.endurance
    + this.sceau
  }

}
