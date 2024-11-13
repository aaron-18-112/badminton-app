import {NgFor, NgStyle} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Row} from "../../row";
import {LocalStorageService} from "../../local-storage.service";

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


    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        this.rows = this.localStorageService.loadRows();
    }

    handleRemoveRow(index: number): void {
        this.removeRow.emit(index);
        window.location.reload();
    }

}