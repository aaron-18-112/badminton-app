import {NgFor, NgStyle} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerDetailsService} from "../../services/player-details.service";
import {Player} from "../../models/player.model";


@Component({
    selector: 'app-enrol-table',
    standalone: true,
    imports: [NgStyle, NgFor],
    templateUrl: 'enrol-table.component.html',
    styleUrls: ['enrol-table.component.css']
})

export class EnrolTableComponent implements OnInit {
    @Input() rows: Player[] = [];

    @Output() removeRow = new EventEmitter<number>();

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

    handleRemoveRow(index: number): void {
        const playerId = this.rows[index].id;
        this.playerDetailsService.deletePlayer(playerId).subscribe({
            next: () => {
                this.rows.splice(index, 1);
                this.removeRow.emit(index);
            },
            error: (err) => {
                console.error('Error deleting player:', err);
            },
        });
    }
}