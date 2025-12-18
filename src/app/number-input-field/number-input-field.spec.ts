import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputField } from './number-input-field';

describe('NumberInputField', () => {
  let component: NumberInputField;
  let fixture: ComponentFixture<NumberInputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
