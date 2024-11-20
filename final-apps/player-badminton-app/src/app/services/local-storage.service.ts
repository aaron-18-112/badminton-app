// import {Injectable} from '@angular/core';
// import {RowModel} from "../models/row.model";
//
// @Injectable({
//     providedIn: 'root'
// })
// export class LocalStorageService {
//
//     constructor() {
//     }
//
//     setItem(key: string, value: any): void {
//         if (this.isBrowser()) {
//             localStorage.setItem(key, JSON.stringify(value));
//         }
//     }
//
//     getItem<T>(key: string): T | null {
//         if (this.isBrowser()) {
//             const item = localStorage.getItem(key);
//             return item ? JSON.parse(item) : null;
//         }
//         return null;
//     }
//
//     loadRows(): RowModel[] {
//         if (this.isBrowser()) {
//             const savedRows = localStorage.getItem('rows');
//             if (savedRows) {
//                 return JSON.parse(savedRows);
//             }
//         }
//         return [];
//     }
//
//     private isBrowser(): boolean {
//         return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
//     }
//
// }
