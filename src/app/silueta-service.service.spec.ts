import { TestBed } from '@angular/core/testing';

import { SiluetaServiceService } from './silueta-service.service';

describe('SiluetaServiceService', () => {
  let service: SiluetaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiluetaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
