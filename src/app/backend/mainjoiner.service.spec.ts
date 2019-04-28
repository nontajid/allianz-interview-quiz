import { TestBed } from '@angular/core/testing';

import { MainjoinerService } from './mainjoiner.service';

describe('MainjoinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainjoinerService = TestBed.get(MainjoinerService);
    expect(service).toBeTruthy();
  });
});
