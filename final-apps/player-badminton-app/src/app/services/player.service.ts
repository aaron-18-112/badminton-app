import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

type Player = {
    playerId: string,
    firstName: string,
    lastName: string,
    email: string
}

@Injectable({providedIn: 'root'})
export class PlayerService {
    constructor(private http: HttpClient) {
        // This service can now make HTTP requests via `this.http`.

    }
    getListOfPlayers(): Observable<any>{
        return this.http.get("http://localhost:5062/Player");
    }

    addPlayer( playerId: string, firstName: any, lastName: any, email: any): Observable<any>{
        const body = {
            playerId: playerId,
            firstName: firstName,
            lastName: lastName,
            email: email
        } ;
        console.log("i am being used aswell, my body", body);
        this.http.post<any>('http://localhost:5062/Player',body, {observe: 'response'}).subscribe(res => {
            console.log('Response status:', res.status);
        })
        return this.http.post<any>("http://localhost:5062/Player", body)


    }
}