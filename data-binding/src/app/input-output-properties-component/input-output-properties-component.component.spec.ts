import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPropertiesComponentComponent } from './input-output-properties-component.component';

describe('InputOutputPropertiesComponentComponent', () => {
  let component: InputOutputPropertiesComponentComponent;
  let fixture: ComponentFixture<InputOutputPropertiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputPropertiesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputPropertiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
