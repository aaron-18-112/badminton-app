import {Component, OnInit} from '@angular/core';
import {EnrolTableComponent} from "../../components/enrol-table/enrol-table.component";
import {NgClass} from '@angular/common';
import {Row} from "../../row";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";
import {AccordionComponent} from "../../components/accordion/accordion.component";
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";
import {SessionStorageService} from "../../session-storage.service";


@Component({
    selector: 'app-enrol-component',
    standalone: true,
    imports: [EnrolTableComponent, NgClass, HamburgerMenuComponent, AccordionComponent, NavComponent, EventInfoComponent],
    templateUrl: `enrol.component.html`,
})
export class EnrolComponent implements OnInit {
    menuOpen = false;
    rows: Row[] = [];

    constructor(private sessionStorageService: SessionStorageService) {
    }

    ngOnInit(): void {
        this.loadRowsFromsessionStorage();
        this.sessionStorageService.setItem('rowCount', this.rows.length);
    }

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    }


    handleRowAddition(row: Row) {
        this.rows.push(row); // Add the row object to the rows array
        console.log('New Row Added:', row);
        this.saveRowsTosessionStorage()

    }

    handleRowRemoval(index: number) {
        this.rows.splice(index, 1);  // Remove the row at the specified index
        this.saveRowsTosessionStorage()
    }


    private loadRowsFromsessionStorage(): void {
        const savedRows = this.sessionStorageService.getItem<Row[]>('rows');
        if (savedRows) {
            this.rows = savedRows;
            console.log('Rows loaded from sessionStorage:', this.rows);
        }
    }

    private saveRowsTosessionStorage(): void {
        this.sessionStorageService.setItem('rows', this.rows);
    }


}

