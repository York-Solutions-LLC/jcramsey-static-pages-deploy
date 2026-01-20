import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-parser',
  imports: [ReactiveFormsModule],
  templateUrl: './input-parser.html',
  styleUrl: './input-parser.scss',
})
export class InputParser {
  control = new FormControl<string>('2+2', { nonNullable: true });

  @Output() cachedNumber = new EventEmitter<number>();

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    // Tokenize string
    const elements: string[] = [];
    const cancelParser = () => {
      this.cachedNumber.emit(Number.NaN);
    };
    let isFirst = true;
    let operator = '';
    let buffer = '';
    const value = (event.target as HTMLInputElement).value.replaceAll(/ +/g, '');
    for (let i = 0; i < value.length; i++) {
      const c = value[i];
      const couldBeNegative = () => {
        return (isFirst || operator.length === 0) && buffer.length === 0;
      };
      isFirst = false;
      if (couldBeNegative() && c === '-') {
        buffer += c;
      } else if (
        c === '+' ||
        c === '-' ||
        c === '*' ||
        c === '/' ||
        c === '\\' ||
        c === '%' ||
        c === '^'
      ) {
        if (buffer.length > 0) {
          elements.push(buffer);
          buffer = '';
        }
        operator = c;
        elements.push(c);
      } else {
        operator = '';
        buffer += c;
      }
    }
    this.cachedNumber.emit(4);
  }
}
