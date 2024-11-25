import {Component, ChangeDetectorRef} from '@angular/core';
import {EnrolTableComponent} from "../../components/enrol-table/enrol-table.component";
import {NgClass} from '@angular/common';
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
    playerCount = 0;

    constructor(private cdr: ChangeDetectorRef) {}

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    updatePlayerCount(count: number): void {
        this.playerCount = count;
        this.cdr.detectChanges();
    }
}