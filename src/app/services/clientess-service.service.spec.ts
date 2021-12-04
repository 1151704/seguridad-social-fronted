import { TestBed } from '@angular/core/testing';

import { ClientessServiceService } from './clientess-service.service';

describe('ClientessServiceService', () => {
  let service: ClientessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
