import {Component, OnInit} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {Row} from "../../row";
import {SessionStorageService} from "../../session-storage.service";

@Component({
    selector: 'app-payment-table',
    standalone: true,
    imports: [NgForOf, NgStyle],
    templateUrl: 'payment-table.component.html',
    styleUrls: ['payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {
    rows: Row[] = [];

    constructor(private sessionStorageService: SessionStorageService) {
    }

    ngOnInit(): void {
        this.rows = this.sessionStorageService.loadRows();
    }

}
