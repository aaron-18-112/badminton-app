import {NgFor, NgStyle} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Row} from "../../row";
import {LocalStorageService} from "../../local-storage.service";
import {PlayerService} from "../../services/player.service";

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [NgStyle, NgFor],
    templateUrl: 'enrol-table.component.html',
    styleUrls: ['enrol-table.component.css']
})

export class EnrolTableComponent implements OnInit {
    @Input() rows: Row[] = [];
    @Output() removeRow = new EventEmitter<number>();
    listOfPlayersData: any = null;


    constructor(private localStorageService: LocalStorageService, public playerService: PlayerService) {
    }

    ngOnInit(): void {
        this.rows = this.localStorageService.loadRows();
        console.log('Im called');
        this.getPlayers()
    }

    handleRemoveRow(index: number): void {
        this.removeRow.emit(index);
        window.location.reload();
    }
    getPlayers(){
        this.playerService.getListOfPlayers().subscribe((data) => {
            this.listOfPlayersData = data;
        })


    }



}