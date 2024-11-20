import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-hamburger-menu',
    standalone: true,
    imports: [NgClass, RouterLink, RouterLinkActive],
    templateUrl: `hamburger-menu.component.html`,
    styleUrls: ['hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
    @Input() menuOpen: boolean = false;
    @Output() toggleMenu = new EventEmitter<void>();


    toggleMenuState(): void {
        this.menuOpen = !this.menuOpen;
        this.toggleMenu.emit();
    }
}