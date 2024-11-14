import {Component, Input} from '@angular/core';
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import {Row} from "../../row";
import {SessionStorageService} from "../../session-storage.service";


@Component({
    selector: 'app-event-info',
    standalone: true,
    imports: [DateAndTimeComponent],
    templateUrl: `event-info.component.html`,
    styleUrls: [`event-info.component.css`]
})
export class EventInfoComponent {

    @Input() rows: Row[] = [];

    constructor(private sessionStorageService: SessionStorageService) {
    }

    get rowCount(): number {
        return this.sessionStorageService.getItem('rowCount') ?? 0;
    }


}
