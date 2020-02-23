import { Statistique } from './statistique'
import { RangNinja } from './rang-ninja'
import { Affinitee } from './affinitee'
import { Entity } from './entity'
import { Mission } from './mission'

export class Ninja extends Entity {

  nom: string

  prenom: string

  rang: RangNinja

  affinitees: Affinitee[]

  techniques: string[]

  statistiques: Statistique

  missions: Mission[]

  get statut(): string {
    const hasMissions = this.missions.length > 0
    const hasMissionEnCours = this.missions.some( mission => mission.etatMission.terminee === false)
    let disponible = true
    console.log(hasMissions)
    if (hasMissions) {
      disponible = !hasMissionEnCours
    }
    return disponible ? 'Disponible' : 'En mission'
  }

}
