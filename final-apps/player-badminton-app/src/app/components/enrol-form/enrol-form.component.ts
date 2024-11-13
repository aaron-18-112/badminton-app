import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";
import {Row} from "../../row";


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
    rows: Row[] = [];


    @Output() addRow = new EventEmitter<Row>();
    @Output() formSubmit = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {
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
            email: ['', [Validators.required, Validators.email]]
        });


        const savedRows = localStorage.getItem('rows');
        if (savedRows){
            this.rows = JSON.parse(savedRows);
        }

        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const formData = JSON.parse(savedData);


        }

    }

    onSubmit(): void {
        if (this.enrolForm.valid) {
            const formData = this.enrolForm.value;

            localStorage.setItem('formData', JSON.stringify(formData));
            const fullName = `${this.enrolForm.value.firstName} ${this.enrolForm.value.lastName}`;
            const row: Row = {
                name: fullName,
                email: formData.email
            };

            this.rows.push(row);

            localStorage.setItem('rows', JSON.stringify(this.rows));

            this.formSubmit.emit(formData);
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

