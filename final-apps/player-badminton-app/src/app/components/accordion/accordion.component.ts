import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnrolFormComponent} from "../enrol-form/enrol-form.component";
import {Row} from "../../row";

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [
        EnrolFormComponent,
        CommonModule
    ],
    templateUrl: `accordion.component.html`,
    styleUrls: ['accordion.component.css']
})
export class AccordionComponent {
    isOpen: boolean = false;

    @Output() addRow = new EventEmitter<Row>();
    @Input() rows: Row[] = [];

    toggleAccordion() {
        this.isOpen = !this.isOpen;
    }

    handleFormSubmit(formData: any): void {

        const row: Row = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
        };
        this.addRow.emit(row);
        this.toggleAccordion();
    }
}
