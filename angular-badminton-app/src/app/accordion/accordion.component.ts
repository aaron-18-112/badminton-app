import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: `accordion.component.html`,
    styles: ``
})
export class AccordionComponent {
    isOpen: boolean = false;
    formData = {fname: '', lname: '', email: ''};

    @Output() addRow = new EventEmitter<string>();

    toggleAccordion() {
        this.isOpen = !this.isOpen;

    }

    handleChange(event: Event, field: keyof typeof this.formData) {
        const input = event.target as HTMLInputElement;
        this.formData[field] = input.value;
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        const fullName = `${this.formData.fname} ${this.formData.lname}`;
        this.addRow.emit(fullName);  // Emit the full name to the parent
        this.formData = { fname: '', lname: '', email: '' };  // Reset the form
        this.isOpen = false;  // Close the accordion after submitting
    }
}
