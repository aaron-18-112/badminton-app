import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [NgClass],
  template: `
      <div class="hamburger-menu" [ngClass]="{'menu-open': menuOpen}">
          <!--Hamburger icon-->
          <img class="svg-container" alt="Logo" src="logo-SVG.svg"/>
          <button class="icon" id="menu-button" (click)="toggleMenu()" aria-label="Toggle Menu">
              <img
                      alt="{{ menuOpen ? 'Close Menu' : 'Open Menu' }}"
                      [src]="menuOpen ? 'assets/close-icon.svg' : '/hamburger-icon.svg'"
              />
          </button>

          <!--Sidebar-->
          <div class="sidebar" [ngClass]="{'open': menuOpen}">
              <nav class="button-container">
                  <button aria-label="Numbers" id="numbers">Numbers</button>
                  <button aria-label="Payment" id="payment">Payment</button>
                  <button aria-label="Admin" id="admin">Admin</button>
              </nav>
          </div>
      </div>
  `,
  styles: ``
})
export class HamburgerMenuComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
