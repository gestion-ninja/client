import { Pipe, PipeTransform } from '@angular/core';
import { Statistique } from '../modeles/statistique';

@Pipe({
  name: 'statistiqueTotal'
})
export class StatistiqueTotalPipe implements PipeTransform {

  transform(statistique: Statistique): number {
    return statistique.endurance
    + statistique.force
    + statistique.genjutsu
    + statistique.intelligence
    + statistique.ninjutsu
    + statistique.sceau
    + statistique.taijutsu
    + statistique.vitesse
  }

}
