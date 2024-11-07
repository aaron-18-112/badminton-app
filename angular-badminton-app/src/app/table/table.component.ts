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

    handleRemoveRow(index: number): void {
        this.rows.splice(index, 1);
    }
}