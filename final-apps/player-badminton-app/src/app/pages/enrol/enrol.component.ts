import {Component, OnInit} from '@angular/core';
import {EnrolTableComponent} from "../../components/enrol-table/enrol-table.component";
import {NgClass} from '@angular/common';
import {RowModel} from "../../models/row.model";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";
import {AccordionComponent} from "../../components/accordion/accordion.component";
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";



@Component({
    selector: 'app-enrol-component',
    standalone: true,
    imports: [EnrolTableComponent, NgClass, HamburgerMenuComponent, AccordionComponent, NavComponent, EventInfoComponent],
    templateUrl: `enrol.component.html`,
})
export class EnrolComponent {
    menuOpen = false;


    //
    // ngOnInit(): void {
    //     this.loadRowsFromlocalStorage();
    //     this.localStorageService.setItem('rowCount', this.rows.length);
    // }
    //
    toggleMenu(): void {
        this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    }
    //
    //
    // handleRowAddition(row: RowModel) {
    //     // Add the row object to the rows array
    //     console.log('New RowModel Added:', row);
    //     this.saveRowsTolocalStorage()
    //
    // }
    //
    // handleRowRemoval(index: number) {
    //      // Remove the row at the specified index
    //     this.saveRowsTolocalStorage()
    // }
    //

    // private loadRowsFromlocalStorage(): void {
    //     const savedRows = this.localStorageService.getItem<RowModel[]>('rows');
    //     if (savedRows) {
    //         this.rows = savedRows;
    //         console.log('Rows loaded from localStorage:', this.rows);
    //     }
    // }
    //
    // private saveRowsTolocalStorage(): void {
    //     this.localStorageService.setItem('rows', this.rows);
    // }


}

