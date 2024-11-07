import { NgStyle, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Row {
  name: string;
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
    rows: Row[] = [
      { name: 'Row 1' },
      { name: 'Row 2' },
      { name: 'Row 3' }
    ];

    handleRemoveRow(index: number): void {
      this.rows.splice(index, 1);
    }
  }