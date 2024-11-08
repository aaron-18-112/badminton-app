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
    templateUrl: `app.component.html`,
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    title = 'AJ Bell ShuttleBell';
}
