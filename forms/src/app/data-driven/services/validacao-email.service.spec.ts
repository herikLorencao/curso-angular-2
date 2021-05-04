import { TestBed } from '@angular/core/testing';

import { ValidacaoEmailService } from './validacao-email.service';

describe('ValidacaoEmailService', () => {
  let service: ValidacaoEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacaoEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
