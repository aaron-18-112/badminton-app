import {NgFor, NgStyle} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {PlayerDetailsService} from "../../services/player-details.service";
import {Player} from "../../models/player.model";


@Component({
    selector: 'app-table',
    standalone: true,
    imports: [NgStyle, NgFor],
    templateUrl: 'enrol-table.component.html',
    styleUrls: ['enrol-table.component.css']
})

export class EnrolTableComponent implements OnInit {
    rows: Player[] = [];

    constructor(private playerDetailsService: PlayerDetailsService) {
    }

    ngOnInit(): void {
        this.loadPlayers();
    }

    // Fetch all players from the backend
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

    handleRemoveRow(index: number): void {
        const playerId = this.rows[index].id;
        this.playerDetailsService.deletePlayer(playerId).subscribe({
            next: () => {
                this.rows.splice(index, 1);
            },
            error: (err) => {
                console.error('Error deleting player:', err);
            },
        });
    }
}