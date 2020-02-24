import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Entity } from '../modeles/entity';
import { BaseService } from './base.service';

export abstract class EntityService<T extends Entity, ID extends string | number> extends BaseService {

  protected http: HttpClient

  constructor(http: HttpClient, base: string) {
    super(base)
    this.http = http
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url()).pipe(retry(1))
  }

  getOne(id: ID): Observable<T> {
    return this.http.get<T>(this.url(':id', {name: 'id', value: id}))
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.url(), entity)
  }

  update(entity: T): Observable<T> {
    return this.http.put<T>(this.url(':id', {name: 'id', value: entity.id}), entity)
  }

  delete(entity: T): Observable<Object> {
    return this.http.delete<Object>(this.url(':id', {name: 'id', value: entity.id}))
  }

}
