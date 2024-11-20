import {Component} from '@angular/core';
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";
import {HamburgerMenuComponent} from "../../components/hamburger-menu/hamburger-menu.component";
import {NgClass} from "@angular/common";
import {PaymentAmountComponent} from "../../components/payment-amount/payment-amount.component";
import {PaymentTableComponent} from "../../components/payment-table/payment-table.component";
import {RowModel} from "../../models/row.model";

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [NavComponent, EventInfoComponent, HamburgerMenuComponent, NgClass, PaymentAmountComponent, PaymentTableComponent],
    templateUrl: `payment.component.html`,
})
export class PaymentComponent {

    menuOpen = false;


    toggleMenu(): void {
        this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    }


}
