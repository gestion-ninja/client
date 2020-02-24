import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Parametre } from '../modeles/parametre';

export abstract class ParametreService<T extends Parametre, ID extends string | number> extends BaseService {

  protected http: HttpClient

  constructor(base: string, http: HttpClient) {
    super(`parametre/${base}`)
    this.http = http
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url())
  }

  getOne(id: ID): Observable<T> {
    return this.http.get<T>(this.url(':id', {name: 'id', value: id}))
  }
}
