import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../models/player.model";

@Injectable({
    providedIn: 'root'
})
export class PlayerDetailsService {

    private apiUrl: string = "http://localhost:5089/api/Player";

    constructor(private http: HttpClient) {
    }

    getAllPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(`${this.apiUrl}`);
    }

    createPlayer(player: Player): Observable<Player> {
        console.log(player);
        return this.http.post<Player>(`${this.apiUrl}`, player);
    }

    deletePlayer(firstName: string): Observable<any> {
        console.log(firstName);
        return this.http.delete<Player>(`${this.apiUrl}/firstname/${firstName}`);
    }

    getPlayerCount(): Observable<number> {
        return this.http.get<number>(`${this.apiUrl}/count`);
    }

}
