import {NgFor, NgStyle} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Row} from "../../row";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        NgStyle,
        NgFor,
        FormsModule
    ],
    templateUrl: 'payment-table.component.html',
    styleUrls: ['payment-table.component.css']
})

export class PaymentTableComponent {

    rows = [
        { name: 'John Doe', paid: false },
        { name: 'Jane Smith', paid: true },
        { name: 'Alice Johnson', paid: false }
        ];
}