import {Component, Input, OnInit} from '@angular/core';
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import {Row} from "../../row";
import {LocalStorageService} from "../../local-storage.service";
import {PlayerService} from "../../services/player.service";


@Component({
    selector: 'app-event-info',
    standalone: true,
    imports: [DateAndTimeComponent],
    templateUrl: `event-info.component.html`,
    styleUrls: [`event-info.component.css`]
})
export class EventInfoComponent implements OnInit{
    @Input() rows: Row[] = [];
    playerCount: number | null = null;

    constructor(private playerService: PlayerService) {
    }

    ngOnInit(): void {
       this.fetchPlayerCount();
    }

    fetchPlayerCount(): void{

        this.playerService.getCount().subscribe({
            next: (response) => {
                this.playerCount = response.count;
            },
            error: (err) => {
                console.error('Failed to fetch player count', err);
                this.playerCount = null; // Handle error case
            }
        });
    }
    get rowCount(): number {
    return this.rows.length;

}

}
