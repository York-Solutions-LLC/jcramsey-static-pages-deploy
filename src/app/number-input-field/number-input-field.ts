import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-number-input-field',
    imports: [ ReactiveFormsModule ],
    templateUrl: './number-input-field.html',
    styleUrl: './number-input-field.scss',
})
export class NumberInputField {
    control = new FormControl<string>('0', { nonNullable: true });

    @Output() cachedNumber = new EventEmitter<number>();

    @HostListener('input', ['$event'])
    onInput(event: Event): void {
        const value = (event.target as HTMLInputElement).value.trim();
        const filtered = NumberInputField.applyInputFilter(value);
        this.control?.setValue(filtered);
        this.cachedNumber.emit((filtered.length === 0) ? 0 : Number(filtered));
    }

    static applyInputFilter(input: number): string {
        const numberRegex = /[0-9]/;
        const value = input.trim();
        
        let filtered = "";
        let foundDot = false;
        for (let i = 0; i < value.length; i++) {
            const c = value[i];
            if (c === '.') {
                if (foundDot) continue;
                filtered += '.';
                foundDot = true;
                continue;
            }
            if (!numberRegex.test(c)) continue;
            filtered += c;
        }

        return filtered;
    }
}
