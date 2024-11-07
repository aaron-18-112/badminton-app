import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AccordionComponent} from "./accordion/accordion.component";
import {NavComponent} from "./nav/nav.component";
import {ContentComponent} from "./content/content.component";
import {HamburgerMenuComponent} from "./hamburger-menu/hamburger-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavComponent,
        ContentComponent,
        HamburgerMenuComponent,
        AccordionComponent,
    ],
    template: `
        <div class="page">
            <div class="sidebar">
                <img class="svg-container" alt="Logo" src="logo-SVG.svg">
                <app-nav></app-nav>
            </div>
            <app-content></app-content>
        </div>
        <router-outlet/>
    `,
    styles: [],
})
export class AppComponent {
    title = 'AJ Bell ShuttleBell';
}
