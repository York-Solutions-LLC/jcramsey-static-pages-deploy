import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-op-selector',
    imports: [ ReactiveFormsModule ],
    templateUrl: './op-selector.html',
    styleUrl: './op-selector.scss',
})
export class OpSelector {
    @Output() cachedMode = new EventEmitter<number>();
    
    onRadioSelection(mode: number) {
        this.cachedMode.emit(mode);
    }
}
