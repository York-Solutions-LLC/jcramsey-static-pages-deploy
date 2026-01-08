import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Operator, operators } from '../operators';

@Component({
  selector: 'app-op-selector',
  imports: [ReactiveFormsModule],
  templateUrl: './op-selector.html',
  styleUrl: './op-selector.scss',
})
export class OpSelector {
  operators = operators;
  @Output() cachedMode = new EventEmitter<Operator>();

  onRadioSelection(mode: number) {
    this.cachedMode.emit(operators[mode]);
  }
}
