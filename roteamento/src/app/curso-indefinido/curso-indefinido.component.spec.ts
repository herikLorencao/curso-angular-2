import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoIndefinidoComponent } from './curso-indefinido.component';

describe('CursoIndefinidoComponent', () => {
  let component: CursoIndefinidoComponent;
  let fixture: ComponentFixture<CursoIndefinidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoIndefinidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoIndefinidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
