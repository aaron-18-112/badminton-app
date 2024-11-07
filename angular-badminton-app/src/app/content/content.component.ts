import {Component} from '@angular/core';
import {TableComponent} from "../table/table.component";
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import {NgClass} from '@angular/common';
import {HamburgerMenuComponent} from "../hamburger-menu/hamburger-menu.component";

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        TableComponent,
        DateAndTimeComponent,
        NgClass,
        HamburgerMenuComponent
    ],
    templateUrl: `content.component.html`,
    styles: ``
})
export class ContentComponent {
    menuOpen = false;

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
