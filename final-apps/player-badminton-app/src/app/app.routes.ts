import {Routes} from '@angular/router';
import {EnrolComponent} from "./pages/enrol/enrol.component";
import {PaymentComponent} from "./pages/payment/payment.component";

export const routes: Routes = [
    {path: '', redirectTo: '/enrol', pathMatch: 'full'},
    {path: 'enrol', component: EnrolComponent},
    {path: 'payment', component: PaymentComponent}
];
