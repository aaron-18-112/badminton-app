import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";
import {Row} from "../../row";
import {LocalStorageService} from "../../local-storage.service";

@Component({
    selector: 'app-enrol-form',
    templateUrl: './enrol-form.component.html',
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
    styleUrls: ['./enrol-form.component.css']
})
export class EnrolFormComponent implements OnInit {

    enrolForm!: FormGroup;
    isOpen = true;


    @Input() rows: Row[] = [];
    @Output() addRow = new EventEmitter<Row>();
    @Output() formSubmit = new EventEmitter<any>();

    constructor(
        private localStorageService: LocalStorageService,
        private formBuilder: FormBuilder
    ) {
    }

    get firstName() {
        return this.enrolForm.get('firstName')!;
    }

    get lastName() {
        return this.enrolForm.get('lastName')!;
    }

    get email() {
        return this.enrolForm.get('email')!;
    }

    ngOnInit() {
        this.enrolForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])")]]
        });
    }

    onSubmit(): void {
        if (this.enrolForm.valid) {
            const fullName = `${this.enrolForm.value.firstName} ${this.enrolForm.value.lastName}`;
            const row: Row = {
                name: fullName,
                email: this.enrolForm.value.email
            };

            this.formSubmit.emit(this.enrolForm.value);
            this.addRow.emit(row);
            this.resetForm();
            window.location.reload();
        }
    }

    resetForm(): void {
        this.enrolForm.reset();
        this.isOpen = false;
    }

}

