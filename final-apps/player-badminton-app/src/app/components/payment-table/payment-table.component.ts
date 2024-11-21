import {Component, OnInit} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {Row} from "../../row";
import {PlayerService} from "../../services/player.service"


@Component({
    selector: 'app-payment-table',
    standalone: true,
    imports: [NgForOf, NgStyle],
    templateUrl: 'payment-table.component.html',
    styleUrls: ['payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {
    rows: Row[] = [];
    listOfPlayersData: any = null;

    constructor(public playerService: PlayerService) {
    }

    ngOnInit(): void {
        console.log("the data is loaded from the database for the Payment Tab")
        this.getPlayers()
    }

    handleRemoveRow(index: number): void {
        window.location.reload();
    }
    getPlayers(){
        this.playerService.getListOfPlayers().subscribe((data) => {
            this.listOfPlayersData = data;
        })


    }

}
