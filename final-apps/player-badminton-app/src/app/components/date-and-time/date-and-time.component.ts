import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-date-and-time',
    standalone: true,
    imports: [],
    templateUrl: 'date-and-time.component.html',
})
export class DateAndTimeComponent implements OnInit {
    date: Date | null = null;
    formattedDate: string = '';
    formattedTime: string = '';

    ngOnInit(): void {
        const d = new Date(2024, 10, 12, 17, 0);
        this.date = d;
        this.formatDateAndTime();
    }

    formatDateAndTime(): void {
        if (this.date) {
            this.formattedDate = this.date.toLocaleDateString('en-GB', {
                day: '2-digit', month: '2-digit', year: '2-digit'
            });

            this.formattedTime = `${this.date.getHours().toString().padStart(2, '0')}:${this.date.getMinutes().toString().padStart(2, '0')}`;
        } else {
            this.formattedDate = 'Loading...';
            this.formattedTime = '';
        }
    }
}
