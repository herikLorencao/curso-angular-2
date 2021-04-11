import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoDomComponent } from './acesso-dom.component';

describe('AcessoDomComponent', () => {
  let component: AcessoDomComponent;
  let fixture: ComponentFixture<AcessoDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
