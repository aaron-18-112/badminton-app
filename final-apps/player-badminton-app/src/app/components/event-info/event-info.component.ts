import {Component, OnInit} from '@angular/core';
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import {PlayerDetailsService} from "../../services/player-details.service";

@Component({
    selector: 'app-event-info',
    standalone: true,
    imports: [DateAndTimeComponent],
    templateUrl: `event-info.component.html`,
    styleUrls: [`event-info.component.css`]
})
export class EventInfoComponent implements OnInit {

    playerCount: number = 0;

    constructor(private playerDetailsService: PlayerDetailsService) {
    }

    ngOnInit() {
        this.getPlayerCount()
    }

    getPlayerCount() {
        this.playerDetailsService.getPlayerCount().subscribe({
            next: (count: number) => {
                this.playerCount = count;
            },
            error: (err) => {
                console.error('Error fetching player count:', err);
            }
        });
    }

}
