import {Component} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
    selector: 'app-payment-table',
    standalone: true,
    imports: [
        NgForOf,
        NgStyle
    ],
    templateUrl: 'payment-table.component.html',
    styleUrls: ['payment-table.component.css']
})
export class PaymentTableComponent {

}
