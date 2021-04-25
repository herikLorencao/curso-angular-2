import { TestBed } from '@angular/core/testing';

import { AlunosDeactivatedGuard } from './alunos-deactivated.guard';

describe('AlunosDeactivatedGuard', () => {
  let guard: AlunosDeactivatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunosDeactivatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
