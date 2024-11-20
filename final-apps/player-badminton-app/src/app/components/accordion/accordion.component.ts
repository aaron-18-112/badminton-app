import {Component} from '@angular/core';
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

    toggleAccordion() {
        this.isOpen = !this.isOpen;
    }

    handleFormSubmit($event: any): void {
        this.toggleAccordion();
    }
}
