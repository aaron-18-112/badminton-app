import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {EnrolFormComponent} from "../enrol-form/enrol-form.component";
import {RowModel} from "../../models/row.model";

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [EnrolFormComponent, CommonModule, NgIf],
    templateUrl: `accordion.component.html`,
    styleUrls: ['accordion.component.css']
})
export class AccordionComponent {
    isOpen: boolean = true;

    // toggleAccordion() {
    //     this.isOpen = !this.isOpen;
    // }

    handleFormSubmit($event: any): void {

        // this.toggleAccordion();
    }
}
