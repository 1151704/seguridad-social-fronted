import { TestBed } from '@angular/core/testing';

import { CuentaCobroService } from './cuenta-cobro.service';

describe('CuentaCobroService', () => {
  let service: CuentaCobroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaCobroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
