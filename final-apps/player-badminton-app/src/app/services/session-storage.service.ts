// import {Injectable} from '@angular/core';
// import {RowModel} from "./row";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SessionStorageService {
//
//   constructor() {
//   }
//
//   setItem(key: string, value: any): void {
//     if (this.isBrowser()) {
//       sessionStorage.setItem(key, JSON.stringify(value));
//     }
//   }
//
//   getItem<T>(key: string): T | null {
//     if (this.isBrowser()) {
//       const item = sessionStorage.getItem(key);
//       return item ? JSON.parse(item) : null;
//     }
//     return null;
//   }
//
//   loadRows(): RowModel[] {
//     if (this.isBrowser()) {
//       const savedRows = sessionStorage.getItem('rows');
//       if (savedRows) {
//         return JSON.parse(savedRows);
//       }
//     }
//     return [];
//   }
//
//   private isBrowser(): boolean {
//     return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
//   }
//
// }
