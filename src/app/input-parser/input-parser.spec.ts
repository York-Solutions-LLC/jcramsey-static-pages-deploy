import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputParser } from './input-parser';

describe('InputParser', () => {
  let component: InputParser;
  let fixture: ComponentFixture<InputParser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputParser],
    }).compileComponents();

    fixture = TestBed.createComponent(InputParser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
