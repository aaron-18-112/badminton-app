import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import {MenuStateService} from "../menu-state.service";

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
                      [src]="menuOpen ? '/close-icon.svg' : '/hamburger-icon.svg'"
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
})
export class HamburgerMenuComponent implements OnInit {
  menuOpen: boolean = false;

  constructor(private menuStateService: MenuStateService) {}

  ngOnInit() {
    this.menuStateService.menuOpen$.subscribe(state => {
      this.menuOpen = state;
    });
  }

  toggleMenu() {
    this.menuStateService.toggleMenu();
  }
}
