import { TestBed } from '@angular/core/testing';

import { MenuArrayService } from './menu-array.service';

describe('MenuArrayService', () => {
  let service: MenuArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
