import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Row } from './row';
import { isPlatformBrowser } from '@angular/common'; // Import utility to check platform

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'rowsData';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Check if the code is running in the browser environment
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId); // Checks if running in the browser
  }

  saveRows(rows: Row[]): void {
    if (this.isBrowser()) {
      // Only access localStorage if we are in the browser environment
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(rows));
      } catch (e) {
        console.error('Error saving data to localStorage:', e);
      }
    } else {
      console.warn('localStorage is not available in this environment.');
    }
  }

  getRows(): Row[] {
    if (this.isBrowser()) {
      try {
        const storedRows = localStorage.getItem(this.storageKey);
        if (storedRows) {
          return JSON.parse(storedRows);
        }
      } catch (e) {
        console.error('Error reading data from localStorage:', e);
      }
    } else {
      console.warn('localStorage is not available in this environment.');
    }
    return []; // Return an empty array if localStorage is unavailable
  }
}
