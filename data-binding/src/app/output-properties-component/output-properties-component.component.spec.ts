import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertiesComponentComponent } from './output-properties-component.component';

describe('OutputPropertiesComponentComponent', () => {
  let component: OutputPropertiesComponentComponent;
  let fixture: ComponentFixture<OutputPropertiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPropertiesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
