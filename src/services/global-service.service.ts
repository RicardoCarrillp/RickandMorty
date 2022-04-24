import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character, Episode } from 'src/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  IDCharacter:number;
  IDEpisode:string;

  constructor(private http: HttpClient) { }

  getCharacters(page=1	) {
    return this.http.get<Character[]>(`${environment.UrlApi}character?page=${page}`)


  }


  getDetailCharacter(id: number) {
    return this.http.get<Character>(`${environment.UrlApi}character/${id}`)

  }

  getDetailEpisode(id: string) {
    return this.http.get<Episode>(`${environment.UrlApi}episode/${id}`)

  }
}
