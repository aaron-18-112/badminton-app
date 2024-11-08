import {Routes} from '@angular/router';
import {EnrolComponent} from "./pages/enrol/enrol.component";

export const routes: Routes = [
    { path: '',   redirectTo: '/enrol', pathMatch: 'full' },
    { path: 'enrol', component: EnrolComponent },
];
