import { TestBed } from '@angular/core/testing';

import { Data12Service } from './data12.service';

describe('Data12Service', () => {
  let service: Data12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
