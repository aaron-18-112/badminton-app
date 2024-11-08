import {NgFor, NgStyle} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Row} from "../../row";

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        NgStyle,
        NgFor
    ],
    templateUrl: 'enrol-table.component.html',
    styleUrls: ['enrol-table.component.css']
})

export class EnrolTableComponent {
    @Input() rows: Row[] = [];
    @Output() removeRow = new EventEmitter<number>();

    handleRemoveRow(index: number): void {
        this.removeRow.emit(index);
    }
}