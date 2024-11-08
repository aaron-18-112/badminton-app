import {Component} from '@angular/core';
import {AccordionComponent} from "../../components/accordion/accordion.component";
import {NavComponent} from "../../components/nav/nav.component";
import {ContentComponent} from "../../components/content/content.component";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";

@Component({
    selector: 'enrol-component',
    standalone: true,
    imports: [
        NavComponent,
        ContentComponent,
        HamburgerMenuComponent,
        AccordionComponent,
    ],
    templateUrl: `enrol.component.html`,
    styleUrls: ['enrol.component.css'],
})
export class EnrolComponent {

}
