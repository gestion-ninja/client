import { Injectable } from '@angular/core';
import { ParametreService } from './parametre.service';
import { Affinitee } from '../modeles/affinitee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffiniteesService extends ParametreService<Affinitee, string>{

  constructor(
    protected http: HttpClient
    ) {
      super('affinitee', http)
    }
}
