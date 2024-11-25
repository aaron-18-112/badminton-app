import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {EnrolFormComponent} from "../enrol-form/enrol-form.component";

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [EnrolFormComponent, CommonModule, NgIf],
    templateUrl: `accordion.component.html`,
    styleUrls: ['accordion.component.css']
})
export class AccordionComponent {
    isOpen: boolean = false;

    @Output() formSubmit = new EventEmitter<any>();

    toggleAccordion() {
        this.isOpen = !this.isOpen;
    }

    handleFormSubmit(player: any): void {
        this.formSubmit.emit(player);
        this.toggleAccordion();
    }
}
