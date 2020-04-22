import { TestBed } from '@angular/core/testing';

import { WeatheredataService } from './weatheredata.service';

describe('WeatheredataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatheredataService = TestBed.get(WeatheredataService);
    expect(service).toBeTruthy();
  });
});
