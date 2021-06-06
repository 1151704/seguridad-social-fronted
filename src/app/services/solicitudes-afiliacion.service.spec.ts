import { TestBed } from '@angular/core/testing';

import { SolicitudesAfiliacionService } from './solicitudes-afiliacion.service';

describe('SolicitudesAfiliacionService', () => {
  let service: SolicitudesAfiliacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesAfiliacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
