import { Injectable } from '@angular/core';
import { Entity } from '../modeles/entity';
import { EntityService } from './entity-service.service';
import { Mission } from '../modeles/mission';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService extends EntityService<Mission> {

  constructor(http: HttpClient) {
    super(http, 'mission')
  }
}
