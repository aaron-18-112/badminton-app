import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

interface Row {
    name: string;
    email?: string;
}

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: `accordion.component.html`,
    styleUrls: ['accordion.component.css']
})
export class AccordionComponent {
    isOpen: boolean = false;
    formData = {fname: '', lname: '', email: ''};

    @Output() addRow = new EventEmitter<Row>();

    toggleAccordion() {
        this.isOpen = !this.isOpen;

    }

    handleChange(event: Event, field: keyof typeof this.formData) {
        const input = event.target as HTMLInputElement;
        this.formData[field] = input?.value || '';
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        const fullName = `${this.formData.fname} ${this.formData.lname}`;
        const row: Row = {
            name: fullName,
            email: this.formData.email,
        }
        this.addRow.emit(row);  // Emit the row object
        this.formData = {fname: '', lname: '', email: ''};  // Reset the form
        this.isOpen = false;  // Close the accordion after submitting
    }
}
