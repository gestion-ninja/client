import { Pipe, PipeTransform } from '@angular/core';
import { Ninja } from '../modeles/ninja';

@Pipe({
  name: 'statut'
})
export class StatutPipe implements PipeTransform {

  transform(ninja: Ninja): string {
    const hasMissions = ninja.missions.length > 0
    const hasMissionEnCours = ninja.missions.some( mission => mission.etatMission.terminee === false)
    let disponible = true
    if (hasMissions) {
      disponible = !hasMissionEnCours
    }
    return disponible ? 'Disponible' : 'En mission'
  }

}
