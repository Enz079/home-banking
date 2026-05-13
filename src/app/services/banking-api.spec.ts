import { TestBed } from '@angular/core/testing';

import { BankingApi } from './banking-api';

describe('BankingApi', () => {
  let service: BankingApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
