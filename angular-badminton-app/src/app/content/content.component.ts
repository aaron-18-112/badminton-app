import {Component} from '@angular/core';
import {TableComponent} from "../table/table.component";
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import {NgClass} from '@angular/common';
import {HamburgerMenuComponent} from "../hamburger-menu/hamburger-menu.component";
import {AccordionComponent} from "../accordion/accordion.component";

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        TableComponent,
        DateAndTimeComponent,
        NgClass,
        HamburgerMenuComponent,
        AccordionComponent
    ],
    templateUrl: `content.component.html`,
    styles: ``
})
export class ContentComponent {
    menuOpen = false;
    rows: Row[] = [];  // Define rows as an array of Row objects

    get rowCount(): number {
        return this.rows.length;
    }

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    }

    handleRowAddition(row: Row) {
        this.rows.push(row); // Add the row object to the rows array
        console.log('New Row Added:', row);
    }

    handleRowRemoval(index: number) {
        this.rows.splice(index, 1);  // Remove the row at the specified index
    }

}

interface Row {
    name: string;
    email?: string;
}

