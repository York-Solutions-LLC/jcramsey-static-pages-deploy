import { Component, Signal, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputField } from './number-input-field/number-input-field';
import { OpSelector } from './op-selector/op-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumberInputField, OpSelector],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Test Calculator');

  firstNumber: number = 0;
  operation: number = 0;
  secondNumber: number = 0;
  result: string = '0';

  onFirstNumberChange(value: number) {
    this.firstNumber = value;
    this.processNumbers();
  }

  onOperationChange(mode: number) {
    this.operation = mode;
    this.processNumbers();
  }

  onSecondNumberChange(value: number) {
    this.secondNumber = value;
    this.processNumbers();
  }

  processNumbers() {
    const operation = App.getOperation(this.operation);
    const result = operation(this.firstNumber, this.secondNumber);
    this.result = isNaN(result) ? 'No solution' : String(result);
  }

  public static addOperation(a: number, b: number): number {
    return a + b;
  }

  public static subOperation(a: number, b: number): number {
    return a - b;
  }

  public static mulOperation(a: number, b: number): number {
    return a * b;
  }

  public static divOperation(a: number, b: number): number {
    if (b === 0) return Number.NaN;
    return a / b;
  }

  public static getOperation(mode: number): (a: number, b: number) => number {
    if (mode === 1) return App.subOperation;
    if (mode === 2) return App.mulOperation;
    if (mode === 3) return App.divOperation;
    return App.addOperation;
  }
}
