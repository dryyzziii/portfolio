import { TestBed } from '@angular/core/testing';

import { NavigationPortService } from './navigation-port.service';

describe('NavigationPortService', () => {
  let service: NavigationPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
