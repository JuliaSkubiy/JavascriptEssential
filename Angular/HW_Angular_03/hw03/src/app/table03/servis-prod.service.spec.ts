import { TestBed } from '@angular/core/testing';

import { ServisProdService } from './servis-prod.service';

describe('ServisProdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServisProdService = TestBed.get(ServisProdService);
    expect(service).toBeTruthy();
  });
});
