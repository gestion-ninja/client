import { RangNinja } from './rang-ninja.enum'
import { Affinite } from './affinite.enum'

export class Ninja {

  nom: string

  prenom: string

  rang: RangNinja

  affinitees: Affinite[]

  techniques: string[]

  statistiques: {
    ninjutsu: number,
    taijutsu: number,
    genjutsu: number,
    intelligence: number,
    force: number,
    vitesse: number,
    endurance: number,
    sceau: number,
    total: number
  }

}
