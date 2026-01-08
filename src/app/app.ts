import { Component, Signal, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputField } from './number-input-field/number-input-field';
import { Operator, operators } from './operators';
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
  operation: Operator = operators[0];
  secondNumber: number = 0;
  result: string = '0';

  onFirstNumberChange(value: number) {
    this.firstNumber = value;
    this.processNumbers();
  }

  onOperationChange(mode: Operator) {
    this.operation = mode;
    this.processNumbers();
  }

  onSecondNumberChange(value: number) {
    this.secondNumber = value;
    this.processNumbers();
  }

  processNumbers() {
    const result = this.operation.f(this.firstNumber, this.secondNumber);
    this.result = isNaN(result) ? 'No solution' : String(result);
  }
}
