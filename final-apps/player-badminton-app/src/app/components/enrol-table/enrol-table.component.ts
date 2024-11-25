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
    @Output() rowCountChange = new EventEmitter<number>();

    constructor(private playerDetailsService: PlayerDetailsService) {
    }

    ngOnInit(): void {
        this.loadPlayers();
    }

    loadPlayers(): void {
        this.playerDetailsService.getAllPlayers().subscribe({
            next: (players) => {
                this.rows = players;
                this.rowCountChange.emit(this.rows.length);
            },
            error: (err) => {
                console.error('Error fetching players:', err);
            },
        });
    }

    addRow(player: Player): void {
        this.rows.push(player);
        this.rowCountChange.emit(this.rows.length);

        this.playerDetailsService.createPlayer(player).subscribe({
            next: () => {
                this.loadPlayers();
            },
            error: (err) => {
                console.error('Error adding player:', err);
            },
        });
    }

    handleRemoveRow(index: number): void {
        const playerId = this.rows[index].id;

        this.playerDetailsService.deletePlayer(playerId).subscribe({
            next: () => {
                this.rows.splice(index, 1);
                this.removeRow.emit(index);
                this.rowCountChange.emit(this.rows.length);
            },
            error: (err) => {
                console.error('Error deleting player:', err);
            },
        });

        // window.location.reload()
    }
}