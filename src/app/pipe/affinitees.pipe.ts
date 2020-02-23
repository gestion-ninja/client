import { Pipe, PipeTransform } from '@angular/core';
import { Affinitee } from '../modeles/affinitee';

@Pipe({
  name: 'affinitees'
})
export class AffiniteesPipe implements PipeTransform {

  transform(value: Affinitee[]): string {
    return value.map( affinitee => affinitee.libelle).join(' ')
  }

}
