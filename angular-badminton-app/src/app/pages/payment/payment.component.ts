import {Component} from '@angular/core';
import {NavComponent} from "../../components/nav/nav.component";
import {EventInfoComponent} from "../../components/event-info/event-info.component";

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [
        NavComponent,
        EventInfoComponent
    ],
    templateUrl: `payment.component.html`,
})
export class PaymentComponent {

}
