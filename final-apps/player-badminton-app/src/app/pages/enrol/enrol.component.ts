import {Component, OnInit} from '@angular/core';
import {EnrolTableComponent} from "../../components/enrol-table/enrol-table.component";
import {NgClass} from '@angular/common';
import {Row} from "../../row";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";
import {AccordionComponent} from "../../components/accordion/accordion.component";
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";
import {LocalStorageService} from "../../local-storage.service";


@Component({
    selector: 'app-enrol-component',
    standalone: true,
    imports: [EnrolTableComponent, NgClass, HamburgerMenuComponent, AccordionComponent, NavComponent, EventInfoComponent],
    templateUrl: `enrol.component.html`,
})
export class EnrolComponent implements OnInit {
    menuOpen = false;
    rows: Row[] = [];

    constructor() {
    }

    ngOnInit(): void {

    }

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    }


    handleRowAddition(row: Row) {
        this.rows.push(row); // Add the row object to the rows array
        console.log('New Row Added:', row);
        this.saveRowsTolocalStorage()

    }

    handleRowRemoval() {

    }


    private loadRowsFromlocalStorage(): void {

    }

    private saveRowsTolocalStorage(): void {
    }


}

