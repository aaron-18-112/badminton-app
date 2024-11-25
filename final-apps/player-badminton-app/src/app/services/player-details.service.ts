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
        return this.http.get<Player[]>(`${this.apiUrl}/get-all-players`);
    }

    createPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(`${this.apiUrl}/create-player`, player);
    }


    deletePlayer(id: string): Observable<any> {
        return this.http.delete<Player>(`${this.apiUrl}/delete-players-by-id/${id}`);
    }

    getPlayerCount(): Observable<number> {
        return this.http.get<number>(`${this.apiUrl}/get-number-of-players`);
    }

    deleteAllPlayers (): Observable<any> {
        return this.http.get<number>(`${this.apiUrl}/delete-all-players`);
    }

}
