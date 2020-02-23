import { Injectable, Inject } from '@angular/core';
import { EntityService } from './entity-service.service';
import { Ninja } from '../modeles/ninja';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NinjaService extends EntityService<Ninja> {

  constructor(http: HttpClient) {
    super(http, 'ninja')
  }
}
