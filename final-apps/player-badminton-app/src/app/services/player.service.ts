import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

type Player = {
    playerId: string,
    name: string
    firstName: string,
    lastName: string,
    email: string
}

@Injectable({providedIn: 'root'})
export class PlayerService {
    private apiUrl = 'http://localhost:5062/Player';
    constructor(private http: HttpClient) {}
    getListOfPlayers(): Observable<any>{
        return this.http.get(this.apiUrl);
    }

    addPlayer( playerId: string, name: any, firstName: any, lastName: any, email: any): Observable<any>{
        const body = {
            playerId: playerId,
            name: name,
            firstName: firstName,
            lastName: lastName,
            email: email
        } ;

        console.log("i am being used aswell, my body", body);
        return this.http.post<any>("http://localhost:5062/Player", body);


    }
    getCount(): Observable<{count: number}>{
        return this.http.get<{ count: number}>(`${this.apiUrl}/count`);
    }

    deletePlayer(id: string): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`)
    }


}