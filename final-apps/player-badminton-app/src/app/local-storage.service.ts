import {Injectable} from '@angular/core';
import {Row} from "./row";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    loadRows(): Row[] {
        const savedRows = localStorage.getItem('rows');
        if (savedRows) {
            return JSON.parse(savedRows);
        }
        return [];  // Return an empty array if no rows found in localStorage
    }


    saveRows(rows: Row[]): void {
        localStorage.setItem('rows', JSON.stringify(rows));
    }


    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }

}
