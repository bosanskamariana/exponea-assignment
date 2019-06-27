import { TestBed } from '@angular/core/testing';

import { CustomFilterService } from './custom-filter.service';

describe('CustomFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomFilterService = TestBed.get(CustomFilterService);
    expect(service).toBeTruthy();
  });
});
