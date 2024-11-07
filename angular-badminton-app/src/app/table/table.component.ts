import {NgFor, NgStyle} from '@angular/common';
import {Component, Input} from '@angular/core';

interface Row {
    name: string;
    email?: string;
}

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        NgStyle,
        NgFor
    ],
    templateUrl: 'table.component.html'
})

export class TableComponent {
    @Input() rows: Row[] = [];

    handleAddRow(row: Row): void {
        this.rows.push(row);  // Push the Row object, not just a string
    }

    handleRemoveRow(index: number): void {
        this.rows.splice(index, 1);
    }
}