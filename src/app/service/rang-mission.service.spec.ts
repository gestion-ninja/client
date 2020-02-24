import { TestBed } from '@angular/core/testing';

import { RangMissionService } from './rang-mission.service';

describe('RangMissionService', () => {
  let service: RangMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
