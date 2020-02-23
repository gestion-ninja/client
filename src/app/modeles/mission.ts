import { Entity } from './entity'
import { RangMission } from './rang-mission'
import { Ninja } from './ninja'
import { EtatMission } from './etat-mission'

export class Mission extends Entity {

  titre: string

  description: string

  rang: RangMission

  recompense: number

  dateButoir?: Date

  ninjas: Ninja[]

  etatMission: EtatMission

}
