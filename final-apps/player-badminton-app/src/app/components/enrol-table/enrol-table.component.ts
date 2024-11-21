import {NgFor, NgStyle} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Row} from "../../row";

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
    @Output() removeRow = new EventEmitter<string>();
    listOfPlayersData: any = null;


    constructor( public playerService: PlayerService) {
    }

    ngOnInit(): void {
       console.log("the data is loaded from the database for the Payment Tab")
        this.getPlayers()
    }

    handleRemoveRow(_id: string): void {
        this.removeRow.emit(_id);
        console.log(_id);

        this.playerService.deletePlayer(_id).subscribe((response) => {
            console.log(response);



        })
        window.location.reload()




    }
    getPlayers(){
        this.playerService.getListOfPlayers().subscribe((data) => {
            this.listOfPlayersData = data;
            console.log(this.listOfPlayersData);


        })


    }
    deletePlayers(_id: string){
        this.playerService.deletePlayer(_id).subscribe((response) => {
            console.log(response);


        })

    }



}