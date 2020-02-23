import { TestBed } from '@angular/core/testing';

import { EntityService } from './entity-service.service';
import { Entity } from '../modeles/entity';

describe('BaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityService<Entity> = TestBed.get(EntityService);
    expect(service).toBeTruthy();
  });
});
