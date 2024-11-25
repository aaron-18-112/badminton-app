import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";
import {PlayerDetailsService} from "../../services/player-details.service";
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-enrol-form',
    templateUrl: './enrol-form.component.html',
    standalone: true,
    imports: [NgIf, ReactiveFormsModule],
    styleUrls: ['./enrol-form.component.css']
})
export class EnrolFormComponent implements OnInit {

    enrolForm!: FormGroup;
    isOpen = true;

    @Output() formSubmit = new EventEmitter<any>();

    constructor(private playerDetailsService: PlayerDetailsService, private formBuilder: FormBuilder) {
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
        this.enrolForm.markAllAsTouched();

        if (this.enrolForm.valid) {
            const player = {
                id: "",
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                email: this.email.value,
            }
            this.formSubmit.emit(player);
            this.resetForm();

            const row = {
                name: `${this.firstName.value} ${this.lastName.value}`,
                email: this.email.value
            };

        }
    }

    resetForm(): void {
        this.enrolForm.reset();
        this.isOpen = false;
        // window.location.reload()
    }

}

