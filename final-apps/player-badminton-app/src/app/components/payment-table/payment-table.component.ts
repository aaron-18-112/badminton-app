import {Component, OnInit} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {PlayerDetailsService} from "../../services/player-details.service";



@Component({
    selector: 'app-payment-table',
    standalone: true,
    imports: [NgForOf, NgStyle],
    templateUrl: 'payment-table.component.html',
    styleUrls: ['payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

    ngOnInit(): void {

    }

}
