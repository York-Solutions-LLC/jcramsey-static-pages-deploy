import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpSelector } from './op-selector';

describe('OpSelector', () => {
  let component: OpSelector;
  let fixture: ComponentFixture<OpSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
