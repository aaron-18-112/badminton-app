import {Component} from '@angular/core';
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";
import {PaymentTableComponent} from "../../components/payment-table/payment-table.component";
import {NgClass} from "@angular/common";



@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [
        NavComponent,
        EventInfoComponent,
        HamburgerMenuComponent,
        PaymentTableComponent,
        NgClass
    ],
    templateUrl: `payment.component.html`,
    styleUrls: ['payment.component.css'],
})
export class PaymentComponent {
    menuOpen = false;

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    }

}
