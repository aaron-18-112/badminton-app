import { Component, OnInit } from '@angular/core';
import {TableComponent} from "../table/table.component";
import {DateAndTimeComponent} from "../date-and-time/date-and-time.component";
import { NgClass } from '@angular/common';
import {MenuStateService} from "../menu-state.service";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
      TableComponent,
      DateAndTimeComponent,
      NgClass
  ],
  template: `
      <div [ngClass]="{'menu-open': menuOpen}">
          <div class="content-container">
              <section class="content1">
                  <p>
                      <span class="black-text">Next Badminton Session: </span>
                      <app-date-and-time></app-date-and-time>
                  </p>

                  <p>
                      <span class="black-text">Total Number of Players: </span>
                      <span class="red-text"></span>
                  </p>
              </section>
              <button class="content2">Join</button>
              <div class="content3">
                  <app-table></app-table>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ContentComponent implements OnInit {
    menuOpen: boolean = false;

    constructor(private menuStateService: MenuStateService) {}

    ngOnInit() {
        this.menuStateService.menuOpen$.subscribe((state) => {
            this.menuOpen = state;
        });
    }
}
