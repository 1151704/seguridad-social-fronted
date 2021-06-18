import { TestBed } from '@angular/core/testing';

import { ActividadesEconomicasService } from './actividades-economicas.service';

describe('ActividadesEconomicasService', () => {
  let service: ActividadesEconomicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesEconomicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
