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
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})

export class TableComponent {
    @Input() rows: Row[] = [];
    @Output() removeRow = new EventEmitter<number>();

    handleRemoveRow(index: number): void {
        this.removeRow.emit(index);
    }
}