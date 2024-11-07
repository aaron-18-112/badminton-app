import { Component } from '@angular/core';
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TableComponent],
  template: `
    <div class="content-container">
      <section class="content1">
        <p>
          <span class="black-text">Next Badminton Session: </span>
          <span class="red-text"></span>
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
  `,
  styles: ``
})
export class ContentComponent {

}
