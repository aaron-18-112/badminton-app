import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  private menuOpenSubject = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuOpenSubject.asObservable();

  toggleMenu() {
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }

  setMenuState(state: boolean) {
    this.menuOpenSubject.next(state);
  }
}