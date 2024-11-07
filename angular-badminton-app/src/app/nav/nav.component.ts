import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
    <nav class="button-container">
      <button aria-label="Numbers" id="numbers">Numbers</button>
      <button aria-label="Payment" id="payment">Payment</button>
      <button aria-label="Admin" id="admin">Admin</button>
    </nav>
  `,
  styles: ``
})
export class NavComponent {

}
