import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingStyleComponent } from './data-binding-style.component';

describe('DataBindingStyleComponent', () => {
  let component: DataBindingStyleComponent;
  let fixture: ComponentFixture<DataBindingStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
