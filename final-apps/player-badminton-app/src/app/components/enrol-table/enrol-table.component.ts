import { Component, EventEmitter, Input, Output, OnInit, PLATFORM_ID } from '@angular/core';
import { Row } from "../../row";
import { isPlatformBrowser, NgFor, NgStyle } from '@angular/common';  // Import isPlatformBrowser
import { Inject } from '@angular/core';  // To inject the PLATFORM_ID token

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
export class EnrolTableComponent implements OnInit {
    @Input() rows: Row[] = [];
    @Output() removeRow = new EventEmitter<number>();

    constructor(@Inject(PLATFORM_ID) private platformId: any) { }

    ngOnInit(): void {
        // Check if the platform is a browser
        if (isPlatformBrowser(this.platformId)) {
            // This block only runs on the browser side (not SSR)
            const savedRows = localStorage.getItem('rows');
            if (savedRows) {
                this.rows = JSON.parse(savedRows); // Populate rows from localStorage
            }
        }
    }

    handleRemoveRow(index: number): void {
        // Remove row from array
        this.rows.splice(index, 1);

        // Update localStorage after row removal
        this.updateLocalStorage();
    }

    updateLocalStorage(): void {
        // Update localStorage with the current rows array
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('rows', JSON.stringify(this.rows));
        }
    }

    addRow(row: Row): void {
        // Add the new row to the rows array
        this.rows.push(row);

        // Update localStorage after adding a new row
        this.updateLocalStorage();
    }

    clearLocalStorage(): void{
        if(isPlatformBrowser(this.platformId)) {
            localStorage.clear();
            this.rows = [];
        }
    }
}
