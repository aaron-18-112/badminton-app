import {Component, OnInit} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {PlayerDetailsService} from "../../services/player-details.service";
import {Player} from "../../models/player.model";

@Component({
    selector: 'app-payment-table',
    standalone: true,
    imports: [NgForOf, NgStyle],
    templateUrl: 'payment-table.component.html',
    styleUrls: ['payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

    rows: Player[] = [];

    constructor(private playerDetailsService: PlayerDetailsService) {
    }

    ngOnInit(): void {
        this.loadPlayers();
    }

    loadPlayers(): void {
        this.playerDetailsService.getAllPlayers().subscribe({
            next: (players) => {
                this.rows = players;
            },
            error: (err) => {
                console.error('Error fetching players:', err);
            },
        });
    }

}
