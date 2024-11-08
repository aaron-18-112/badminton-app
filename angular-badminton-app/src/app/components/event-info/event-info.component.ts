import {Component} from '@angular/core';
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import {Row} from "../../row";

@Component({
    selector: 'app-event-info',
    standalone: true,
    imports: [
        DateAndTimeComponent
    ],
    templateUrl: `event-info.component.html`,
    styleUrls: [`event-info.component.css`]
})
export class EventInfoComponent {

    rows: Row[] = [];

    get rowCount(): number {

        return this.rows.length;
    }
}
