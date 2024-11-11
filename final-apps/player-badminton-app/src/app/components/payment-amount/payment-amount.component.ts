import {Component} from '@angular/core';
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";

@Component({
    selector: 'app-payment-amount',
    standalone: true,
    imports: [
        DateAndTimeComponent
    ],
    templateUrl: 'payment-amount.component.html',
    styleUrls: ['payment-amount.component.css']
})
export class PaymentAmountComponent {

}
