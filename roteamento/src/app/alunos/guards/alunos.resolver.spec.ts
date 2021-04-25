import { TestBed } from '@angular/core/testing';

import { AlunosResolver } from './alunos.resolver';

describe('AlunosResolver', () => {
  let resolver: AlunosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlunosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
