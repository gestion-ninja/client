import { Injectable } from '@angular/core';
import { ParametreService } from './parametre.service';
import { RangNinja } from '../modeles/rang-ninja';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RangNinjaService extends ParametreService<RangNinja, string> {

  constructor(
    protected http: HttpClient
  ) {
    super('rangninja', http)
  }
}
