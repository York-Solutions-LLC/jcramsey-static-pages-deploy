import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputField } from './number-input-field';

describe('NumberInputField', () => {
  let component: NumberInputField;
  let fixture: ComponentFixture<NumberInputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputField],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberInputField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recognize zero', () => {
    const result = NumberInputField.applyInputFilter('0');
    expect(result).toBe('0');
  });

  it('should recognize integers', () => {
    const result = NumberInputField.applyInputFilter('5');
    expect(result).toBe('5');
  });

  it('should respect unnecessary decimal points', () => {
    const result = NumberInputField.applyInputFilter('5.0');
    expect(result).toBe('5.0');
  });

  it('should remove excessive decimal points', () => {
    const result = NumberInputField.applyInputFilter('5.1.0');
    expect(result).toBe('5.10');
  });

  it('should respect leading zero', () => {
    const result = NumberInputField.applyInputFilter('05');
    expect(result).toBe('05');
  });

  it('should remove letters', () => {
    const result = NumberInputField.applyInputFilter('5f');
    expect(result).toBe('5');
  });

  it('should respect leading minus', () => {
    const result = NumberInputField.applyInputFilter('-5');
    expect(result).toBe('-5');
  });

  it('should remove excessive minus', () => {
    const result = NumberInputField.applyInputFilter('--5');
    expect(result).toBe('-5');
  });

  it('should remove middle minus', () => {
    const result = NumberInputField.applyInputFilter('-5-8');
    expect(result).toBe('-58');
  });

  it('should ignore spaces letters', () => {
    const result = NumberInputField.applyInputFilter('  50 01   ');
    expect(result).toBe('5001');
  });

  it('should map empty inputs to zero', () => {
    const result = NumberInputField.applyInputFilter('');
    const asNumber = NumberInputField.filtered2Number(result);
    expect(asNumber).toBe(0);
  });

  it('should map integers', () => {
    const result = NumberInputField.applyInputFilter('5');
    const asNumber = NumberInputField.filtered2Number(result);
    expect(asNumber).toBe(5);
  });

  it('should map zero', () => {
    const result = NumberInputField.applyInputFilter('0');
    const asNumber = NumberInputField.filtered2Number(result);
    expect(asNumber).toBe(0);
  });

  it('should map decimals', () => {
    const result = NumberInputField.applyInputFilter('5.6');
    const asNumber = NumberInputField.filtered2Number(result);
    expect(asNumber).toBe(5.6);
  });

  it('should map negatives', () => {
    const result = NumberInputField.applyInputFilter('-4');
    const asNumber = NumberInputField.filtered2Number(result);
    expect(asNumber).toBe(-4);
  });
});
