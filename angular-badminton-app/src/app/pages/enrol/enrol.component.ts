import {Component} from '@angular/core';
import {EnrolTableComponent} from "../../components/enrol-table/enrol-table.component";
import {NgClass} from '@angular/common';
import {Row} from "../../row";
import {DateAndTimeComponent} from "../../components/date-and-time/date-and-time.component";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";
import {AccordionComponent} from "../../components/accordion/accordion.component";
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";


@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        EnrolTableComponent,
        DateAndTimeComponent,
        NgClass,
        HamburgerMenuComponent,
        AccordionComponent,
        NavComponent,
        EventInfoComponent
    ],
    templateUrl: `enrol.component.html`,
})
export class EnrolComponent {
    menuOpen = false;
    rows: Row[] = [];  // Define rows as an array of Row objects

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

